这代码写的很烂

# uview1 + vue2 + webpack + esp32 + uniapp canvas + FIFO

- <a href="https://v1.uviewui.com/guide/demo.html" target="_blank"> uview1 </a>
- <a href="https://cn.vuejs.org/" target="_blank"> vue2 </a>
- <a href="https://uniapp.dcloud.io/component/canvas.html#canvas" target="_blank"> uniapp canvas </a>

## live implementation process
- connect ws 
- ws res convert
- insert fifo
- `live flge = true`
> 通过 flge 来控制画面的播放

## tips
- 使用 <a href="https://www.dcloud.io/hbuilderx.html" target="_blank"> **HBuilder X** </a> 编写
- uview 使用 Dcloud插件 HbuilderX 导入 
- esp32 配网使用<a href="https://github.com/xuhongv/BlufiEsp32WeChat"  target="_blank"> xuhong bluefi </a> 移植 源项目使用 wechat App 编写
- uniapp 对 canvas 优化过 书写笔迹 对比web版效果要好
- 分享出去的链接每次加载都会经过 verify.vue 判断是录播还是直播
- 所有的静态资源都在存放在OSS上
- 小程序未开启画面与音频同步
- 每次进入链接时都会去拉取设备对应的参数 从而同步 canvas width height 以及 viewport  
- <a href="https://xinxuemo-images.oss-cn-shanghai.aliyuncs.com/%E6%99%BA%E8%83%BD%E4%BA%A4%E4%BA%92%E7%99%BD%E6%9D%BF%E7%BB%88%E7%AB%AF%E5%9D%90%E6%A0%87%E9%9B%86%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3.pdf" target="_blank"> pdf document </a>

canvas 
```js
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
```
viewport
 ```js
x = yy;
x = this.canvasWidth - x;
y = xx;
// console.log("before set Fifo")
this.setFifo({
	"type":type,
	"X":x,
	"Y":y,
	"timeStamp":timeStamp
}) ```
