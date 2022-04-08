<template>
	<view class="main">
		<u-cell-group v-for="(item) in devicesList">
			<u-cell @click="connectDevice(item)" icon="wifi" :title="item.name" :value="item.RSSI">
				<u-icon slot="icon" size="32" name="setting"></u-icon>
			</u-cell>
		</u-cell-group>
		<u-loading-icon :show="searchShow" size="30"></u-loading-icon>
		<u-popup class="popup" length="1000rpx" :show="show" mode="top" :closeOnClickOverlay="false"
			@close="show = false" round="10" :closeable="true" closeIconPos="top-left">
			<view class="wifi">
				<view class="title">
					<u--text size="40" text="输入密码"></u--text>
					<view class="conWifi">
						<u--text size="30" @click="connectWifi" :type="conType" text="发送"></u--text>
					</view>
				</view>
				<view class="content">
					<view class="">
						<u--text size="30" text="连接到"></u--text>
					</view>
					<view class="">
						<u--text @click="openWifi()" type="primary" size="30" :text="ssid"></u--text>
					</view>
				</view>
				<u--input placeholder="密码" @change="onPwd()" border="bottom" v-model="pwd" type="password"
					:clearable="true"></u--input>
			</view>
		</u-popup>
		<u-toast ref="uToast"></u-toast>
		<u-picker :show="wifiPicker" :columns="wifiList" @confirm="selectWifi()" visibleItemCount="15" title="wifi"
			@cancel="wifiPicker = false"></u-picker>
	</view>
</template>

