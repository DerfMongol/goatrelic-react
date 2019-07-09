/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/images/Black_Goat.png":
/*!**************************************!*\
  !*** ./public/images/Black_Goat.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/images/23ec7baf536d94ac44d411bea35af3ec.png\";\n\n//# sourceURL=webpack:///./public/images/Black_Goat.png?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Start */ \"./src/client/Start.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ \"./src/client/pages/Home.js\");\n/* harmony import */ var _pages_CriticPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/CriticPage */ \"./src/client/pages/CriticPage.js\");\n/* harmony import */ var _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ProfilePage */ \"./src/client/pages/ProfilePage.js\");\n/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _Start__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  routes: [_objectSpread({}, _pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    exact: true,\n    path: '/'\n  }), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    path: ['/nba', '/nba/critics', '/nba/players', '/nba/fans', '/nhl', '/nhl/critics', '/nhl/players', '/nhl/fans', '/pga', '/pga/critics', '/pga/players', '/pga/fans']\n  }), _objectSpread({}, _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    path: '/profile'\n  }), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])]\n})]);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/Start.js":
/*!*****************************!*\
  !*** ./src/client/Start.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/allTime-actions */ \"./src/client/actions/allTime-actions.js\");\n/* harmony import */ var _actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/critic-actions */ \"./src/client/actions/critic-actions.js\");\n/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/user-actions */ \"./src/client/actions/user-actions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar Start =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Start, _Component);\n\n  function Start(props) {\n    var _this;\n\n    _classCallCheck(this, Start);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Start).call(this, props));\n    _this.state = {\n      phoneMenu: false,\n      backDrop: null\n    };\n    _this.phoneMenuClick = _this.phoneMenuClick.bind(_assertThisInitialized(_this));\n    _this.onBackDropClick = _this.onBackDropClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Start, [{\n    key: \"phoneMenuClick\",\n    value: function phoneMenuClick() {\n      this.setState({\n        phoneMenu: true,\n        backDrop: 'backdrop'\n      });\n    }\n  }, {\n    key: \"onBackDropClick\",\n    value: function onBackDropClick() {\n      this.setState({\n        phoneMenu: false,\n        backDrop: null\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getNbaAllTime();\n      this.props.getNhlAllTime();\n      this.props.getPgaAllTime();\n      this.props.getNbaCritic();\n      this.props.getNhlCritic();\n      this.props.getPgaCritic();\n      this.props.fetchAllUsers();\n      this.props.fetchCurrentUser();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.state.backDrop,\n        onClick: this.onBackDropClick\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        phoneMenuClick: this.phoneMenuClick,\n        phoneMenu: this.state.phoneMenu\n      }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(this.props.route.routes));\n    }\n  }]);\n\n  return Start;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar loadData = function loadData(store) {\n  return Promise.all([store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNbaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNbaCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNhlAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNhlCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__[\"getPgaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__[\"getPgaCritic\"])()), store.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__[\"fetchCurrentUser\"])()), store.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__[\"fetchAllUsers\"])())]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, {\n    getNbaAllTime: _actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNbaAllTime\"],\n    getNhlAllTime: _actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNhlAllTime\"],\n    getPgaAllTime: _actions_allTime_actions__WEBPACK_IMPORTED_MODULE_4__[\"getPgaAllTime\"],\n    getNbaCritic: _actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNbaCritic\"],\n    getNhlCritic: _actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNhlCritic\"],\n    getPgaCritic: _actions_critic_actions__WEBPACK_IMPORTED_MODULE_5__[\"getPgaCritic\"],\n    fetchAllUsers: _actions_user_actions__WEBPACK_IMPORTED_MODULE_6__[\"fetchAllUsers\"],\n    fetchCurrentUser: _actions_user_actions__WEBPACK_IMPORTED_MODULE_6__[\"fetchCurrentUser\"]\n  })(Start)\n});\n\n//# sourceURL=webpack:///./src/client/Start.js?");

/***/ }),

/***/ "./src/client/actions/allTime-actions.js":
/*!***********************************************!*\
  !*** ./src/client/actions/allTime-actions.js ***!
  \***********************************************/
/*! exports provided: getNbaAllTime, getNhlAllTime, getPgaAllTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaAllTime\", function() { return getNbaAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlAllTime\", function() { return getNhlAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaAllTime\", function() { return getPgaAllTime; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar getNbaAllTime = function getNbaAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/allTime/nba\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_ALLTIME\"]);\n};\nvar getNhlAllTime = function getNhlAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/allTime/nhl\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_ALLTIME\"]);\n};\nvar getPgaAllTime = function getPgaAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/allTime/pga\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_ALLTIME\"]);\n};\n\n//# sourceURL=webpack:///./src/client/actions/allTime-actions.js?");

/***/ }),

/***/ "./src/client/actions/critic-actions.js":
/*!**********************************************!*\
  !*** ./src/client/actions/critic-actions.js ***!
  \**********************************************/
/*! exports provided: getNbaCritic, getNhlCritic, getPgaCritic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaCritic\", function() { return getNbaCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlCritic\", function() { return getNhlCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaCritic\", function() { return getPgaCritic; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar getNbaCritic = function getNbaCritic() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/critics/nba\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_CRITIC\"]);\n};\nvar getNhlCritic = function getNhlCritic() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/critics/nhl\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_CRITIC\"]);\n};\nvar getPgaCritic = function getPgaCritic() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/critics/pga\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_CRITIC\"]);\n};\n\n//# sourceURL=webpack:///./src/client/actions/critic-actions.js?");

/***/ }),

/***/ "./src/client/actions/fans-actions.js":
/*!********************************************!*\
  !*** ./src/client/actions/fans-actions.js ***!
  \********************************************/
