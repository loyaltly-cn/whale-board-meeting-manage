<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		async onLoad(param) {
			uni.showLoading({
				title:'解析中'
			})
			let res = await this.$refresh(param)
			if(res){
				if(getApp().globalData.type){
					uni.redirectTo({
						url:'live?sid='+param.sid
					})
				}else{
					uni.redirectTo({
						url:'playBack?sid='+param.sid
					})
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
