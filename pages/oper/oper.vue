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
				<u-tag @click="update(item,'tag')" :text="item.text" type="primary" shape="circle" :plain="true" ></u-tag>
			</view>
		</view>
		<u-cell-group v-for="(item,index) in list">
			<u-cell :title="item.note" >
				<view slot="title" class="cellLeft">
					<image class="img" :src="item.icon" mode=""></image>
					<view class="cellText">
						<text @click="update(item,'note')">{{item.note}}</text>
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
						<u-icon slot="right-icon" size="32" name="arrow-right"></u-icon>
					</u-cell>
					<u-cell @click="updatePwd()" :cente='true' icon="setting" title="修改管理密码">
						<u-icon slot="icon" size="32" name="lock-open"></u-icon>
						<u-icon slot="right-icon" size="32" name="arrow-right"></u-icon>
					</u-cell>
				</u-cell-group>
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
			let url = 'https://api.bj-jiuqi.com/meeting/#/live?mid='+sid
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
			
		},
		async onShow() {
			this.popup = false
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
						icon:'https://smartscreen-static.oss-cn-shanghai.aliyuncs.com/img/live.png',
						text:data.note,
						id:data.id
						
					})
				}else{
					that.list.unshift({
						time:that.$toDate(data.timeStamp),
						note:data.note+' 【已结束】',
						playType:'playBack',
						sid:data.id,
						icon:'https://smartscreen-static.oss-cn-shanghai.aliyuncs.com/img/meeting.png',
						text:data.note,
						id:data.id
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
			searchDevice(){
				uni.navigateTo({
					url:'/pages/config/device'
				})
			},
			updatePwd(){
				let obj = new Object
				obj.id = getApp().globalData.did
				this.update(obj,'pwd')
			},
			update(param,type){
				let obj = encodeURIComponent(JSON.stringify(param))
				uni.navigateTo({
					url:'/pages/update/update?type='+type+'&obj='+obj
				})
			}
		}
	}
</script>

<style>
	.popup{
		display:table;
		margin:0 auto;
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
</style>