/*! exports provided: getNbaFans, getNhlFans, getPgaFans, deleteFans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaFans\", function() { return getNbaFans; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlFans\", function() { return getNhlFans; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaFans\", function() { return getPgaFans; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFans\", function() { return deleteFans; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar getNbaFans = function getNbaFans() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/fans/nba\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_FANS\"]);\n};\nvar getNhlFans = function getNhlFans() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/fans/nhl\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_FANS\"]);\n};\nvar getPgaFans = function getPgaFans() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/fans/pga\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_FANS\"]);\n};\nvar deleteFans = function deleteFans(fanId, sport) {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"del\"])(\"/fans\", _types__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_FANS\"], {\n    id: fanId,\n    sport: sport\n  });\n};\n\n//# sourceURL=webpack:///./src/client/actions/fans-actions.js?");

/***/ }),

/***/ "./src/client/actions/fansAllTime-actions.js":
/*!***************************************************!*\
  !*** ./src/client/actions/fansAllTime-actions.js ***!
  \***************************************************/
/*! exports provided: getNbaFansAllTime, getNhlFansAllTime, getPgaFansAllTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaFansAllTime\", function() { return getNbaFansAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlFansAllTime\", function() { return getNhlFansAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaFansAllTime\", function() { return getPgaFansAllTime; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar getNbaFansAllTime = function getNbaFansAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/fansAllTime/nba\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBAFANS_ALLTIME\"]);\n};\nvar getNhlFansAllTime = function getNhlFansAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/fansAllTime/nhl\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHLFANS_ALLTIME\"]);\n};\nvar getPgaFansAllTime = function getPgaFansAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/fansAllTime/pga\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGAFANS_ALLTIME\"]);\n};\n\n//# sourceURL=webpack:///./src/client/actions/fansAllTime-actions.js?");

/***/ }),

/***/ "./src/client/actions/functions/data.js":
/*!**********************************************!*\
  !*** ./src/client/actions/functions/data.js ***!
  \**********************************************/
/*! exports provided: get, del, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"post\", function() { return post; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar receiveTreeData = function receiveTreeData(data, type) {\n  return {\n    type: type,\n    data: data\n  };\n};\n\nvar get = function get(path, type) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return api.get(path);\n\n              case 2:\n                res = _context.sent;\n                dispatch(receiveTreeData(res.data, type));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\n\nvar del = function del(path, type, data) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return api[\"delete\"](path, {\n                  data: data\n                });\n\n              case 2:\n                res = _context2.sent;\n                dispatch(receiveTreeData(res.data, type));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\n\nvar post = function post(path, type, sportList) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return api.post(path, sportList);\n\n              case 2:\n                res = _context3.sent;\n                dispatch({\n                  type: type,\n                  data: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n\n\n//# sourceURL=webpack:///./src/client/actions/functions/data.js?");

/***/ }),

/***/ "./src/client/actions/player-actions.js":
/*!**********************************************!*\
  !*** ./src/client/actions/player-actions.js ***!
  \**********************************************/
/*! exports provided: getNbaPlayer, getNhlPlayer, getPgaPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaPlayer\", function() { return getNbaPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlPlayer\", function() { return getNhlPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaPlayer\", function() { return getPgaPlayer; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar getNbaPlayer = function getNbaPlayer() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/players/nba\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_PLAYER\"]);\n};\nvar getNhlPlayer = function getNhlPlayer() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/players/nhl\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_PLAYER\"]);\n};\nvar getPgaPlayer = function getPgaPlayer() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/players/pga\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_PLAYER\"]);\n};\n\n//# sourceURL=webpack:///./src/client/actions/player-actions.js?");

/***/ }),

/***/ "./src/client/actions/playerAllTime-actions.js":
/*!*****************************************************!*\
  !*** ./src/client/actions/playerAllTime-actions.js ***!
  \*****************************************************/
/*! exports provided: getNbaPlayersAllTime, getNhlPlayersAllTime, getPgaPlayersAllTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaPlayersAllTime\", function() { return getNbaPlayersAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlPlayersAllTime\", function() { return getNhlPlayersAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaPlayersAllTime\", function() { return getPgaPlayersAllTime; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar getNbaPlayersAllTime = function getNbaPlayersAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/playersAllTime/nba\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBAPLAYERS_ALLTIME\"]);\n};\nvar getNhlPlayersAllTime = function getNhlPlayersAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/playersAllTime/nhl\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHLPLAYERS_ALLTIME\"]);\n};\nvar getPgaPlayersAllTime = function getPgaPlayersAllTime() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/playersAllTime/pga\", _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGAPLAYERS_ALLTIME\"]);\n};\n\n//# sourceURL=webpack:///./src/client/actions/playerAllTime-actions.js?");

/***/ }),

/***/ "./src/client/actions/types.js":
/*!*************************************!*\
  !*** ./src/client/actions/types.js ***!
  \*************************************/