<script>
	let xBlufi = require("@/static/utils/blufi/xBlufi.js")
	export default {
		data() {
			return {
				devicesList: [],
				searching: false,
				currentDevice: {
					did:null,
					name:null
				},
				show: false,
				searchShow: true,
				ssid: '选择wifi',
				pwd: '',
				conType: 'info',
				wifiList: [],
				wifiPicker: false,
				initDev:false
			}
		},
		onLoad() {
			xBlufi.initXBlufi(1);
			xBlufi.listenDeviceMsgEvent(true, this.funListenDeviceMsgEvent);
			this.searchDevice()
		},
		methods: {
			loadWifi() {
				let that = this
				wx.startWifi({
					success(res) {
				  wx.getConnectedWifi({
							success(res) {
								console.log(res);
								that.ssid = res.wifi.SSID
								console.log(that.ssid);
								that.show = true
							},
							fail(res) {
								console.log(res);
								if (res.errCode == 12005) {
									uni.hideLoading()
									that.$refs.uToast.show({
										message: '请打开wifi后重试',
										type: 'error'
									})
								}
							}
				  })

					}
				})
			},
			searchDevice() {
				if (this.searching) {
					xBlufi.notifyStartDiscoverBle({
						'isStart': false
					})
				} else {
					xBlufi.notifyStartDiscoverBle({
						'isStart': true
					})
				}
			},
			funListenDeviceMsgEvent: function(options) {
				switch (options.type) {
					case xBlufi.XBLUFI_TYPE.TYPE_GET_DEVICE_LISTS:
						for (let i in options.data) {
							if (options.data[i].name != '' && options.data[i].name != undefined && !this.devicesList
								.includes(options.data[i])) {
								options.data[i].RSSI = '信号强度:' + options.data[i].RSSI
								this.devicesList.push(options.data[i])
				 			console.log(options.data[i]);
							}
						}
						break;

					case xBlufi.XBLUFI_TYPE.TYPE_CONNECTED:
						console.log("连接回调：" + JSON.stringify(options))
						if (options.result) {
							// uni.hideLoading()
							xBlufi.notifyInitBleEsp32({
								deviceId: this.did,
							})
						} else {
							if(this.conDevLoad){
							}
							xBlufi.notifyConnectBle({
								isStart: true,
								deviceId: this.currentDevice.did,
								name: this.currentDevice.name
							});
						}
				  break;

					case xBlufi.XBLUFI_TYPE.TYPE_GET_DEVICE_LISTS_START:
						if (!options.result) {
						console.log("蓝牙未开启 fail =》", options)
						uni.showToast({
							title: '蓝牙未开启',
							icon: 'none'
						})
					}
						break;
					case xBlufi.XBLUFI_TYPE.TYPE_GET_DEVICE_LISTS_STOP: //停止搜索设备
						break
					case xBlufi.XBLUFI_TYPE.TYPE_STATUS_CONNECTED: //与设备断开连接
						console.log('与设备断开连接')
						this.initDev = true
						uni.showToast({
							title:'与设备断开连接'
						})
						// uni.hideLoading()
						// xBlufi.notifyConnectBle({
						// 	isStart: true,
						// 	deviceId: this.currentDevice.did,
						// 	name: this.currentDevice.name
						// });
						break
					case xBlufi.XBLUFI_TYPE.TYPE_INIT_ESP32_RESULT:
						console.log("初始化结果：", JSON.stringify(options))
						if (options.result) {
							console.log('初始化成功')
							uni.hideLoading();
							this.loadWifi()
						} else {
							console.log('初始化失败')
							if(this.initDev){
								xBlufi.notifyConnectBle({
									isStart: true,
									deviceId: this.currentDevice.did,
									name: this.currentDevice.name
								});
							}else{
								uni.showToast({
									title:'与设备断开连接'
								})
							}
							
						}
						break;
					default:
						if(this.conDevLoad){
							console.log('error');
						}
						xBlufi.notifyConnectBle({
							isStart: true,
							deviceId: this.currentDevice.did,
							name: this.currentDevice.name
						});
						break;
				}
			},
			connectDevice: function(data) {
				this.currentDevice.did = data.deviceId
				this.currentDevice.name = data.name
				this.searchShow = false
				//停止搜索
				xBlufi.notifyStartDiscoverBle({
			  'isStart': false
				})
				uni.showLoading({
					title: '设备连接中'
				})
				this.did = data.deviceId
				xBlufi.notifyConnectBle({
					isStart: true,
					deviceId: this.currentDevice.did,
					name: this.currentDevice.name
				});
			},
			connectWifi() {
				if (this.pwd.length >= 8 && !this.wifiPicker) {
					this.conLoad = true
					xBlufi.notifySendRouterSsidAndPassword({
						ssid: this.ssid,
						password: this.pwd
					})
					this.show = false;
					this.$refs.uToast.show({
						message: 'ok',
						type: 'success',
						complete() {
							uni.$u.route('/pages/oper/oper');
						}
					})
				}
			},
			onPwd(value) {
				console.log(value.length);
				if (value.length >= 8) {
					this.conType = "primary"
				} else {
					this.conType = "info"
				}
			},
			selectWifi(e) {
				console.log(e.value[0]);
				this.ssid = e.value[0]
				this.wifiPicker = false
			},
			openWifi() {
				uni.showLoading()
				let that = this
				wx.getWifiList({
					success(res) {
						console.log(res);
						that.onWiFiList()
					},
					fail(res) {
					 // console.log(res);
						if (res.errno == 103) { //未授权
							wx.getSetting({
								success(res) {
									if (!res.authSetting['scope.userLocation']) {
										wx.authorize({
											scope: 'scope.userLocation',
											success() {
						  				console.log('ok');
												that.onWiFiList()
											},
											fail(res) {
												console.log('auth');
												console.log(res);
											}
						 			})
									}
								},
								fail(res) {
									console.log('getSetting');
									console.log(res);
								}
							})

						}
					}
				})
				this.wifiPicker = true
			},
			onWiFiList() {
				this.wifiList = []
				let tmp = []
				wx.onGetWifiList(function(res) {
					res.wifiList.forEach(function(data) {
						if (data.SSID != '' && !tmp.includes(data.SSID)) {
							console.log(data.SSID);
							tmp.push(data.SSID)
						}
					})
				})
				this.wifiList.push(tmp)
				uni.hideLoading()
				this.wifiPicker = true
			}
		}
	}
</script>

<style>
	.main {
		line-height: 100rpx;

	}

	.title {
		display: flex;
		margin: 50rpx 30rpx 10rpx 280rpx;
	}

	.wifi {
		margin: 20rpx 30rpx 10rpx 20rpx;
	}

	.content {
		line-height: 50rpx;
		margin: 30rpx 30rpx;
	}
</style>
