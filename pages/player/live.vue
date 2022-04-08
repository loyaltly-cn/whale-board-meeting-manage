<template>
	<view>
		<uni-nav-bar shadow title="直播" color="#ffffff" background-color="#00aaff" :fixed="true" :statusBar="true"></uni-nav-bar>
		<view v-show="show" class="main">
			<canvas class="SmartScreen" canvas-id="SmartScreen"  :style="canvasStyle"> </canvas>
		</view>
		
	</view>
</template>

<script>
	import {liveFifo} from '@/static/utils/FIFO'
	import {playBackFifo} from '@/static/utils/FIFO'
	let live = new liveFifo()
	let playBack = new playBackFifo()
	let lastPoint = 0;
	let flag = false;
	let testdata = "global test data";
	export default {
		data() {
			return {
				nowPenColor:'#000000',
				canvasStyle:{},
				show:false,
				canvasHeight:0,
				canvasWidth:0,
				number:0,
				flge:false,
				timer:0,
				CurrentTime:0,
				totalTime:0,
				timerFun:null,
				ctx:null,
				testdata:"not global test data",
				lastTimeStamp:0
			}
		},
		onLoad(param) {
			// console.log('onLoad');
			uni.showLoading({
				title:'组件加载中'
			})
			// await this.$refresh(param)
			this.ctx = uni.createCanvasContext("SmartScreen",this)
			this.setPenStyle()
			this.setCanvas()
			this.timer = new Date(new Date().setHours(0, 0, 0, 0))
			this.live()
	// 		console.log("liveFifo length:"+ live.len());
	// 		console.log("drawFifo length:"+ lastPoint.length);
	
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
			// console.log('onReady');	
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
					// console.log("after set Fifo")
				}else{
					// let timeStampStr = data.substr(2,data.length)
					let timeStamp = this.$hexStrToDEC(data.substr(2,data.length))
					// let typeStr = data.substr(0,2)
					let type = this.$hexStrToDEC(data.substr(0,2))
					// console.log("before set Fifo")
					this.setFifo({
						"type":type,
						"timeStamp":timeStamp
					})
					// console.log("after set Fifo")
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
				if(obj.type&64){//0100 0000 是否是最后一位数据
					obj.type&=15 // 0000 1111
					playBack.set(obj)
					let sync = playBack.getAll()
					let that = this
					sync.forEach(function(data){
						that.dataHandler(data)
					})
					flag = true
				}
				if(this.typeJudge(obj.type)){
					obj.type&=15 // 0000 1111
					live.set(obj)
				}else{
					obj.type&=15 // 0000 1111
					if(obj.type == 7){//清楚缓存
						playBack.clear()
					}
					playBack.set(obj)
					
				}
			},
			typeJudge(type){//xxxx xxxx
				if(type>>5){ 
					return 0
				}
				return 1
			},
			dataHandler(data){
				// console.log(data.type);
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
						
						break;
					case 12://会议结束
						// console.log('会议结束')
						uni.showLoading({
							title:'会议已结束'
						})
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
					// console.log("(lastPoint.X="+lastPoint.X+", lastPoint.Y="+lastPoint.Y+")")
					// console.log("(data.X="+data.X+", data.Y="+data.Y+")")
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
				// let that = this
				this.timerFun = setInterval(()=>{
					let liveDataLenth = live.len();
					if(flag&&liveDataLenth){
						for(let i = 0; i < liveDataLenth; i++){
							let data = live.get()
							let tmp = new Date().getTime() - this.timer
							if(tmp >= data.timeStamp+100){//延迟时间设置 作递归处理
								// console.log("tmp:" + tmp + "    data.timeStamp:"+data.timeStamp)
								data = live.reget()
								// playBack.set(data)
								// console.log("live data :"+data.X)
								this.dataHandler(data)
								// this.playData()
							}else{
								break;
							}
						}
					}
				},10);
				
			},
		}
	}
</script>

<style>
	page{
		background-color: #e8e8e8;
		text-align: center;
	}
	.SmartScreen{
		background-color: #ffffff;
		margin: 0 auto;
	}
</style>
