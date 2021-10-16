/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer */ \"./client/components/Timer.js\");\n/* harmony import */ var _DisplayTimers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayTimers */ \"./client/components/DisplayTimers.js\");\n/* harmony import */ var _TimerSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimerSelect */ \"./client/components/TimerSelect.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ \"./client/style.css\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar timers = [{\n  _id: 0,\n  up: {\n    label: 'Typing Practice',\n    toggleLabel: 'Video Games',\n    toggle: 'down',\n    ratio: 1,\n    timeAccumulated: 0\n  },\n  down: {\n    label: 'Video Games',\n    toggleLabel: 'Typing Practice',\n    toggle: 'up',\n    ratio: 1,\n    timeAccumulated: 0\n  }\n}, {\n  _id: 1,\n  up: {\n    label: 'Sprint',\n    toggleLabel: 'Rest',\n    toggle: 'down',\n    ratio: 1,\n    timeAccumulated: 0\n  },\n  down: {\n    label: 'Rest',\n    toggleLabel: 'Sprint',\n    toggle: 'up',\n    ratio: 1,\n    timeAccumulated: 0\n  }\n}, {\n  _id: 2,\n  up: {\n    label: 'Speaking',\n    toggleLabel: 'Listening',\n    toggle: 'down',\n    ratio: 1,\n    timeAccumulated: 0\n  },\n  down: {\n    label: 'Listening',\n    toggleLabel: 'Speaking',\n    toggle: 'up',\n    ratio: 1,\n    timeAccumulated: 0\n  }\n}];\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(App, [{\n    key: \"getTimers\",\n    value: function getTimers() {\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/timers').then(function (response) {\n        _this.setState();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimerSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        timers: timers\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: \"timers\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DisplayTimers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        timers: timers\n      })));\n    }\n  }]);\n\n  return App;\n}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://taskRewardTimer/./client/components/App.js?");

/***/ }),

/***/ "./client/components/DisplayTimers.js":
/*!********************************************!*\
  !*** ./client/components/DisplayTimers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer */ \"./client/components/Timer.js\");\n\n\n\nvar DisplayTimers = function DisplayTimers(_ref) {\n  var timers = _ref.timers;\n  var key = 0;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, timers.map(function (timer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: timer._id,\n      timer: timer\n    });\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTimers);\n\n//# sourceURL=webpack://taskRewardTimer/./client/components/DisplayTimers.js?");

/***/ }),

