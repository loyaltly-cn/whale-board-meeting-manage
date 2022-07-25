(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/player/playBack"],{

/***/ 340:
/*!********************************************************************************!*\
  !*** C:/project/uniapp/ARMManage/main.js?{"page":"pages%2Fplayer%2FplayBack"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 8);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _playBack = _interopRequireDefault(__webpack_require__(/*! ./pages/player/playBack.vue */ 341));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_playBack.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 341:
/*!*************************************************************!*\
  !*** C:/project/uniapp/ARMManage/pages/player/playBack.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playBack.vue?vue&type=template&id=056a2c80& */ 342);
/* harmony import */ var _playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playBack.vue?vue&type=script&lang=js& */ 344);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playBack.vue?vue&type=style&index=0&lang=css& */ 346);
/* harmony import */ var _IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/player/playBack.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 342:
/*!********************************************************************************************!*\
  !*** C:/project/uniapp/ARMManage/pages/player/playBack.vue?vue&type=template&id=056a2c80& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./playBack.vue?vue&type=template&id=056a2c80& */ 343);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_template_id_056a2c80___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 343:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/project/uniapp/ARMManage/pages/player/playBack.vue?vue&type=template&id=056a2c80& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSlider: function() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '@/uni_modules/uview-ui/components/u-slider/u-slider.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    },
    uIcon: function() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '@/uni_modules/uview-ui/components/u-icon/u-icon.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 344:
/*!**************************************************************************************!*\
  !*** C:/project/uniapp/ARMManage/pages/player/playBack.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./playBack.vue?vue&type=script&lang=js& */ 345);
/* harmony import */ var _IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_IDE_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 345:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/project/uniapp/ARMManage/pages/player/playBack.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


























