import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// Vue.prototype.$api = 'https://api.bj-jiuqi.com/armApi/'
Vue.prototype.$api = 'https://api.bj-jiuqi.com/armApi/'
Vue.prototype.$header = {'Content-Type': 'application/x-www-form-urlencoded'}

Vue.prototype.$snapShot =  function(obj){
	let snapShotList = getApp().globalData.snapShotList
	let len = snapShotList.length
	let timeStamp = 0
	if(obj.timeStamp > snapShotList[len-1].timeStamp){
		obj.type?timeStamp = getApp().globalData.endTimeStamp :timeStamp = snapShotList[len-1].timeStamp
		return timeStamp
	}
	
	if(obj.timeStamp < snapShotList[0].timeStamp){
		obj.type?timeStamp = snapShotList[0].timeStamp :timeStamp = getApp().globalData.startTimeStamp
		return timeStamp
	}
	
	let abs = this.$snapShotAbs(obj.timeStamp)
	let min = Math.min.apply(null, abs);
	let index = abs.indexOf(min);
	
	if(!index&&!obj.type){
		timeStamp = getApp().globalData.startTimeStamp
		return timeStamp
	}
	
	if(index == len-1&&obj.type){
		timeStamp = getApp().globalData.endTimeStamp
		return timeStamp
	}
	
	if(obj.timeStamp == snapShotList[index].timeStamp){
		obj.type?timeStamp = snapShotList[index+1].timeStamp :timeStamp = snapShotList[index-1].timeStamp
		return timeStamp
	}
	
	if(obj.timeStamp > snapShotList[index].timeStamp){
		obj.type?timeStamp = snapShotList[index+1].timeStamp :timeStamp = snapShotList[index].timeStamp
	}else{
		obj.type?timeStamp = snapShotList[index].timeStamp :timeStamp = snapShotList[index-1].timeStamp
	}
	
	return timeStamp
}

Vue.prototype.$snapShotAbs = function(timeStamp){
	let snapShotList = getApp().globalData.snapShotList
	let len = snapShotList.length
	let absList = []
	for(let i = 0; i<len;i++){
		absList.push(Math.abs(timeStamp - snapShotList[i].timeStamp))
	}
	return absList
}

Vue.prototype.$http = async function(obj){
	
	if(!getApp().globalData.token){
		await this.$deviceAuth()
	}
	console.log('ok');
	obj.data.token = getApp().globalData.token
	var [err, res] = await uni.request({
		url: this.$api+obj.url,
		method:obj.method,
		header:this.$header,
		data:obj.data
	});
	return res.data
}

Vue.prototype.$token = async function(obj){
	var [err, res] = await uni.request({
		url: this.$api+obj.url,
		method:obj.method,
		header:this.$header,
		data:obj.data
	});
	console.log(res.data.data);
	getApp().globalData.token = res.data.data
}

Vue.prototype.$deviceAuth = async function(){
	await this.$token({
		url:'deviceAuth',
		method:'POST',
		data:{
			mac:getApp().globalData.mac
		}
	})
}

Vue.prototype.$meetingAuth = async function(){
	await this.$token({
		url:'meetingAuth',
		method:'POST',
		data:{
			id:getApp().globalData.sid
		}
	})
}

Vue.prototype.$refresh = async function(param){
	getApp().globalData.sid = param.sid
	let sid = param.sid
	//将本机设备信息存入全局变量
	uni.getSystemInfo({
		success:function(res){
			getApp().globalData.webInfo = res
		}
	})
	
	//会议鉴权
	if(!getApp().globalData.token){
		await this.$meetingAuth()
	}
	//获取会议信息
	let res = await this.$http({
		url:'meetingDPQM',
		method:'POST',
		data:{
			id:getApp().globalData.sid,
			token:getApp().globalData.token
		}
	})
	console.log('test');
	getApp().globalData.did = res.data[0].did		//设备号
	getApp().globalData.type = res.data[0].state	//会议状态
	let ws = 'wss://'+res.data[0].url+'/'+sid+'/tmp'//wss
	getApp().globalData.ws = ws
	//获取白板信息
	res = await this.$http({
		url:'deviceDPQM',
		method:'POST',
		data:{
			id:getApp().globalData.did
		}
	})
	getApp().globalData.boardInfo = res.data[0]
	//获取快照数组
	res = await this.$http({
		url:'snapShotDPQM',
		method:'POST',
		data:{
			mid:sid
		}
	})
	getApp().globalData.snapShotList = res.data
	console.log(getApp().globalData.did)
	res = await this.$http({
		url:'tagDPQM',
		method:'POST',
		data:{
			did:getApp().globalData.did
		}
	})
	getApp().globalData.tagList = res.data.data
	console.log(res.data.data);
	console.log(getApp().globalData.tagList)
	return true
}

Vue.prototype.$hexStrToDEC =function(hex){
	var len = hex.length, a = new Array(len), code;
		for (var i = 0; i < len; i++) {
			code = hex.charCodeAt(i);
			if (48<=code && code < 58) {
				code -= 48;
			} else {
				code = (code & 0xdf) - 65 + 10;
			}
			a[i] = code;
		}
		
		return a.reduce(function(acc, c) {
			acc = 16 * acc + c;
			return acc;
		}, 0);
}

Vue.prototype.$toDate = function(timeStamp){
	var date = new Date();
	date.setTime(timeStamp);
	var month = date.getMonth() + 1;
	var hours = date.getHours();
	if (hours < 10)
		hours = "0" + hours;
	var minutes = date.getMinutes();
	if (minutes < 10)
		minutes = "0" + minutes;
	var time = date.getFullYear() + "-" + month + "-" + date.getDate() +
		" " + hours + ":" + minutes;
	return time;
}
App.mpType = 'app'
const app = new Vue({
    ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

import uView from 'uview-ui'
Vue.use(uView)

// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在Vue.use(uView)之后执行
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 15
		}
		// 其他组件属性配置
		// ......
	}
})