/***/ "./client/components/Timer.js":
/*!************************************!*\
  !*** ./client/components/Timer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _timer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.css */ \"./client/components/timer.css\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Timer = /*#__PURE__*/function (_React$Component) {\n  _inherits(Timer, _React$Component);\n\n  var _super = _createSuper(Timer);\n\n  function Timer(props) {\n    var _this;\n\n    _classCallCheck(this, Timer);\n\n    _this = _super.call(this, props);\n    _this.handleCtrl = _this.handleCtrl.bind(_assertThisInitialized(_this));\n    _this.updateTime = _this.updateTime.bind(_assertThisInitialized(_this));\n    _this.pad = _this.pad.bind(_assertThisInitialized(_this));\n    _this.messages = {\n      running: '(click timer to pause)',\n      stopped: '(click timer to resume)'\n    };\n    _this.state = {\n      timerInstance: _this.props._id,\n      countDirection: 'down',\n      running: false,\n      h: 0,\n      m: 0,\n      s: 0\n    };\n    return _this;\n  }\n\n  _createClass(Timer, [{\n    key: \"handleCtrl\",\n    value: function handleCtrl(e) {\n      e.preventDefault();\n      var button = e.currentTarget.value;\n      var _this$state = this.state,\n          countDirection = _this$state.countDirection,\n          timerInstance = _this$state.timerInstance,\n          running = _this$state.running; // console.log(timerInstance);\n\n      if (timerInstance && button !== 'ctrl') {\n        this.setState({\n          running: !running\n        });\n      } else {\n        clearInterval(timerInstance);\n        this.setState({\n          running: true,\n          countDirection: this.props.timer[countDirection].toggle,\n          timerInstance: setInterval(this.updateTime, 1000)\n        });\n      }\n    }\n  }, {\n    key: \"updateTime\",\n    value: function updateTime() {\n      if (this.state.running) {\n        var _this$state2 = this.state,\n            countDirection = _this$state2.countDirection,\n            h = _this$state2.h,\n            m = _this$state2.m,\n            s = _this$state2.s;\n\n        if (countDirection === 'up') {\n          this.props.timer.up.timeAccumulated++;\n\n          if (++s === 60) {\n            s = 0;\n\n            if (++m === 60) {\n              m = 0;\n              h++;\n            }\n          }\n        } else {\n          this.props.timer.down.timeAccumulated++;\n\n          if (--s <= -60) {\n            s = 0;\n\n            if (--m <= -60) {\n              m = 0;\n              h--;\n            }\n          }\n        }\n\n        this.setState({\n          h: h,\n          m: m,\n          s: s\n        });\n      }\n    }\n  }, {\n    key: \"pad\",\n    value: function pad(number) {\n      number = Math.abs(number);\n      return number < 10 ? '0' + number : number;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state3 = this.state,\n          h = _this$state3.h,\n          m = _this$state3.m,\n          s = _this$state3.s,\n          timerInstance = _this$state3.timerInstance,\n          countDirection = _this$state3.countDirection,\n          running = _this$state3.running;\n      var pad = this.pad,\n          handleCtrl = this.handleCtrl;\n      var timer = this.props.timer;\n      var timerClass, timerAlt, buttonClass, buttonLabel;\n      var init = timerInstance === this.props._id;\n\n      if (running) {\n        timerClass = \"timer enlarge\";\n        timerAlt = \"Pause timer\"; // buttonClass = \"hide\";\n\n        buttonLabel = 'Switch to ' + timer[countDirection].toggleLabel;\n      } else {\n        timerClass = \"timer shrink\";\n        timerAlt = \"Resume timer\"; // buttonClass = \"show\";\n\n        buttonLabel = init ? 'Start ' : 'Switch to ';\n        buttonLabel += timer[countDirection].toggleLabel;\n      }\n\n      var time = s < 0 || m < 0 || h < 0 ? '-' : ' ';\n      time += \"\".concat(pad(h), \":\").concat(pad(m), \":\").concat(pad(s));\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        id: \"timer-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, init ? 'Ready' : \"\".concat(timer[countDirection].label), \" (click timer to \", running ? 'pause' : init ? 'start' : 'resume', \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: timerClass,\n        onClick: handleCtrl\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        title: timerInstance ? timerAlt : null\n      }, time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n        className: buttonClass,\n        value: \"ctrl\",\n        title: buttonLabel,\n        onClick: handleCtrl\n      }, buttonLabel));\n    }\n  }]);\n\n  return Timer;\n}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n//# sourceURL=webpack://taskRewardTimer/./client/components/Timer.js?");

/***/ }),

/***/ "./client/components/TimerSelect.js":
/*!******************************************!*\
  !*** ./client/components/TimerSelect.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar TimerSelect = function TimerSelect(props) {\n  var key = 0;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    id: \"timer-select\"\n  }, props.timers.map(function (timer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      key: key++\n    }, timer.up.label, \" / \", timer.down.label);\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimerSelect);\n\n//# sourceURL=webpack://taskRewardTimer/./client/components/TimerSelect.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/components/App */ \"./client/components/App.js\");\n\n\n\n\n // const path = require('path');\n// const express = require('express');\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\nvar clientBundleScript = \"<script src=\\\"http://localhost:8080/scripts/bundle.js\\\"></script>\";\nvar clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"http://localhost:8080/styles/bundle.css\\\">\";\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, 'client/dist')));\napp.get('/', function (req, res) {\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n  res.send(\"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>2-Way Timer</title>\\n        \".concat(clientBundleStyle, \"\\n      </head>\\n      <body>\\n        <div id=\\\"ssr-app\\\">\").concat(jsx, \"</div>\\n        \").concat(clientBundleScript, \"\\n      </body>\\n    </html>\\n  \"));\n}); // app.post('/', (req, res) => {\n//   console.log(req.body);\n//   res.send('PUT request received');\n// });\n\napp.listen(port, function () {\n  console.log(\"Listening on port \".concat(port));\n});\n\n//# sourceURL=webpack://taskRewardTimer/./server/index.js?");