/*! exports provided: GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC, GET_NBA_FANS, GET_NHL_FANS, GET_PGA_FANS, DELETE_FANS, GET_NBA_PLAYER, GET_NHL_PLAYER, GET_PGA_PLAYER, GET_NBAFANS_ALLTIME, GET_NHLFANS_ALLTIME, GET_PGAFANS_ALLTIME, GET_NBAPLAYERS_ALLTIME, GET_NHLPLAYERS_ALLTIME, GET_PGAPLAYERS_ALLTIME, GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME, FETCH_CURRENT_USER, FETCH_ALL_USERS, POST_SPORT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_CRITIC\", function() { return GET_NBA_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_CRITIC\", function() { return GET_NHL_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_CRITIC\", function() { return GET_PGA_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_FANS\", function() { return GET_NBA_FANS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_FANS\", function() { return GET_NHL_FANS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_FANS\", function() { return GET_PGA_FANS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_FANS\", function() { return DELETE_FANS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_PLAYER\", function() { return GET_NBA_PLAYER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_PLAYER\", function() { return GET_NHL_PLAYER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_PLAYER\", function() { return GET_PGA_PLAYER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBAFANS_ALLTIME\", function() { return GET_NBAFANS_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHLFANS_ALLTIME\", function() { return GET_NHLFANS_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGAFANS_ALLTIME\", function() { return GET_PGAFANS_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBAPLAYERS_ALLTIME\", function() { return GET_NBAPLAYERS_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHLPLAYERS_ALLTIME\", function() { return GET_NHLPLAYERS_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGAPLAYERS_ALLTIME\", function() { return GET_PGAPLAYERS_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_ALLTIME\", function() { return GET_NBA_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_ALLTIME\", function() { return GET_NHL_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_ALLTIME\", function() { return GET_PGA_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_CURRENT_USER\", function() { return FETCH_CURRENT_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ALL_USERS\", function() { return FETCH_ALL_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POST_SPORT_LIST\", function() { return POST_SPORT_LIST; });\nvar GET_NBA_CRITIC = 'GET_NBA_CRITIC';\nvar GET_NHL_CRITIC = 'GET_NHL_CRITIC';\nvar GET_PGA_CRITIC = 'GET_PGA_CRITIC';\nvar GET_NBA_FANS = 'GET_NBA_FANS';\nvar GET_NHL_FANS = 'GET_NHL_FANS';\nvar GET_PGA_FANS = 'GET_PGA_FANS';\nvar DELETE_FANS = 'DELETE_FANS';\nvar GET_NBA_PLAYER = 'GET_NBA_PLAYER';\nvar GET_NHL_PLAYER = 'GET_NHL_PLAYER';\nvar GET_PGA_PLAYER = 'GET_PGA_PLAYER';\nvar GET_NBAFANS_ALLTIME = 'GET_NBAFANS_ALLTIME';\nvar GET_NHLFANS_ALLTIME = 'GET_NHLFANS_ALLTIME';\nvar GET_PGAFANS_ALLTIME = 'GET_PGAFANS_ALLTIME';\nvar GET_NBAPLAYERS_ALLTIME = 'GET_NBAPLAYERS_ALLTIME';\nvar GET_NHLPLAYERS_ALLTIME = 'GET_NHLPLAYERS_ALLTIME';\nvar GET_PGAPLAYERS_ALLTIME = 'GET_PGAPLAYERS_ALLTIME';\nvar GET_NBA_ALLTIME = 'GET_NBA_ALLTIME';\nvar GET_NHL_ALLTIME = 'GET_NHL_ALLTIME';\nvar GET_PGA_ALLTIME = 'GET_PGA_ALLTIME';\nvar FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';\nvar FETCH_ALL_USERS = 'FETCH_ALL_USERS';\nvar POST_SPORT_LIST = 'POST_SPORT_LIST';\n\n//# sourceURL=webpack:///./src/client/actions/types.js?");

/***/ }),

/***/ "./src/client/actions/user-actions.js":
/*!********************************************!*\
  !*** ./src/client/actions/user-actions.js ***!
  \********************************************/
/*! exports provided: fetchCurrentUser, fetchAllUsers, postSportList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCurrentUser\", function() { return fetchCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAllUsers\", function() { return fetchAllUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postSportList\", function() { return postSportList; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n/* harmony import */ var _functions_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/data */ \"./src/client/actions/functions/data.js\");\n\n\nvar fetchCurrentUser = function fetchCurrentUser() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/current_user\", _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"]);\n};\nvar fetchAllUsers = function fetchAllUsers() {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(\"/users\", _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ALL_USERS\"]);\n};\nvar postSportList = function postSportList(sportList) {\n  return Object(_functions_data__WEBPACK_IMPORTED_MODULE_1__[\"post\"])('/profile', _types__WEBPACK_IMPORTED_MODULE_0__[\"POST_SPORT_LIST\"], sportList);\n};\n\n//# sourceURL=webpack:///./src/client/actions/user-actions.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      var authButton = this.props.user.data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"auth\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/profile\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: this.props.user.data.thumbnail\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"log-padding\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/api/auth/logout\"\n      }, \"Logout\"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"auth\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"log-padding\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/api/auth/google\"\n      }, \"Login\")));\n      var phoneMenu = this.props.phoneMenu ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"mobile-nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"mobile-nav__items\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"goat\",\n        src: __webpack_require__(/*! ../../../public/images/Black_Goat.png */ \"./public/images/Black_Goat.png\")\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        to: \"/nba/\".concat(subRoute),\n        className: \"dropbtn\",\n        activeClassName: \"active\"\n      }, \"NBA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        to: \"/nhl/\".concat(subRoute),\n        className: \"dropbtn\",\n        activeClassName: \"active\"\n      }, \"NHL\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        to: \"/pga/\".concat(subRoute),\n        className: \"dropbtn\",\n        activeClassName: \"active\"\n      }, \"PGA\")))) : null;\n      var subRoute;\n\n      if (this.props.location.pathname.includes('critics')) {\n        subRoute = 'critics';\n      } else if (this.props.location.pathname.includes('players')) {\n        subRoute = 'players';\n      } else if (this.props.location.pathname.includes('fans')) {\n        subRoute = 'fans';\n      } else {\n        subRoute = 'critics';\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, phoneMenu, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n        className: \"header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"toggle-button\",\n        onClick: this.props.phoneMenuClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"toggle-button__bar\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"toggle-button__bar\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"toggle-button__bar\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\",\n        className: \"logo\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"goat\",\n        src: __webpack_require__(/*! ../../../public/images/Black_Goat.png */ \"./public/images/Black_Goat.png\")\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"brand\"\n      }, \"Relic\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"main\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"main-items\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"main-item dropdown\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        to: \"/nba/\".concat(subRoute),\n        className: \"dropbtn\",\n        activeClassName: \"active\"\n      }, \"NBA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"main-item dropdown\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        to: \"/nhl/\".concat(subRoute),\n        className: \"dropbtn\",\n        activeClassName: \"active\"\n      }, \"NHL\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"main-item dropdown\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n        to: \"/pga/\".concat(subRoute),\n        className: \"dropbtn\",\n        activeClassName: \"active\"\n      }, \"PGA\")))), authButton));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var user = _ref.user;\n  return {\n    user: user\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(Header)));\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/criticPage/CriticContainer.js":
/*!*************************************************************!*\
  !*** ./src/client/components/criticPage/CriticContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CriticProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CriticProfile */ \"./src/client/components/criticPage/CriticProfile.js\");\n\n\n\n\nvar CriticContainer = function CriticContainer(props) {\n  var profiles;\n\n  if (props.match.path.includes('/nba')) {\n    profiles = props.profiles.nba;\n  } else if (props.match.path.includes('/nhl')) {\n    profiles = props.profiles.nhl;\n  } else if (props.match.path.includes('/pga')) {\n    profiles = props.profiles.pga;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat-head\"\n  }, \"\".concat(props.route.charAt(0).toUpperCase() + props.route.slice(1), \"  (\").concat(profiles.length, \")\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-list\"\n  }, profiles.sort(function (a, b) {\n    return b.players.length - a.players.length;\n  }).map(function (profile, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CriticProfile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: profile._id,\n      name: profile.name,\n      job: profile.job,\n      date: profile.date,\n      players: profile.players,\n      url: profile.url,\n      pic: profile.pic,\n      router: props.route\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(CriticContainer));\n\n//# sourceURL=webpack:///./src/client/components/criticPage/CriticContainer.js?");

/***/ }),

