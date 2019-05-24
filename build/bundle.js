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

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _actions_allTime_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/allTime-actions */ \"./src/client/actions/allTime-actions.js\");\n/* harmony import */ var _actions_critic_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/critic-actions */ \"./src/client/actions/critic-actions.js\");\n/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/user-actions */ \"./src/client/actions/user-actions.js\");\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes));\n};\n\nvar loadData = function loadData(store) {\n  return Promise.all([store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_3__[\"getNbaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNbaCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_3__[\"getNhlAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNhlCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_3__[\"getPgaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_4__[\"getPgaCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_3__[\"getNbaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_4__[\"getNbaCritic\"])()), store.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__[\"fetchCurrentUser\"])())]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: App\n});\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n/* harmony import */ var _pages_CriticPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/CriticPage */ \"./src/client/pages/CriticPage.js\");\n/* harmony import */ var _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ProfilePage */ \"./src/client/pages/ProfilePage.js\");\n/* harmony import */ var _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  routes: [_objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: '/',\n    exact: true\n  }), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: '/nba'\n  }), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: '/nhl'\n  }), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: '/pga'\n  }), _objectSpread({}, _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    path: '/profile'\n  }), _objectSpread({}, _pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])]\n})]);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/allTime-actions.js":
/*!***********************************************!*\
  !*** ./src/client/actions/allTime-actions.js ***!
  \***********************************************/
/*! exports provided: getNbaAllTime, getNhlAllTime, getPgaAllTime, receiveTreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaAllTime\", function() { return getNbaAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlAllTime\", function() { return getNhlAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaAllTime\", function() { return getPgaAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveTreeData\", function() { return receiveTreeData; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar getNbaAllTime = function getNbaAllTime() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return api.get(\"/allTime/nba\");\n\n              case 2:\n                res = _context.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_ALLTIME\"]));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getNhlAllTime = function getNhlAllTime() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return api.get(\"/allTime/nhl\");\n\n              case 2:\n                res = _context2.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_ALLTIME\"]));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getPgaAllTime = function getPgaAllTime() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return api.get(\"/allTime/pga\");\n\n              case 2:\n                res = _context3.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_ALLTIME\"]));\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar receiveTreeData = function receiveTreeData(data, type) {\n  return {\n    type: type,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/allTime-actions.js?");

/***/ }),

/***/ "./src/client/actions/critic-actions.js":
/*!**********************************************!*\
  !*** ./src/client/actions/critic-actions.js ***!
  \**********************************************/
/*! exports provided: getNbaCritic, getNhlCritic, getPgaCritic, receiveTreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaCritic\", function() { return getNbaCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlCritic\", function() { return getNhlCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaCritic\", function() { return getPgaCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveTreeData\", function() { return receiveTreeData; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar getNbaCritic = function getNbaCritic() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return api.get(\"/critics/nba\");\n\n              case 2:\n                res = _context.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NBA_CRITIC\"]));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getNhlCritic = function getNhlCritic() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return api.get(\"/critics/nhl\");\n\n              case 2:\n                res = _context2.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_NHL_CRITIC\"]));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getPgaCritic = function getPgaCritic() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return api.get(\"/critics/pga\");\n\n              case 2:\n                res = _context3.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PGA_CRITIC\"]));\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x7, _x8, _x9) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar receiveTreeData = function receiveTreeData(data, type) {\n  return {\n    type: type,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/critic-actions.js?");

/***/ }),

/***/ "./src/client/actions/types.js":
/*!*************************************!*\
  !*** ./src/client/actions/types.js ***!
  \*************************************/
/*! exports provided: GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC, GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME, FETCH_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_CRITIC\", function() { return GET_NBA_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_CRITIC\", function() { return GET_NHL_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_CRITIC\", function() { return GET_PGA_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_ALLTIME\", function() { return GET_NBA_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_ALLTIME\", function() { return GET_NHL_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_ALLTIME\", function() { return GET_PGA_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_CURRENT_USER\", function() { return FETCH_CURRENT_USER; });\nvar GET_NBA_CRITIC = 'GET_NBA_CRITIC';\nvar GET_NHL_CRITIC = 'GET_NHL_CRITIC';\nvar GET_PGA_CRITIC = 'GET_PGA_CRITIC';\nvar GET_NBA_ALLTIME = 'GET_NBA_ALLTIME';\nvar GET_NHL_ALLTIME = 'GET_NHL_ALLTIME';\nvar GET_PGA_ALLTIME = 'GET_PGA_ALLTIME';\nvar FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';\n\n//# sourceURL=webpack:///./src/client/actions/types.js?");

/***/ }),

