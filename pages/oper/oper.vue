<template>
	<view class="main">
		<u-toast ref="uToast"></u-toast>
		<uni-nav-bar shadow title="会议管理" color="#ffffff" background-color="#00aaff" :fixed="true" :statusBar="true">
		    <view slot="left">
				<u-icon @click="popup=true" name="more-dot-fill" color="#ffffff" size="50"></u-icon>
			</view>
		</uni-nav-bar>
		<view class="tag">
			<view v-for="(item,index) in tagList">
				<u-tag @click="touchTag(index)" :text="item.text" type="primary" shape="circle" :plain="true" ></u-tag>
			</view>
		</view>
		<u-cell-group v-for="(item,index) in list">
			<u-cell :title="item.note"  >
				<view slot="title" class="cellLeft">
					<image class="img" :src="item.icon" mode=""></image>
					<view class="cellText">
						<text @click="note(index)">{{item.note}}</text>
						<u--text size="25" type="info" :text="item.time"></u--text>
					</view>
				</view>
				<button slot="right-icon" :data-index='{index}' open-type="share" type="primary" size="mini" :plain="true">分享</button>
			</u-cell>
		</u-cell-group>
		<u-popup :show="popup"  @close="popup=false" mode="left" :safeAreaInsetTop="true" >
			<view>
				<u-cell-group title="设置" :border='false'>
					<u-cell @click='searchDevice()' :cente='true' title="搜索蓝牙设备">
						<u-icon slot="icon" size="32" name="search"></u-icon>
					</u-cell>
					<u-cell @click="update=true" :cente='true' icon="setting" title="修改管理密码">
						<u-icon slot="icon" size="32" name="lock-open"></u-icon>
					</u-cell>
				</u-cell-group>
			</view>
		</u-popup>
		<u-popup :show="input"  round="50" @close="noteFinish(tmpIndex)" mode="center" >
			<view class="input">
				<u--input
					:focus="true"
					shape="circle"
				    placeholder="请输入备注"
					v-model="noteText"
					inputAlign="center"
				  ></u--input>
			</view>			
		</u-popup>
		<u-popup :show="update"  round="50" @close="updatepwd()" mode="center" >
			<view class="update">
				<u--input
					:focus="true"
					type="password"
					shape="circle"
				    placeholder="请输入新密码"
					v-model="updatepwdText"
					inputAlign="center"
				  ></u--input>
			</view>	
		</u-popup>
		<u-popup :show="tagUpdateShow" @close="updateTag()" mode="center" round="30">
			<view class="popupUpdateTagText">
				 <u--input
					placeholder="请输入名称"
					:focus="true"
					inputAlign="center"
					v-model="currentTagText"
				    border="none"
				    clearable
				  ></u--input>
			</view>
		</u-popup>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				list:[],
				popup:false,
				input:false,
				noteText:'',
				tmpIndex:0,
				update:false,
				updatepwdText:null,
				tagList:[],
				tagUpdateShow:false,
				currentTagId:null,
				currentTagText:null,
				currentTagIndex:null
			}
		},
		async onShareAppMessage(res) {
			let index = res.target.dataset.index.index
			let sid = this.list[index].sid
			let playType = this.list[index].playType
			let url = 'https://web.loyal.pub/meeting/#/?mid='+sid
			if (playType == 'live'){
				getApp().globalData.sid = sid
				await this.$meetingAuth()
				let res = await this.$http({
					url:'tmpCode',
					method:'POST',
					data:{
						token:getApp().globalData.token
					}
				})
				let code = res.data
				url = 'https://web.loyal.pub/meeting/#/ 【临时会议号为:'+code+'】'
			}
			let did = getApp().globalData.did
			
			return{
				title:url,
				path:'/pages/player/verify?sid='+sid+'&mac='+getApp().globalData.mac,
				imageUrl:'https://xinxuemo-images.oss-cn-shanghai.aliyuncs.com/img.png'
			}
			
		  },
		 
		onNavigationBarButtonTap() {
			this.$refs.popup.open('left')
		},
		async onLoad() {
			uni.hideLoading()
			let res = await this.$http({
				url:'meetingDPQM',
				method:'POST',
				data:{
					did:getApp().globalData.did,
				}
			})
			let that = this
			res.data.forEach(function(data){
				if(data.state){
					that.list.unshift({
						time:that.$toDate(data.timeStamp),
						note:data.note+' 【会议进行中】',
						playType:'live',
						sid:data.id,
						icon:'https://smartscreen-static.oss-cn-shanghai.aliyuncs.com/img/live.png'
					})
				}else{
					that.list.unshift({
						time:that.$toDate(data.timeStamp),
						note:data.note+' 【已结束】',
						playType:'playBack',
						sid:data.id,
						icon:'https://smartscreen-static.oss-cn-shanghai.aliyuncs.com/img/meeting.png'
					})
				}
				
			})
			
			res = await this.$http({
				url:'tagDPQM',
				method:'POST',
				data:{
					did:getApp().globalData.did
				}
			})
			this.tagList = res.data
		},
		methods: {
			async note(index){
				this.input = false
				this.tmpIndex = index
				this.input = true
			},
			async noteFinish(index){
				this.input = false
				if(this.noteText.length!=0){
					let res = await this.$http({
						url:'meetingDPQM',
						method:'POST',
						data:{
							id:this.list[index].sid
						}
					})
					res = res.data[0]
					res.note = this.noteText
					await this.$http({
						url:'meetings',
						method:'PUT',
						data:res
					})
					this.$refs.uToast.show({
						message:'ok',
						type:'suceess'
					})
					this.list[index].note = this.noteText+' '+this.list[index].state 
					this.noteText = ''
				}else{
					this.$refs.uToast.show({
						message:'未输入',
						type:'error'
					})
				}
			},
			searchDevice(){
				uni.navigateTo({
					url:'/pages/config/device'
				})
			},
			async updatepwd(){
				this.update = false
				this.popup = false
				if(this.updatepwdText!=null){
					
					uni.showLoading()
					let res = await this.$http({
						url:'deviceDPQM',
						method:'POST',
						data:{
							mac:getApp().globalData.mac
						}
					})
					let info = res.data[0]
					info.password = this.updatepwdText
					res = await this.$http({
						url:'devices',
						method:'PUT',
						data:info
					})
					this.updatepwdText = null
					uni.hideLoading()
					this.$refs.uToast.show({
						message:'ok',
						type:'success'
					})
				}else{
					this.$refs.uToast.show({
						message:'未输入',
						type:'error'
					})
				}
			},
			touchStart(event) {
				console.log('start');
				// console.log(event.changedTouches[0].clientX);
				
			},
			touchEnd(event){
				console.log('end');
				// console.log(event.changedTouches[0].clientX);
			},
			touchTag(index){
				this.currentTagText = this.tagList[index].text
				this.currentTagId = this.tagList[index].id
				this.currentTagIndex = index
				this.tagUpdateShow = true
			},
			async updateTag(){
				this.tagUpdateShow = false
				let res = await this.$http({
					url:'tags',
					method:'PUT',
					data:{
						id:this.currentTagId,
						text:this.currentTagText,
						did:getApp().globalData.did
					}
				})
				
				if(res.code){
					this.$refs.uToast.show({
						message:'ok',
						type:'success'
					})
					this.tagList[this.currentTagIndex].text = this.currentTagText
				}
			}
		}
	}
</script>

<style>
	.popup{
		
	}
	.cellLeft{
		display: flex;
	}
	.cellText{
		display: flex;
		flex-direction: column;
		margin-left: 40rpx;
		line-height: 40rpx;
	}
	
	.input{
		background-color: "#ffffff";
	}
	.img{
		width: 100rpx;
		height: 100rpx;
	}
	.tag{
		display: flex;
		justify-content: space-around;
		margin-top: 2%;
		margin-bottom: 2%;
	}
	.popupUpdateTagText{
		margin-top: 2%;
		margin-right: 2%;
		margin-bottom: 2%;
	}
</style>