var _FIFO = __webpack_require__(/*! @/static/utils/FIFO */ 337); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _live = new _FIFO.liveFifo();var playBack = new _FIFO.playBackFifo();var lastPoint = 0;var _default = { data: function data() {return { ctx: null, nowPenColor: '#000000', canvasStyle: {}, show: false, canvasHeight: 0, canvasWidth: 0, number: 0, flge: false, timer: 0, totalTimeStamp: 0, startTimeStamp: 0, endTimeStamp: 0, HH: 0, MM: 0, SS: 0, MS: 0, currentHH: 0, currentMM: 0, currentSS: 0,
      playIcon: 'play-circle',
      iconSize: 64,
      iconColor: '#000000',
      sliderLoad: true };

  },
  onLoad: function onLoad(param) {
    uni.showLoading({
      title: '组件加载中' });

    this.ctx = uni.createCanvasContext("SmartScreen", this);
    this.setPenStyle();
    this.setCanvas();
    this.live();
  },
  onHide: function onHide() {
    // console.log('onHide');
    uni.onSocketClose(function (res) {
      // console.log('WebSocket 已关闭！');
    });
    lastPoint = 0;

  },
  onUnload: function onUnload() {
    uni.closeSocket();
    // console.log('unLoad')
    playBack.clear();
    clearInterval(this.timerFun);
  },
  onReady: function onReady() {
    var that = this;
    uni.connectSocket({
      url: getApp().globalData.ws });

    uni.onSocketMessage(function (res) {
      console.log('websocket');
      var data = Array.prototype.map.call(new Uint8Array(res.data), function (x) {return ('00' + x.toString(16)).slice(-2);}).join('');
      // console.log("接收数量:"+(that.number++)+"	数据:"+data);
      that.dataConvert(data);
    });
  },
  methods: {
    dataConvert: function dataConvert(data) {
      if (data.length > 10) {
        var x = this.$hexStrToDEC(data.substr(2, 4));
        var y = this.$hexStrToDEC(data.substr(6, 4));
        var timeStamp = this.$hexStrToDEC(data.substr(10, data.length));
        var type = this.$hexStrToDEC(data.substr(0, 2));
        var xx = this.canvasHeight / getApp().globalData.boardInfo.maximumX * x;
        var yy = this.canvasWidth / getApp().globalData.boardInfo.maximumY * y;
        x = yy;
        x = this.canvasWidth - x;
        y = xx;
        // console.log("before set Fifo")
        this.setFifo({
          "type": type,
          "X": x,
          "Y": y,
          "timeStamp": timeStamp });

      } else {
        var _timeStamp = this.$hexStrToDEC(data.substr(2, data.length));
        var _type = this.$hexStrToDEC(data.substr(0, 2));
        this.setFifo({
          "type": _type,
          "timeStamp": _timeStamp });

      }
    },
    setPenStyle: function setPenStyle() {
      this.ctx.lineWidth = 1;
      this.ctx.setStrokeStyle(this.nowPenColor);
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
    },
    setCanvas: function setCanvas() {
      this.updateResize({
        "height": getApp().globalData.webInfo.windowHeight,
        "width": getApp().globalData.webInfo.windowWidth });

    },
    updateResize: function updateResize(param) {
      var resizeWidth = param.width;
      var resizeHeight = param.height;
      var physProportion = getApp().globalData.boardInfo.physWidth / getApp().globalData.boardInfo.physHeight;
      if (resizeWidth / resizeHeight > physProportion) {
        this.canvasHeight = resizeHeight;
        this.canvasWidth = resizeHeight * physProportion;
      } else {
        this.canvasWidth = resizeWidth;
        this.canvasHeight = resizeWidth * physProportion;
      }
      this.canvasStyle = "width: " + this.canvasWidth + "px; height: " + this.canvasHeight + "px;";
      uni.hideLoading();
      this.show = true;
    },
    setFifo: function setFifo(obj) {
      // console.log(obj);
      if (obj.type & 64) {//0100 0000
        obj.type &= 15; // 0000 1111
        // console.log('over:'+obj.type);
        playBack.set(obj);
        this.endTimeStamp = obj.timeStamp;
        getApp().globalData.endTimeStamp = this.endTimeStamp;
        this.totalTimeStamp = this.endTimeStamp - this.startTimeStamp;
        console.log('totalTimeStamp:' + this.totalTimeStamp + '	endTimeStamp:' + this.endTimeStamp + '	startTimeStamp:' + this.startTimeStamp);
        this.sliderHandler();
        this.sync(this.startTimeStamp);
      }
      obj.type &= 15; // 0000 1111
      if (obj.type == 11) {
        console.log(' start:' + obj.timeStamp);
        this.startTimeStamp = obj.timeStamp;
        this.timer = this.startTimeStamp;
        getApp().globalData.startTimeStamp = this.startTimeStamp;
      }
      playBack.set(obj);
    },
    sliderHandler: function sliderHandler() {
      this.HH = parseInt(this.totalTimeStamp / 1000 / 60 / 60) % 24;
      this.MM = parseInt(this.totalTimeStamp / 1000 / 60) % 60;
      this.SS = parseInt(this.totalTimeStamp / 1000) % 60;
    },
    sync: function sync(timeStamp) {
      var playBackCache = playBack.getPlayBackCache(timeStamp);
      var liveCach = playBack.getLiveCache(timeStamp);
      // console.log(liveCach);
      var that = this;
      if (playBackCache.length != 0) {
        playBackCache.forEach(function (data) {
          that.dataHandler(data);
        });
      }
      liveCach.forEach(function (data) {
        _live.set(data);
      });
      this.timer = timeStamp;
      uni.hideLoading();
    },
    dataHandler: function dataHandler(data) {
      switch (data.type) {
        case 0: //按下
          this.ctx.beginPath();
          lastPoint = 0;
          break;
        case 1: //抬起
          lastPoint = [];
          break;
        case 2: //广播

          break;
        case 3: //黑笔
          this.setNowPenColor('#000000');
          break;
        case 4: //蓝笔
          this.setNowPenColor('#00aaff');
          break;
        case 5: //红笔
          this.setNowPenColor('#ff0000');
          break;
        case 6: //快照

          break;
        case 7: //清屏
          this.clearCanvas();
          break;
        case 8: //笔的轨迹
          this.draw(data);
          break;
        case 9: //手指的轨迹

          break;
        case 10: //板擦的轨迹
          this.setNowPenColor('#ffffff');
          this.ctx.arc(data.X, data.Y, 20, 0, 2 * Math.PI);
          this.ctx.fill();
          this.draw(data);
          break;
        case 11: //会议开始
          // console.log('会议开始')
          break;
        case 12: //会议结束
          // console.log('会议结束')
          break;
        default:
          //其他情况
          break;}

    },
    draw: function draw(data) {
      if (lastPoint != 0) {
        this.ctx.moveTo(lastPoint.X, lastPoint.Y);
        this.ctx.lineTo(data.X, data.Y);
        this.ctx.stroke();
        this.ctx.draw(true);
      }
      lastPoint = data;
    },
    clearCanvas: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.ctx.draw(true);
    },
    setNowPenColor: function setNowPenColor(nowColor) {
      if (nowColor != this.nowPenColor) {
        this.ctx.setFillStyle(nowColor);
        this.ctx.setStrokeStyle(nowColor);
        this.nowPenColor = nowColor;
      }
    },
    live: function live() {var _this = this;
      setInterval(function () {
        if (_this.flge && _live.len()) {
          _this.timer = parseInt(_this.timer) + 15;
          _this.updateCount(_this.timer);
          for (var i = 0; i < _live.len(); i++) {
            var data = _live.get();
            if (_this.timer >= data.timeStamp) {
              data = _live.reget();
              _this.dataHandler(data);
            }
            break;
          }

        }
      }, 15);
    },
    viewHandler: function viewHandler() {
      if (this.sliderLoad) {
        this.flge = false;
        this.playIcon = 'play-circle';
        uni.showLoading();
        this.sliderLoad = false;
      }

    },
    update: function update(value) {
      this.sliderLoad = true;
      // console.log(value);
      _live.clear();
      this.clearCanvas();
      uni.hideLoading();
      this.sync(value);
      // console.log(value);
    },
    play: function play() {
      this.flge ? this.playIcon = 'play-circle' : this.playIcon = 'pause-circle';
      this.flge = !this.flge;
    },
    F: function F(state) {
      uni.showLoading();
      this.flge = false;
      this.playIcon = 'play-circle';
      var timeStamp = this.$snapShot({
        "timeStamp": this.timer,
        "type": state });

      this.updateCount(timeStamp);
      _live.clear();
      this.clearCanvas();
      this.sync(timeStamp);
    },
    updateCount: function updateCount(timeStamp) {
      var currentTotalTimeStamp = timeStamp - this.startTimeStamp;
      this.currentHH = parseInt(currentTotalTimeStamp / 1000 / 60 / 60);
      this.currentMM = parseInt(currentTotalTimeStamp / 1000 / 60);
      this.currentSS = parseInt(currentTotalTimeStamp / 1000);
      // console.log(this.currentHH+':'+this.currentMM+':'+this.currentSS);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 346:
/*!**********************************************************************************************!*\
  !*** C:/project/uniapp/ARMManage/pages/player/playBack.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IDE_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_IDE_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../IDE/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./playBack.vue?vue&type=style&index=0&lang=css& */ 347);
/* harmony import */ var _IDE_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_IDE_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IDE_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_IDE_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IDE_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_IDE_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IDE_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_IDE_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_IDE_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_IDE_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_IDE_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_IDE_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_playBack_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 347:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/project/uniapp/ARMManage/pages/player/playBack.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[340,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/player/playBack.js.map