/***/ "./src/client/components/criticPage/CriticProfile.js":
/*!***********************************************************!*\
  !*** ./src/client/components/criticPage/CriticProfile.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar CriticProfile = function CriticProfile(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-profile\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-name\"\n  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-info\"\n  }, props.job), props.players.slice(0, 10).map(function (player, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      className: \"critic-stats\"\n    }, \"\".concat(index + 1, \". \").concat(player));\n  }), props.players.length > 10 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-stats\"\n  }, \"...\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-stats\"\n  }, \"(\".concat(props.players.length, \")\"))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-foot\"\n  }, props.date, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"web-link\",\n    href: props.url\n  }, \"Source\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CriticProfile);\n\n//# sourceURL=webpack:///./src/client/components/criticPage/CriticProfile.js?");

/***/ }),

/***/ "./src/client/components/criticPage/ListHeader.js":
/*!********************************************************!*\
  !*** ./src/client/components/criticPage/ListHeader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ListHeader = function ListHeader(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"list-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"main-items\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"\".concat(props.match.url, \"/critics\"),\n    className: \"list-header-title\",\n    activeClassName: \"list-header-active\",\n    onClick: function onClick() {\n      return props.onPathClick('critics');\n    }\n  }, \"Critics\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"\".concat(props.match.url, \"/players\"),\n    className: \"list-header-title\",\n    activeClassName: \"list-header-active\",\n    onClick: function onClick() {\n      return props.onPathClick('players');\n    }\n  }, \"Players\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"\".concat(props.match.url, \"/fans\"),\n    className: \"list-header-title\",\n    activeClassName: \"list-header-active\",\n    onClick: function onClick() {\n      return props.onPathClick('fans');\n    }\n  }, \"Fans\")))));\n}; // const mapStateToProps = ({ user }) => {\n//     return { user }\n// }\n// export default connect(mapStateToProps)(ListHeader)\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(ListHeader));\n\n//# sourceURL=webpack:///./src/client/components/criticPage/ListHeader.js?");

/***/ }),

/***/ "./src/client/components/criticPage/PlayerList.js":
/*!********************************************************!*\
  !*** ./src/client/components/criticPage/PlayerList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayerListCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerListCat */ \"./src/client/components/criticPage/PlayerListCat.js\");\n\n\n\n\nvar PlayerList = function PlayerList(props) {\n  var allTime;\n\n  if (props.location.pathname.includes('nba')) {\n    allTime = props.allTime.nba;\n  } else if (props.location.pathname.includes('nhl')) {\n    allTime = props.allTime.nhl;\n  } else if (props.location.pathname.includes('pga')) {\n    allTime = props.allTime.pga;\n  } else {\n    allTime = props.allTime.nba;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"list\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat-head\"\n  }, \"\".concat(props.route.charAt(0).toUpperCase() + props.route.slice(1), \" Top \\n                \").concat(props.match.path.replace('/', '').toUpperCase(), \" \\n                Players of All Time\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"all-time\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cats-banner\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Rank\",\n    allTime: allTime\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Player\",\n    allTime: allTime\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Lists\",\n    allTime: allTime\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Avg.\",\n    allTime: allTime\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"total-foot\"\n  }, \"(\".concat(allTime.length, \")\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(PlayerList));\n\n//# sourceURL=webpack:///./src/client/components/criticPage/PlayerList.js?");

/***/ }),

/***/ "./src/client/components/criticPage/PlayerListCat.js":
/*!***********************************************************!*\
  !*** ./src/client/components/criticPage/PlayerListCat.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar PlayerListCat = function PlayerListCat(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cats\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"catshead\"\n  }, props.title), props.allTime.map(function (player, index) {\n    if (props.title === \"Rank\") {\n      if (index > 0) {\n        var count = index;\n\n        while (count > 0 && props.allTime[count - 1].lists === player.lists && props.allTime[count - 1].avg === player.avg) {\n          count--;\n        }\n\n        if (count !== index) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            key: index,\n            className: \"player-list\"\n          }, \"\".concat(count + 1, \".\"));\n        }\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index,\n        className: \"player-list\"\n      }, \"\".concat(index + 1, \".\"));\n    }\n\n    if (props.title === \"Player\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index,\n        className: \"player-list\"\n      }, player.player);\n    }\n\n    if (props.title === \"Lists\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index,\n        className: \"player-list\"\n      }, player.lists);\n    }\n\n    if (props.title === \"Avg.\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index,\n        className: \"player-list\"\n      }, player.avg);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerListCat);\n\n//# sourceURL=webpack:///./src/client/components/criticPage/PlayerListCat.js?");

/***/ }),

