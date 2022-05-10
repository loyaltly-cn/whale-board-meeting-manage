<template>
	<view>
		<uni-nav-bar shadow title="修改" color="#ffffff" background-color="#00aaff" :fixed="true" :statusBar="true">
			<view slot="left">
				<u-icon @click="back()" name="arrow-left" color="#ffffff" size="50"></u-icon>
			</view>
		</uni-nav-bar>
		<view class="main">
			<view class="img">
				<u--image  src="https://smartscreen-static.oss-cn-shanghai.aliyuncs.com/img/logo.png" width="100rpx" height="100rpx" ></u--image>
			</view>
			<view class="">
				<u--input
				    placeholder="请输入修改的值"
				    v-model="value"
					border="bottom"
					inputAlign="center"
					:focus="true"
					:clearable="true"
					@change="change()"
				  ></u--input>
			</view>
			<view class="bun">
				<u-button @click="commit" :loading="load" text="ok" type="success" :plain="true" :disabled="status"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:null,
				obj:null,
				value:null,
				status:true,
				load:false
			}
		},
		onLoad(param) {
			this.obj = JSON.parse(decodeURIComponent(param.obj)) 
			this.type = param.type
			this.value = this.obj.text
			
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			change(){
				this.status = !this.value.length!=0
			},
			async commit(){
				console.log(this.obj);
				this.load = true
				let url = null
				let obj = new Object
				obj.id = this.obj.id
				switch(this.type){
					case 'tag':
					url = 'tags'
					obj.text = this.value
					obj.did = this.obj.did
					break
					case 'pwd':
					url = 'devices'
					obj.password = this.value
					break
					case 'note':
					url = 'meetings'
					obj.note = this.value
					break
					default: break
				}
				console.log(url);
				console.log(obj);
				let res = await this.$http({
					url:url,
					method:'PUT',
					data:obj
				})
				if (res.code){
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style>
	.main{
		margin-top: 50%;
		margin-left: 10%;
		margin-right: 10%;
	}
	.bun{
		margin-top: 10%;
	}
	.img{
		margin-left: 40%;
	}
</style>