/***/ "./src/client/actions/user-actions.js":
/*!********************************************!*\
  !*** ./src/client/actions/user-actions.js ***!
  \********************************************/
/*! exports provided: fetchCurrentUser, receiveTreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCurrentUser\", function() { return fetchCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveTreeData\", function() { return receiveTreeData; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar fetchCurrentUser = function fetchCurrentUser() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return api.get(\"/profile\");\n\n              case 2:\n                res = _context.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"]));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar receiveTreeData = function receiveTreeData(data, type) {\n  return {\n    type: type,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/user-actions.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Header = function Header(_ref) {\n  var user = _ref.user;\n  var authButton = user.data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"main-item auth\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/profile\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: user.data.thumbnail,\n    width: \"40\",\n    height: \"40\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/api/auth/logout\"\n  }, \"Logout\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"main-item auth\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/api/auth/google\"\n  }, \"Login\"));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"toggle-button\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"toggle-button__bar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"toggle-button__bar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"toggle-button__bar\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"logo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"goat\",\n    src: __webpack_require__(/*! ../../../public/images/Black_Goat.png */ \"./public/images/Black_Goat.png\")\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"brand\"\n  }, \"Relic\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"main-items\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"main-item dropdown\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/nba\",\n    className: \"dropbtn\"\n  }, \"NBA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"main-item dropdown\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/nhl\",\n    className: \"dropbtn\"\n  }, \"NHL\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"main-item dropdown\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/pga\",\n    className: \"dropbtn\"\n  }, \"PGA\")))), authButton);\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var user = _ref2.user;\n  return {\n    user: user\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(Header));\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/criticPage/CriticContainer.js":
/*!*************************************************************!*\
  !*** ./src/client/components/criticPage/CriticContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CriticProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CriticProfile */ \"./src/client/components/criticPage/CriticProfile.js\");\n\n\n\n\n\nvar CriticContainer = function CriticContainer(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat-head\"\n  }, \"Critics\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-list\"\n  }, props.critics.map(function (critic, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CriticProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: critic._id,\n      name: critic.name,\n      job: critic.job,\n      date: critic.date,\n      players: critic.players,\n      url: critic.url,\n      pic: critic.pic\n    });\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  if (props.match.path === '/nba') {\n    return {\n      critics: state.critics.nba\n    };\n  } else if (props.match.path === '/nhl') {\n    return {\n      critics: state.critics.nhl\n    };\n  } else if (props.match.path === '/pga') {\n    return {\n      critics: state.critics.pga\n    };\n  } else {\n    return {\n      critics: state.critics.nba\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(CriticContainer)));\n\n//# sourceURL=webpack:///./src/client/components/criticPage/CriticContainer.js?");

/***/ }),

/***/ "./src/client/components/criticPage/CriticProfile.js":
/*!***********************************************************!*\
  !*** ./src/client/components/criticPage/CriticProfile.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar CriticProfile = function CriticProfile(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-profile\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-name\"\n  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-info\"\n  }, props.job), props.players.slice(0, 10).map(function (player, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      className: \"critic-stats\"\n    }, \"\".concat(index + 1, \". \").concat(player));\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-foot\"\n  }, props.date, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"web-link\",\n    href: props.url\n  }, \"Source\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CriticProfile);\n\n//# sourceURL=webpack:///./src/client/components/criticPage/CriticProfile.js?");

/***/ }),

/***/ "./src/client/components/criticPage/PlayerList.js":
/*!********************************************************!*\
  !*** ./src/client/components/criticPage/PlayerList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PlayerListCat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerListCat */ \"./src/client/components/criticPage/PlayerListCat.js\");\n\n\n\nvar PlayerList = function PlayerList(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"list\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat-head\"\n  }, \"Critics Top Players of All Time\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"all-time\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cats-banner\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Rank\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Player\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Lists\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Avg.\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"total-foot\"\n  }, \"()\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerList);\n\n//# sourceURL=webpack:///./src/client/components/criticPage/PlayerList.js?");

/***/ }),

