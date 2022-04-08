<script>
	export default {
		async onLaunch(){
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		},
		globalData:function(){
			mac:'';
			webInfo:Object
			boardInfo:Object
			token:null
			sid:0
			did:0
			ws:''
			type:null	//true == 直播	false == 录播
			snapShotList:null
			startTimeStamp:0
			endTimeStamp:0
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
