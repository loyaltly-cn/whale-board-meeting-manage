<template>
	<view >
		<uni-nav-bar shadow title="回放" color="#ffffff" background-color="#00aaff" :fixed="true" :statusBar="true"></uni-nav-bar>
		<view v-show="show" class="main">
			<canvas class="SmartScreen" canvas-id="SmartScreen"  :style="canvasStyle"> </canvas>
		</view>
		<view class="slider">
			<u-slider v-model="timer" @change="update()" @changing="viewHandler()"  @input="updateCount" :min=startTimeStamp :max="endTimeStamp" ></u-slider>
		</view>
		<view class="count">
			<view class="countLeft">
				{{currentHH}}:{{currentMM}}:{{currentSS}}
			</view>
			<view class="countRight">
				{{HH}}:{{MM}}:{{SS}}
			</view>
		</view>
		<view class="menu">
			<u-icon @click="F(false)" name="rewind-left" :size="iconSize" :color="iconColor"></u-icon>
			<u-icon @click="play()" :name="playIcon" :size="iconSize" :color="iconColor"></u-icon>
			<u-icon @click="F(true)" name="rewind-right" :size="iconSize" :color="iconColor"></u-icon>
		</view>
		
	</view>
</template>

<script>
	import {liveFifo} from '@/static/utils/FIFO'
	import {playBackFifo} from '@/static/utils/FIFO'
	let live = new liveFifo()
	let playBack = new playBackFifo()
	let lastPoint = 0
	export default {
		data() {
			return {
				ctx:null,
				nowPenColor:'#000000',
				canvasStyle:{},
				show:false,
				canvasHeight:0,
				canvasWidth:0,
				number:0,
				flge:false,
				timer:0,
				totalTimeStamp:0,
				startTimeStamp:0,
				endTimeStamp:0,
				HH:0,
				MM:0,
				SS:0,
				MS:0,
				currentHH:0,
				currentMM:0,
				currentSS:0,
				playIcon:'play-circle',
				iconSize:64,
				iconColor:'#000000',
				sliderLoad:true
			}
		},
		onLoad(param) {
			uni.showLoading({
				title:'组件加载中'
			})
			this.ctx = uni.createCanvasContext("SmartScreen",this)
			this.setPenStyle()
			this.setCanvas()
			this.live()
		},
		onHide() {
			// console.log('onHide');
			uni.onSocketClose(function (res) {
			  // console.log('WebSocket 已关闭！');
			});
			lastPoint = 0;
			
		},
		onUnload() {
			uni.closeSocket()
			// console.log('unLoad')
			playBack.clear()
			clearInterval(this.timerFun)
		},
		onReady(){
			let that = this
			uni.onSocketMessage(function(res){
				let data = Array.prototype.map.call(new Uint8Array(res.data), x => ('00' + x.toString(16)).slice(-2)).join('')
				// console.log("接收数量:"+(that.number++)+"	数据:"+data);
				that.dataConvert(data)
			});
			uni.connectSocket({
				url:getApp().globalData.ws
			});
		},	
		methods: {
			dataConvert(data){
				if(data.length>10){
					let x = this.$hexStrToDEC(data.substr(2,4))
					let y = this.$hexStrToDEC(data.substr(6,4))
					let timeStamp = this.$hexStrToDEC(data.substr(10,data.length))
					let type = this.$hexStrToDEC(data.substr(0,2))
					let xx = (this.canvasHeight/getApp().globalData.boardInfo.maximumX)*x;
					let yy = (this.canvasWidth/getApp().globalData.boardInfo.maximumY)*y;
					x = yy;
					x = this.canvasWidth - x;
					y = xx;
					// console.log("before set Fifo")
					this.setFifo({
						"type":type,
						"X":x,
						"Y":y,
						"timeStamp":timeStamp
					})
				}else{
					let timeStamp = this.$hexStrToDEC(data.substr(2,data.length))
					let type = this.$hexStrToDEC(data.substr(0,2))
					this.setFifo({
						"type":type,
						"timeStamp":timeStamp
					})
				}
			},
			setPenStyle(){
				this.ctx.lineWidth = 1;
				this.ctx.setStrokeStyle(this.nowPenColor)
				this.ctx.lineCap = "round"
				this.ctx.lineJoin = "round"
			},
			setCanvas(){
				this.updateResize({
					"height":getApp().globalData.webInfo.windowHeight,
					"width":getApp().globalData.webInfo.windowWidth
				})
			},
			updateResize(param){
				let resizeWidth = param.width
				let resizeHeight = param.height
				let physProportion = getApp().globalData.boardInfo.physWidth/getApp().globalData.boardInfo.physHeight
				if(resizeWidth/resizeHeight > physProportion){
					this.canvasHeight = resizeHeight
					this.canvasWidth = resizeHeight*physProportion
				}else{
					this.canvasWidth = resizeWidth
					this.canvasHeight = resizeWidth*physProportion
				}
				this.canvasStyle = "width: "+this.canvasWidth+"px; height: "+this.canvasHeight+"px;"
				uni.hideLoading()
				this.show = true
			},
			setFifo(obj){
				// console.log(obj);
				if(obj.type&64){//0100 0000
					obj.type&=15 // 0000 1111
					// console.log('over:'+obj.type);
					playBack.set(obj)
					this.endTimeStamp = obj.timeStamp
					getApp().globalData.endTimeStamp = this.endTimeStamp
					this.totalTimeStamp = this.endTimeStamp - this.startTimeStamp
					console.log('totalTimeStamp:'+this.totalTimeStamp+'	endTimeStamp:'+this.endTimeStamp+'	startTimeStamp:'+this.startTimeStamp);
					this.sliderHandler()
					this.sync(this.startTimeStamp)
				}
				obj.type&=15 // 0000 1111
				if(obj.type == 11){
					console.log(' start:'+obj.timeStamp);
					this.startTimeStamp = obj.timeStamp
					this.timer = this.startTimeStamp
					getApp().globalData.startTimeStamp = this.startTimeStamp
				}
				playBack.set(obj)
			},
			sliderHandler(){
				this.HH = parseInt(this.totalTimeStamp/1000/60/60)%24
				this.MM = parseInt(this.totalTimeStamp/1000/60)%60
				this.SS = parseInt(this.totalTimeStamp/1000)%60
			},
			sync(timeStamp){
				let playBackCache = playBack.getPlayBackCache(timeStamp)
				let liveCach = playBack.getLiveCache(timeStamp)
				// console.log(liveCach);
				let that = this
				if(playBackCache.length!=0){
					playBackCache.forEach(function(data){
						that.dataHandler(data)
					})
				}
				liveCach.forEach(function(data){
					live.set(data)
				})
				this.timer = timeStamp
				uni.hideLoading()
			},
			dataHandler(data){
				switch(data.type){
					case 0://按下
						this.ctx.beginPath();
						lastPoint = 0;
						break;
					case 1://抬起
						lastPoint = [];
						break;
					case 2://广播
					
						break;
					case 3://黑笔
						this.setNowPenColor('#000000')
						break;
					case 4://蓝笔
						this.setNowPenColor('#00aaff')
						break;
					case 5://红笔
						this.setNowPenColor('#ff0000')
						break;
					case 6://快照
						
						break;
					case 7://清屏
						this.clearCanvas()
						break;
					case 8://笔的轨迹
						this.draw(data)
						break;
					case 9://手指的轨迹
						
						break;
					case 10://板擦的轨迹
						this.setNowPenColor('#ffffff')
						this.ctx.arc(data.X, data.Y, 20, 0, 2*Math.PI)
						this.ctx.fill();
						this.draw(data)
						break;
					case 11://会议开始
						// console.log('会议开始')
						break;
					case 12://会议结束
						// console.log('会议结束')
						break;
					default:
						//其他情况
						break
				}
			},
			draw(data){
				if(lastPoint != 0){
					this.ctx.moveTo(lastPoint.X, lastPoint.Y)
					this.ctx.lineTo(data.X, data.Y)
					this.ctx.stroke()
					this.ctx.draw(true)
				}
				lastPoint = data;
			},
			clearCanvas(){
				this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
				this.ctx.draw(true);
			},
			setNowPenColor(nowColor){
				if(nowColor!=this.nowPenColor){
					this.ctx.setFillStyle(nowColor)
					this.ctx.setStrokeStyle(nowColor)
					this.nowPenColor = nowColor
				}
			},
			live(){
				setInterval(()=>{
					if(this.flge&&live.len()){
						this.timer = parseInt(this.timer)+15
						this.updateCount(this.timer)
						for(let i=0;i<live.len();i++){
							let data = live.get()
							if(this.timer>=data.timeStamp){
								data = live.reget()
								this.dataHandler(data)
							}
							break
						}
						
					}
				},15);
			},
			viewHandler(){
				if(this.sliderLoad){
					this.flge = false
					this.playIcon = 'play-circle'
					uni.showLoading()
					this.sliderLoad = false
				}
				
			},
			update(value){
				this.sliderLoad = true
				// console.log(value);
				live.clear()
				this.clearCanvas()
				uni.hideLoading()
				this.sync(value)
				// console.log(value);
			},
			play(){
				this.flge?this.playIcon = 'play-circle':this.playIcon = 'pause-circle'
				this.flge = !this.flge
			},
			F(state){
				uni.showLoading()
				this.flge = false
				this.playIcon = 'play-circle'
				let timeStamp = this.$snapShot({
					"timeStamp":this.timer,
					"type":state
					})
				this.updateCount(timeStamp)
				live.clear()
				this.clearCanvas()
				this.sync(timeStamp)
			},
			updateCount(timeStamp){
				let currentTotalTimeStamp = timeStamp - this.startTimeStamp
				this.currentHH = parseInt(currentTotalTimeStamp/1000/60/60)
				this.currentMM = parseInt(currentTotalTimeStamp/1000/60)
				this.currentSS = parseInt(currentTotalTimeStamp/1000)
				// console.log(this.currentHH+':'+this.currentMM+':'+this.currentSS);
			}
		}
	}
</script>

<style>
	page{
		background-color: #cfcfcf;
		text-align: center;
	}
	.SmartScreen{
		background-color: #ffffff;
		margin: 0 auto;
	}
	.slider{
		/* background-color: #ffffff; */
	}
	.count{
		display: flex;
		justify-content:space-around;
	}
	.menu{
		display: flex;
		justify-content:space-around;
	}
</style>
