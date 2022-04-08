<template>
	<view class="main">
		<text class="text">请输入管理密码</text>
		<input class="input" password type="text"  v-model="pwd" placeholder="默认为0000" />
		<button @click="verify()" class="button" type="primary" >login</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pwd:''
			}
		},
		onLoad(param) {
			if(param.mac){
				getApp().globalData.mac = param.mac
			}else{
				getApp().globalData.mac = '12:81:5e:e4:2b:4b'
				uni.showToast({
					title:'请扫码打开',
					icon:"error"
				})
			}
		},
		methods: {
			async verify(){
				let pwd = this.pwd
				if(pwd.length == 0){
					uni.showToast({
						title:'请输入密码',
						icon:'error',
					})
				}else{
					uni.showLoading()
					let res = await this.$http({
						url:'deviceDPQM',
						method:'POST',
						data:{
							mac:getApp().globalData.mac,
							password:pwd
						}
					})
					if(res.data.length!=0){
						getApp().globalData.did = res.data[0].id
						uni.redirectTo({
							url:'../oper/oper'
						})
					}else{
						uni.showToast({
							title:'密码错误',
							icon:'error'
						})
					}
				}
				
			}
		}
	}
</script>

<style>
	page{
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.main{
		display:flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 100rpx;
	}	
	.text{
		color: #00aaff;
	}
	.input{
		margin-top: 30rpx;
		border: 1rpx solid #007AFF;
		text-align: center;
		width: 70%;
	}
	.button{
		margin-top: 30rpx;
		width: 80%;
	}
</style>