/***/ "./src/client/components/criticPage/SportStats.js":
/*!********************************************************!*\
  !*** ./src/client/components/criticPage/SportStats.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TrophyCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrophyCase */ \"./src/client/components/criticPage/TrophyCase.js\");\n/* harmony import */ var _PlayerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerList */ \"./src/client/components/criticPage/PlayerList.js\");\n/* harmony import */ var _CriticContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CriticContainer */ \"./src/client/components/criticPage/CriticContainer.js\");\n\n\n\n\n\n\n\nvar SportStats = function SportStats(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrophyCase__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    route: props.route,\n    allTime: props.allTime\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CriticContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    profiles: props.profiles,\n    route: props.route\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  if (props.route === 'critics') {\n    return {\n      profiles: state.critics,\n      allTime: state.allTime\n    };\n  } else if (props.route === 'players') {\n    return {\n      profiles: state.players,\n      allTime: state.playersAllTime\n    };\n  } else if (props.route === 'fans') {\n    return {\n      profiles: state.fans,\n      allTime: state.fansAllTime\n    };\n  } else {\n    return {\n      profiles: state.critics,\n      allTime: state.allTime\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(SportStats)));\n\n//# sourceURL=webpack:///./src/client/components/criticPage/SportStats.js?");

/***/ }),

/***/ "./src/client/components/criticPage/TrophyCase.js":
/*!********************************************************!*\
  !*** ./src/client/components/criticPage/TrophyCase.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar TrophyCase = function TrophyCase(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"trophies\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrophyCase);\n\n//# sourceURL=webpack:///./src/client/components/criticPage/TrophyCase.js?");

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (ChildComponent) {\n  var RequireAuth =\n  /*#__PURE__*/\n  function (_Component) {\n    _inherits(RequireAuth, _Component);\n\n    function RequireAuth() {\n      _classCallCheck(this, RequireAuth);\n\n      return _possibleConstructorReturn(this, _getPrototypeOf(RequireAuth).apply(this, arguments));\n    }\n\n    _createClass(RequireAuth, [{\n      key: \"render\",\n      value: function render() {\n        switch (this.props.user) {\n          case false:\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n              to: \"/\"\n            });\n\n          case null:\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n\n          default:\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, this.props);\n        }\n      }\n    }]);\n\n    return RequireAuth;\n  }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n  var mapStateToProps = function mapStateToProps(state) {\n    return {\n      user: state.user.data\n    };\n  };\n\n  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(RequireAuth);\n});\n\n//# sourceURL=webpack:///./src/client/components/hocs/requireAuth.js?");

/***/ }),

/***/ "./src/client/components/profilePage/SportList.js":
/*!********************************************************!*\
  !*** ./src/client/components/profilePage/SportList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user-actions */ \"./src/client/actions/user-actions.js\");\n/* harmony import */ var _actions_fans_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/fans-actions */ \"./src/client/actions/fans-actions.js\");\n/* harmony import */ var _SportListInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SportListInput */ \"./src/client/components/profilePage/SportListInput.js\");\n/* harmony import */ var _UserPlayerList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserPlayerList */ \"./src/client/components/profilePage/UserPlayerList.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar SportList =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SportList, _Component);\n\n  function SportList(props) {\n    var _this;\n\n    _classCallCheck(this, SportList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SportList).call(this, props));\n    _this.state = {\n      sport: _this.props.userPlayers,\n      input: '',\n      searchList: null,\n      spellCheck: true,\n      repeat: false,\n      playerClick: true,\n      index: null,\n      cursor: 0\n    };\n    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));\n    _this.deleteClickHandler = _this.deleteClickHandler.bind(_assertThisInitialized(_this));\n    _this.listClick = _this.listClick.bind(_assertThisInitialized(_this));\n    _this.enterHandler = _this.enterHandler.bind(_assertThisInitialized(_this));\n    _this.playerClickHandler = _this.playerClickHandler.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(SportList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        input: ''\n      });\n    }\n  }, {\n    key: \"enterHandler\",\n    value: function enterHandler(e, list) {\n      var index;\n\n      if (this.state.index === null) {\n        index = this.props.userPlayers.length;\n      } else {\n        index = this.state.index;\n      }\n\n      var value = e.target.value;\n\n      if (e.key === 'Enter') {\n        e.preventDefault();\n\n        if (list.length > 0) {\n          value = list[this.state.cursor].player;\n        }\n\n        var check = this.props.criticPlayers.filter(function (player) {\n          return player.player === value;\n        });\n        var repeat = this.props.userPlayers.filter(function (player) {\n          return player === value;\n        });\n\n        if (check.length > 0 && repeat.length === 0) {\n          this.props.userPlayers[index] = value;\n          this.props.sportList(this.props.user);\n          this.setState({\n            sport: this.props.userPlayers,\n            input: '',\n            spellCheck: true,\n            repeat: false,\n            playerClick: true,\n            index: null,\n            cursor: 0\n          });\n        }\n\n        if (check.length === 0) {\n          this.setState({\n            spellCheck: false,\n            input: ''\n          });\n        }\n\n        if (repeat.length > 0) {\n          this.setState({\n            repeat: true,\n            input: ''\n          });\n        }\n      }\n\n      if (e.key === 'Escape') {\n        this.setState({\n          index: null,\n          playerClick: true,\n          input: '',\n          cursor: 0\n        });\n      }\n\n      if (e.key === 'ArrowUp' && this.state.cursor > 0) {\n        this.setState(function (prevState) {\n          return {\n            cursor: prevState.cursor - 1\n          };\n        });\n      }\n\n      if ((e.key === 'ArrowDown' || e.key === 'Tab') && this.state.cursor < list.length - 1) {\n        e.preventDefault();\n        this.setState(function (prevState) {\n          return {\n            cursor: prevState.cursor + 1\n          };\n        });\n      }\n\n      if (e.key === 'Tab' && this.state.cursor === list.length - 1) {\n        this.setState({\n          cursor: 0,\n          input: ''\n        });\n      }\n    }\n  }, {\n    key: \"inputChange\",\n    value: function inputChange(e) {\n      this.setState({\n        input: e.target.value,\n        searchList: true,\n        spellCheck: true,\n        repeat: false\n      });\n    }\n  }, {\n    key: \"deleteClickHandler\",\n    value: function deleteClickHandler(index) {\n      var sport = this.props.title[0] + this.props.title.charAt(1).toLowerCase() + this.props.title.charAt(2).toLowerCase();\n\n      if (this.props.userPlayers.length === 1) {\n        console.log(this.props.userPlayers);\n        this.props.deletFan(this.props.user.googleId, sport);\n      } else {\n        this.props.sportList(this.props.user);\n      }\n\n      this.props.userPlayers.splice(index, 1);\n      this.setState({\n        sport: this.props.userPlayers,\n        index: null,\n        playerClick: true\n      });\n    }\n  }, {\n    key: \"listClick\",\n    value: function listClick(player) {\n      var index;\n\n      if (this.state.index === null) {\n        index = this.props.userPlayers.length;\n      } else {\n        index = this.state.index;\n      }\n\n      var repeat = this.props.userPlayers.filter(function (x) {\n        return x === player;\n      });\n\n      if (repeat.length === 0) {\n        this.props.userPlayers[index] = player;\n        this.props.sportList(this.props.user);\n        this.setState({\n          input: '',\n          searchList: null,\n          repeat: false,\n          playerClick: true,\n          index: null,\n          cursor: 0\n        });\n      } else {\n        this.setState({\n          repeat: true,\n          input: ''\n        });\n      }\n    }\n  }, {\n    key: \"playerClickHandler\",\n    value: function playerClickHandler(index) {\n      this.setState({\n        playerClick: false,\n        index: index\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var sportListInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SportListInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sport: this.props.criticPlayers,\n        input: this.state.input,\n        inputChange: this.inputChange,\n        listClick: this.listClick,\n        enterHandler: this.enterHandler,\n        searchList: this.state.searchList,\n        spellCheck: this.state.spellCheck,\n        sportName: this.props.title,\n        repeat: this.state.repeat,\n        userData: this.props.userPlayers,\n        cursor: this.state.cursor\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"list-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"title-list\"\n      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserPlayerList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        userData: this.props.userPlayers,\n        deleteButton: this.deleteClickHandler,\n        onClick: this.playerClickHandler,\n        SportListInput: sportListInput,\n        playerClick: this.state.playerClick,\n        index: this.state.index\n      }), this.state.playerClick ? sportListInput : null);\n    }\n  }]);\n\n  return SportList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    sportList: function sportList(data) {\n      dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__[\"postSportList\"])(data));\n    },\n    deletFan: function deletFan(data, sport) {\n      dispatch(Object(_actions_fans_actions__WEBPACK_IMPORTED_MODULE_3__[\"deleteFans\"])(data, sport));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, mapDispatchToProps)(SportList));\n\n//# sourceURL=webpack:///./src/client/components/profilePage/SportList.js?");