/***/ }),

/***/ "./client/components/timer.css":
/*!*************************************!*\
  !*** ./client/components/timer.css ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n@media (prefers-color-scheme: dark) {\\n  h2 {\\n    margin: .5em;\\n    padding: 0;\\n    /* text-shadow: 1px 1px 4px #000; */\\n  }\\n\\n  h2:hover {\\n    color: #5bb;\\n    text-shadow: 4px 4px 8px #0004;\\n  }\\n\\n  #timer-container {\\n    background-color: #0003;\\n    width: 900px;\\n    min-width: 600px;\\n    max-width: 50%;\\n    min-height: 10em;\\n    max-height: 50%;\\n    padding: 1em;\\n    display: flex;\\n    flex-direction: column;\\n    box-shadow: 4px 4px 8px #000;\\n  }\\n\\n  .timer {\\n    align-self: center;\\n    font-family: system-ui;\\n    color: cadetblue;\\n    cursor: default;\\n    user-select: none;\\n    font-size: 4em;\\n    transition: font-size 200ms;\\n  }\\n\\n  button {\\n    color: #222;\\n    font-size: 2em;\\n    border-radius: 0;\\n    background-color: #666;\\n    padding: .25em .5em;\\n    opacity: 1;\\n    transition: opacity 200ms color 200ms margin 200ms box-shadow 1000ms;\\n    box-shadow: 4px 4px 4px #0006;\\n  }\\n\\n  button:hover {\\n    margin: 0;\\n    color: #bbb;\\n    background-color: #555;\\n    /* text-shadow: 0px 0px 2px #fff5; */\\n    box-shadow: 8px 8px 8px #0006;\\n  }\\n\\n  .timer.shrink:hover {\\n    color: #5bb;\\n    text-shadow: 4px 4px 8px #0006;\\n  }\\n\\n  .timer.enlarge:hover {\\n    color: #5bb;\\n    text-shadow: 8px 8px 8px #0006;\\n  }\\n\\n  button.hide {\\n    color: #0000;\\n    opacity: 0;\\n  }\\n\\n  button.show {\\n    color: #333;\\n    opacity: 1;\\n  }\\n\\n  .enlarge {\\n    text-shadow: 12px 12px 8px #0006;\\n    font-size: 8em;\\n  }\\n\\n  .shrink {\\n    text-shadow: 2px 2px 2px #0006;\\n    font-size: 6em;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taskRewardTimer/./client/components/timer.css?");

/***/ }),

/***/ "./client/style.css":
/*!**************************!*\
  !*** ./client/style.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nhtml {\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  /* height: 100vh;\\n  width: 100vw; */\\n  background-color: #111;\\n  background-image: linear-gradient(to bottom, #aaa, #777);\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  font-family: system-ui;\\n  cursor: default;\\n  user-select: none;\\n  /* display: flex; */\\n}\\n\\ndiv {\\n  color: cadetblue;\\n}\\n\\n/* .timer {\\n  user-select: none;\\n  cursor: default;\\n} */\\n\\n#ssr-app {\\n  position: fixed;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#timers {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n}\\n\\nselect {\\n  color: #bbb;\\n  background-color: #0003;\\n  font-size: 1em;\\n  padding: .2em;\\n  margin-bottom: .5em;\\n  border: none;\\n  outline: none;\\n}\\n\\nselect:focus {\\n  border: none;\\n  outline: none;\\n  margin-bottom: .5em;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    background-color: #333;\\n    background-image: linear-gradient(to bottom, #333, #000);\\n  }\\n\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taskRewardTimer/./client/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://taskRewardTimer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://taskRewardTimer/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;