/***/ "./src/client/components/criticPage/PlayerListCat.js":
/*!***********************************************************!*\
  !*** ./src/client/components/criticPage/PlayerListCat.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar PlayerListCat = function PlayerListCat(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cats\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"catshead\"\n  }, props.title), props.allTime.map(function (player, index) {\n    if (props.title === \"Rank\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, \"\".concat(index + 1, \". \"));\n    }\n\n    if (props.title === \"Player\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, player.player);\n    }\n\n    if (props.title === \"Lists\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, player.lists);\n    }\n\n    if (props.title === \"Avg.\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, player.avg);\n    }\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  if (props.match.path === '/nba') {\n    return {\n      allTime: state.allTime.nba\n    };\n  } else if (props.match.path === '/nhl') {\n    return {\n      allTime: state.allTime.nhl\n    };\n  } else if (props.match.path === '/pga') {\n    return {\n      allTime: state.allTime.pga\n    };\n  } else {\n    return {\n      allTime: state.allTime.nba\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(PlayerListCat)));\n\n//# sourceURL=webpack:///./src/client/components/criticPage/PlayerListCat.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar SportList = function SportList(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"list-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"1.\",\n    name: props.sport[0]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"2.\",\n    name: props.sport[1]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"3.\",\n    name: props.sport[2]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"4 \",\n    name: props.sport[3]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"5.\",\n    name: props.sport[4]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"6.\",\n    name: props.sport[5]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"7.\",\n    name: props.sport[6]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"8.\",\n    name: props.sport[7]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"9.\",\n    name: props.sport[8]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"10.\",\n    name: props.sport[9]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"ENTER\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SportList);\n\n//# sourceURL=webpack:///./src/client/components/profilePage/SportList.js?");

/***/ }),

/***/ "./src/client/pages/CriticPage.js":
/*!****************************************!*\
  !*** ./src/client/pages/CriticPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_criticPage_TrophyCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/criticPage/TrophyCase */ \"./src/client/components/criticPage/TrophyCase.js\");\n/* harmony import */ var _components_criticPage_PlayerList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/criticPage/PlayerList */ \"./src/client/components/criticPage/PlayerList.js\");\n/* harmony import */ var _components_criticPage_CriticContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/criticPage/CriticContainer */ \"./src/client/components/criticPage/CriticContainer.js\");\n\n\n\n\n\nvar CriticPage = function CriticPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_criticPage_TrophyCase__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_criticPage_PlayerList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_criticPage_CriticContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: CriticPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/CriticPage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hocs/requireAuth */ \"./src/client/components/hocs/requireAuth.js\");\n/* harmony import */ var _components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profilePage/SportList */ \"./src/client/components/profilePage/SportList.js\");\n\n\n\n\n\nvar ProfilePage = function ProfilePage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"user\"\n  }, \"Welcome \".concat(props.user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Create your Goat Lists\"), console.log(props.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lists-container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sport: props.user.nba,\n    title: \"NBA\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sport: props.user.nhl,\n    title: \"NHL\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profilePage_SportList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sport: props.user.pga,\n    title: \"PGA\"\n  }))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user.data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Object(_components_hocs_requireAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProfilePage))\n});\n\n//# sourceURL=webpack:///./src/client/pages/ProfilePage.js?");

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

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _criticReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criticReducer */ \"./src/client/reducers/criticReducer.js\");\n/* harmony import */ var _allTimeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTimeReducer */ \"./src/client/reducers/allTimeReducer.js\");\n/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userReducer */ \"./src/client/reducers/userReducer.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  critics: _criticReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  allTime: _allTimeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  user: _userReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/userReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/userReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"]:\n      return _objectSpread({}, state, {\n        data: action.data || false\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/userReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n    baseURL: 'http://localhost:3001',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])))));\n  return \"\\n        <html>\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n                <link rel=\\\"icon\\\" href=\\\"data:,\\\">\\n                <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"style.css\\\">\\n                <title>Goat</title>\\n                <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"./images/favicon.ico\\\"/>\\n            </head>\\n            <body>\\n                <div id=\\\"app\\\">\".concat(content, \"</div>\\n                <script>\\n                    window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"\\n                </script>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \");\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3001', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req);\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (res, rej) {\n        promise.then(res)[\"catch\"](res);\n      });\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, store, context);\n\n    if (context.url) {\n      return res.redirect(303, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  });\n});\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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