/***/ }),

/***/ "./src/client/components/profilePage/SportListInput.js":
/*!*************************************************************!*\
  !*** ./src/client/components/profilePage/SportListInput.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar SportListInput =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SportListInput, _Component);\n\n  function SportListInput(props) {\n    var _this;\n\n    _classCallCheck(this, SportListInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SportListInput).call(this, props));\n    _this.state = {\n      sport: _this.props.sport,\n      userData: _this.props.userData\n    };\n    return _this;\n  }\n\n  _createClass(SportListInput, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var list;\n      var filteredList = this.state.sport.filter(function (player) {\n        return _this2.props.input === '' || player.player.toLowerCase().includes(_this2.props.input.toLowerCase()) && player.player[0].toLowerCase() === _this2.props.input[0].toLowerCase() && !_this2.state.userData.includes(player.player);\n      });\n\n      if (this.props.input !== '' && this.props.searchList) {\n        list = filteredList.sort(function (a, b) {\n          return a.player.localeCompare(b.player);\n        }).map(function (player, index) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n            key: index,\n            className: _this2.props.cursor === index ? 'tab' : null,\n            onClick: function onClick() {\n              return _this2.props.listClick(player.player);\n            }\n          }, player.player);\n        });\n      }\n\n      if (!this.props.spellCheck) {\n        list = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"error\"\n        }, \"That is not a \".concat(this.props.sportName, \" athlete\"));\n      }\n\n      if (this.props.repeat) {\n        list = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"error\"\n        }, \"Player is already in your list\");\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bottom-list\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        autoFocus: true,\n        type: \"text\",\n        placeholder: \"Type \".concat(this.props.sportName, \" player\"),\n        onKeyDown: function onKeyDown(e) {\n          return _this2.props.enterHandler(e, filteredList);\n        },\n        value: this.props.input,\n        onChange: this.props.inputChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, list));\n    }\n  }]);\n\n  return SportListInput;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SportListInput);\n\n//# sourceURL=webpack:///./src/client/components/profilePage/SportListInput.js?");

/***/ }),

/***/ "./src/client/components/profilePage/UserPlayerList.js":
/*!*************************************************************!*\
  !*** ./src/client/components/profilePage/UserPlayerList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar UserPlayerList =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(UserPlayerList, _Component);\n\n  function UserPlayerList(props) {\n    var _this;\n\n    _classCallCheck(this, UserPlayerList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserPlayerList).call(this, props));\n    _this.state = {\n      index: _this.props.index\n    };\n    return _this;\n  }\n\n  _createClass(UserPlayerList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        index: this.props.index\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, this.props.userData.map(function (player, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"player-container\",\n          key: index\n        }, index === _this2.props.index ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, _this2.props.SportListInput) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"player-user-list\",\n          onClick: function onClick() {\n            return _this2.props.onClick(index);\n          }\n        }, \"\".concat(index + 1, \". \").concat(player)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          className: \"delete-player\",\n          onClick: function onClick() {\n            return _this2.props.deleteButton(index);\n          }\n        }, \"x\"));\n      }));\n    }\n  }]);\n\n  return UserPlayerList;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserPlayerList);\n\n//# sourceURL=webpack:///./src/client/components/profilePage/UserPlayerList.js?");

/***/ }),

/***/ "./src/client/pages/CriticPage.js":
/*!****************************************!*\
  !*** ./src/client/pages/CriticPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_criticPage_ListHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/criticPage/ListHeader */ \"./src/client/components/criticPage/ListHeader.js\");\n/* harmony import */ var _components_criticPage_SportStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/criticPage/SportStats */ \"./src/client/components/criticPage/SportStats.js\");\n/* harmony import */ var _actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/fans-actions */ \"./src/client/actions/fans-actions.js\");\n/* harmony import */ var _actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/fansAllTime-actions */ \"./src/client/actions/fansAllTime-actions.js\");\n/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/player-actions */ \"./src/client/actions/player-actions.js\");\n/* harmony import */ var _actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/playerAllTime-actions */ \"./src/client/actions/playerAllTime-actions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar CriticPage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CriticPage, _Component);\n\n  function CriticPage(props) {\n    var _this;\n\n    _classCallCheck(this, CriticPage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CriticPage).call(this, props));\n    _this.state = {\n      path: props.match.path.replace('/', '')\n    };\n    _this.onPathClick = _this.onPathClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CriticPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getNbaFans();\n      this.props.getNhlFans();\n      this.props.getPgaFans();\n      this.props.getNbaFansAllTime();\n      this.props.getNhlFansAllTime();\n      this.props.getPgaFansAllTime();\n      this.props.getNbaPlayer();\n      this.props.getNhlPlayer();\n      this.props.getPgaPlayer();\n      this.props.getNbaPlayersAllTime();\n      this.props.getNhlPlayersAllTime();\n      this.props.getPgaPlayersAllTime();\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var path;\n      console.log(this.props.match.path);\n\n      if (this.props.location.pathname.includes('critics')) {\n        path = 'critics';\n      } else if (this.props.location.pathname.includes('players')) {\n        path = 'players';\n      } else if (this.props.location.pathname.includes('fans')) {\n        path = 'fans';\n      } else {\n        path = 'critics';\n      }\n\n      this.setState({\n        path: path\n      });\n    }\n  }, {\n    key: \"onPathClick\",\n    value: function onPathClick(path) {\n      this.setState({\n        path: path\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_criticPage_ListHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onPathClick: this.onPathClick\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"content\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_criticPage_SportStats__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        route: this.state.path\n      }))));\n    }\n  }]);\n\n  return CriticPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar loadData = function loadData(store) {\n  return Promise.all([store.dispatch(Object(_actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNbaFans\"])()), store.dispatch(Object(_actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNhlFans\"])()), store.dispatch(Object(_actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__[\"getPgaFans\"])()), store.dispatch(Object(_actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__[\"getNbaFansAllTime\"])()), store.dispatch(Object(_actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__[\"getNhlFansAllTime\"])()), store.dispatch(Object(_actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__[\"getPgaFansAllTime\"])()), store.dispatch(Object(_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__[\"getNbaPlayer\"])()), store.dispatch(Object(_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__[\"getNhlPlayer\"])()), store.dispatch(Object(_actions_player_actions__WEBPACK_IMPORTED_MODULE_8__[\"getPgaPlayer\"])()), store.dispatch(Object(_actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__[\"getNbaPlayersAllTime\"])()), store.dispatch(Object(_actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__[\"getNhlPlayersAllTime\"])()), store.dispatch(Object(_actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__[\"getPgaPlayersAllTime\"])())]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(null, {\n    getNbaFans: _actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNbaFans\"],\n    getNhlFans: _actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNhlFans\"],\n    getPgaFans: _actions_fans_actions__WEBPACK_IMPORTED_MODULE_6__[\"getPgaFans\"],\n    getNbaFansAllTime: _actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__[\"getNbaFansAllTime\"],\n    getNhlFansAllTime: _actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__[\"getNhlFansAllTime\"],\n    getPgaFansAllTime: _actions_fansAllTime_actions__WEBPACK_IMPORTED_MODULE_7__[\"getPgaFansAllTime\"],\n    getNbaPlayer: _actions_player_actions__WEBPACK_IMPORTED_MODULE_8__[\"getNbaPlayer\"],\n    getNhlPlayer: _actions_player_actions__WEBPACK_IMPORTED_MODULE_8__[\"getNhlPlayer\"],\n    getPgaPlayer: _actions_player_actions__WEBPACK_IMPORTED_MODULE_8__[\"getPgaPlayer\"],\n    getNbaPlayersAllTime: _actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__[\"getNbaPlayersAllTime\"],\n    getNhlPlayersAllTime: _actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__[\"getNhlPlayersAllTime\"],\n    getPgaPlayersAllTime: _actions_playerAllTime_actions__WEBPACK_IMPORTED_MODULE_9__[\"getPgaPlayersAllTime\"]\n  })(CriticPage))\n});\n\n//# sourceURL=webpack:///./src/client/pages/CriticPage.js?");

/***/ }),

/***/ "./src/client/pages/Home.js":
/*!**********************************!*\
  !*** ./src/client/pages/Home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"bigWord\"\n  }, \"Home\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Home\n});\n\n//# sourceURL=webpack:///./src/client/pages/Home.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/NotFoundPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"bigWord\"\n  }, \"Oops, route not found.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: NotFoundPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/pages/ProfilePage.js":
/*!*****************************************!*\
  !*** ./src/client/pages/ProfilePage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hocs/requireAuth */ \"./src/client/components/hocs/requireAuth.js\");\n/* harmony import */ var _components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profilePage/SportList */ \"./src/client/components/profilePage/SportList.js\");\n\n\n\n\n\nvar ProfilePage = function ProfilePage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"user\"\n  }, \"Welcome \".concat(props.user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Create your Goat Lists\"), console.log(props.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lists-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    user: props.user,\n    userPlayers: props.user.nba,\n    criticPlayers: props.allTime.nba,\n    title: \"NBA\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    user: props.user,\n    userPlayers: props.user.nhl,\n    criticPlayers: props.allTime.nhl,\n    title: \"NHL\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    user: props.user,\n    userPlayers: props.user.pga,\n    criticPlayers: props.allTime.pga,\n    title: \"PGA\"\n  }))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user.data,\n    allTime: state.allTime\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Object(_components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProfilePage))\n});\n\n//# sourceURL=webpack:///./src/client/pages/ProfilePage.js?");

/***/ }),

/***/ "./src/client/reducers/allTimeReducer.js":
/*!***********************************************!*\
  !*** ./src/client/reducers/allTimeReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  nba: [],\n  nhl: [],\n  pga: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        nba: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        nhl: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        pga: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/allTimeReducer.js?");

/***/ }),

/***/ "./src/client/reducers/criticReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/criticReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  nba: [],\n  nhl: [],\n  pga: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_CRITIC\"]:\n      return _objectSpread({}, state, {\n        nba: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_CRITIC\"]:\n      return _objectSpread({}, state, {\n        nhl: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_CRITIC\"]:\n      return _objectSpread({}, state, {\n        pga: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/criticReducer.js?");

/***/ }),

/***/ "./src/client/reducers/fansAllTimeReducer.js":
/*!***************************************************!*\
  !*** ./src/client/reducers/fansAllTimeReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  nba: [],\n  nhl: [],\n  pga: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBAFANS_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        nba: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHLFANS_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        nhl: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGAFANS_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        pga: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/fansAllTimeReducer.js?");

/***/ }),

/***/ "./src/client/reducers/fansReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/fansReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  nba: [],\n  nhl: [],\n  pga: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_FANS\"]:\n      return _objectSpread({}, state, {\n        nba: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_FANS\"]:\n      return _objectSpread({}, state, {\n        nhl: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_FANS\"]:\n      return _objectSpread({}, state, {\n        pga: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_FANS\"]:\n      console.log(state);\n      return _objectSpread({}, state, state[action.data.sport].filter(function (fan) {\n        return fan.googleId !== action.data.id;\n      }));\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/fansReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _criticReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criticReducer */ \"./src/client/reducers/criticReducer.js\");\n/* harmony import */ var _allTimeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTimeReducer */ \"./src/client/reducers/allTimeReducer.js\");\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userReducer */ \"./src/client/reducers/userReducer.js\");\n/* harmony import */ var _fansReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fansReducer */ \"./src/client/reducers/fansReducer.js\");\n/* harmony import */ var _fansAllTimeReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fansAllTimeReducer */ \"./src/client/reducers/fansAllTimeReducer.js\");\n/* harmony import */ var _playerReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playerReducer */ \"./src/client/reducers/playerReducer.js\");\n/* harmony import */ var _playersAllTimeReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playersAllTimeReducer */ \"./src/client/reducers/playersAllTimeReducer.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  critics: _criticReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  allTime: _allTimeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  user: _userReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  fans: _fansReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  fansAllTime: _fansAllTimeReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  players: _playerReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  playersAllTime: _playersAllTimeReducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/playerReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/playerReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  nba: [],\n  nhl: [],\n  pga: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_PLAYER\"]:\n      return _objectSpread({}, state, {\n        nba: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_PLAYER\"]:\n      return _objectSpread({}, state, {\n        nhl: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_PLAYER\"]:\n      return _objectSpread({}, state, {\n        pga: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/playerReducer.js?");

/***/ }),

/***/ "./src/client/reducers/playersAllTimeReducer.js":
/*!******************************************************!*\
  !*** ./src/client/reducers/playersAllTimeReducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  nba: [],\n  nhl: [],\n  pga: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBAPLAYERS_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        nba: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHLPLAYERS_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        nhl: action.data\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGAPLAYERS_ALLTIME\"]:\n      return _objectSpread({}, state, {\n        pga: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/playersAllTimeReducer.js?");

/***/ }),

/***/ "./src/client/reducers/userReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/userReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  data: {\n    nhl: [],\n    nba: [],\n    pga: [],\n    users: []\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"]:\n      return _objectSpread({}, state, {\n        data: action.data || false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"POST_SPORT_LIST\"]:\n      return _objectSpread({}, state, {\n        nba: action.data.nba,\n        nhl: action.data.nhl,\n        pga: action.data.pga\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ALL_USERS\"]:\n      return _objectSpread({}, state, {\n        users: action.data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/userReducer.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar config = {};\n\nif (true) {\n  config = {\n    frontDomain: 'localhost:3000',\n    backDomain: 'localhost:3001'\n  };\n} else {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/config/config.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n    baseURL: \"http://\".concat(_config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].backDomain),\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])))));\n  return \"\\n        <html>\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n                <link rel=\\\"icon\\\" href=\\\"data:,\\\">\\n                <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/style.css\\\">\\n                <title>Goat</title>\\n                <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"/images/favicon.ico\\\"/>\\n            </head>\\n            <body>\\n                <div id=\\\"app\\\">\".concat(content, \"</div>\\n                <script>\\n                    window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"\\n                </script>\\n                <script src=\\\"/bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \");\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default()(\"http://\".concat(_config_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].backDomain), {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = _config_config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].frontDomain;\n    return opts;\n  }\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req);\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (res, rej) {\n        promise.then(res)[\"catch\"](res);\n      });\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, store, context);\n\n    if (context.url) {\n      return res.redirect(303, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  });\n});\napp.listen(process.env.PORT || 3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });