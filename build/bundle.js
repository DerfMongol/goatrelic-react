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

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_CriticPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/CriticPage */ \"./src/client/pages/CriticPage.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  path: '/',\n  exact: true\n}), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  path: '/nba'\n}), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  path: '/nhl'\n}), _objectSpread({}, _pages_CriticPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  path: '/pga'\n})]);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/allTime-actions.js":
/*!***********************************************!*\
  !*** ./src/client/actions/allTime-actions.js ***!
  \***********************************************/
/*! exports provided: getNbaAllTime, getNhlAllTime, getPgaAllTime, receiveTreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaAllTime\", function() { return getNbaAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlAllTime\", function() { return getNhlAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaAllTime\", function() { return getPgaAllTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveTreeData\", function() { return receiveTreeData; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar allTimeURL = 'http://localhost:4000/api/allTime';\nvar getNbaAllTime = function getNbaAllTime() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(allTimeURL, \"/nba\"));\n\n              case 2:\n                res = _context.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_NBA_ALLTIME\"]));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getNhlAllTime = function getNhlAllTime() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(allTimeURL, \"/nhl\"));\n\n              case 2:\n                res = _context2.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_NHL_ALLTIME\"]));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getPgaAllTime = function getPgaAllTime() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(allTimeURL, \"/pga\"));\n\n              case 2:\n                res = _context3.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_PGA_ALLTIME\"]));\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar receiveTreeData = function receiveTreeData(data, type) {\n  return {\n    type: type,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/allTime-actions.js?");

/***/ }),

/***/ "./src/client/actions/critic-actions.js":
/*!**********************************************!*\
  !*** ./src/client/actions/critic-actions.js ***!
  \**********************************************/
/*! exports provided: getNbaCritic, getNhlCritic, getPgaCritic, receiveTreeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNbaCritic\", function() { return getNbaCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNhlCritic\", function() { return getNhlCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPgaCritic\", function() { return getPgaCritic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receiveTreeData\", function() { return receiveTreeData; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar criticURL = 'http://localhost:4000/api/critics';\nvar getNbaCritic = function getNbaCritic() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(criticURL, \"/nba\"));\n\n              case 2:\n                res = _context.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_NBA_CRITIC\"]));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getNhlCritic = function getNhlCritic() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(criticURL, \"/nhl\"));\n\n              case 2:\n                res = _context2.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_NHL_CRITIC\"]));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar getPgaCritic = function getPgaCritic() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(criticURL, \"/pga\"));\n\n              case 2:\n                res = _context3.sent;\n                dispatch(receiveTreeData(res.data, _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_PGA_CRITIC\"]));\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar receiveTreeData = function receiveTreeData(data, type) {\n  return {\n    type: type,\n    data: data\n  };\n}; //`${apiURL}/nhl`\n\n//# sourceURL=webpack:///./src/client/actions/critic-actions.js?");

/***/ }),

/***/ "./src/client/actions/types.js":
/*!*************************************!*\
  !*** ./src/client/actions/types.js ***!
  \*************************************/
/*! exports provided: GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC, GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_CRITIC\", function() { return GET_NBA_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_CRITIC\", function() { return GET_NHL_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_CRITIC\", function() { return GET_PGA_CRITIC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NBA_ALLTIME\", function() { return GET_NBA_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NHL_ALLTIME\", function() { return GET_NHL_ALLTIME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PGA_ALLTIME\", function() { return GET_PGA_ALLTIME; });\nvar GET_NBA_CRITIC = 'GET_NBA_CRITIC';\nvar GET_NHL_CRITIC = 'GET_NHL_CRITIC';\nvar GET_PGA_CRITIC = 'GET_PGA_CRITIC';\nvar GET_NBA_ALLTIME = 'GET_NBA_ALLTIME';\nvar GET_NHL_ALLTIME = 'GET_NHL_ALLTIME';\nvar GET_PGA_ALLTIME = 'GET_PGA_ALLTIME';\n\n//# sourceURL=webpack:///./src/client/actions/types.js?");

/***/ }),

/***/ "./src/client/components/CriticContainer.js":
/*!**************************************************!*\
  !*** ./src/client/components/CriticContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CriticProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CriticProfile */ \"./src/client/components/CriticProfile.js\");\n\n\n\n\n\nvar CriticContainer = function CriticContainer(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat-head\"\n  }, \"Critics\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-list\"\n  }, props.critics.map(function (critic, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CriticProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: critic._id,\n      name: critic.name,\n      job: critic.job,\n      date: critic.date,\n      players: critic.players,\n      url: critic.url,\n      pic: critic.pic\n    });\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  if (props.match.path === '/nba') {\n    return {\n      critics: state.critic.nba\n    };\n  } else if (props.match.path === '/nhl') {\n    return {\n      critics: state.critic.nhl\n    };\n  } else if (props.match.path === '/pga') {\n    return {\n      critics: state.critic.pga\n    };\n  } else {\n    return {\n      critics: state.critic.nba\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(CriticContainer)));\n\n//# sourceURL=webpack:///./src/client/components/CriticContainer.js?");

/***/ }),

/***/ "./src/client/components/CriticProfile.js":
/*!************************************************!*\
  !*** ./src/client/components/CriticProfile.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar CriticProfile = function CriticProfile(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-profile\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-name\"\n  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-info\"\n  }, props.job), props.players.slice(0, 10).map(function (player, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      className: \"critic-stats\"\n    }, \"\".concat(index + 1, \". \").concat(player));\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"critic-foot\"\n  }, props.date, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"web-link\",\n    href: props.url\n  }, \"Source\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CriticProfile);\n\n//# sourceURL=webpack:///./src/client/components/CriticProfile.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"toggle-button\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"toggle-button__bar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"toggle-button__bar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"toggle-button__bar\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"goat\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"logo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"brand\"\n  }, \"Relic\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"main-items\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"main-item dropdown\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/nba\",\n    className: \"dropbtn\"\n  }, \"NBA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"main-item dropdown\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/nhl\",\n    className: \"dropbtn\"\n  }, \"NHL\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"main-item dropdown\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/pga\",\n    className: \"dropbtn\"\n  }, \"PGA\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/PlayerList.js":
/*!*********************************************!*\
  !*** ./src/client/components/PlayerList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PlayerListCat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerListCat */ \"./src/client/components/PlayerListCat.js\");\n\n\n\nvar PlayerList = function PlayerList(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"list\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stat-head\"\n  }, \"Critics Top Players of All Time\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"all-time\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cats-banner\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Rank\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Player\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Lists\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayerListCat__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Avg.\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"total-foot\"\n  }, \"()\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerList);\n\n//# sourceURL=webpack:///./src/client/components/PlayerList.js?");

/***/ }),

/***/ "./src/client/components/PlayerListCat.js":
/*!************************************************!*\
  !*** ./src/client/components/PlayerListCat.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar PlayerListCat = function PlayerListCat(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cats\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"catshead\"\n  }, props.title), props.allTime.map(function (player, index) {\n    if (props.title === \"Rank\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, \"\".concat(index + 1, \". \"));\n    }\n\n    if (props.title === \"Player\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, player.player);\n    }\n\n    if (props.title === \"Lists\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, player.lists);\n    }\n\n    if (props.title === \"Avg.\") {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: player._id,\n        className: \"player-list\"\n      }, player.avg);\n    }\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  if (props.match.path === '/nba') {\n    return {\n      allTime: state.allTime.nba\n    };\n  } else if (props.match.path === '/nhl') {\n    return {\n      allTime: state.allTime.nhl\n    };\n  } else if (props.match.path === '/pga') {\n    return {\n      allTime: state.allTime.pga\n    };\n  } else {\n    return {\n      allTime: state.allTime.nba\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(PlayerListCat)));\n\n//# sourceURL=webpack:///./src/client/components/PlayerListCat.js?");

/***/ }),

/***/ "./src/client/components/TrophyCase.js":
/*!*********************************************!*\
  !*** ./src/client/components/TrophyCase.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar TrophyCase = function TrophyCase(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"trophies\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrophyCase);\n\n//# sourceURL=webpack:///./src/client/components/TrophyCase.js?");

/***/ }),

/***/ "./src/client/pages/CriticPage.js":
/*!****************************************!*\
  !*** ./src/client/pages/CriticPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _components_TrophyCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TrophyCase */ \"./src/client/components/TrophyCase.js\");\n/* harmony import */ var _components_PlayerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PlayerList */ \"./src/client/components/PlayerList.js\");\n/* harmony import */ var _components_CriticContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CriticContainer */ \"./src/client/components/CriticContainer.js\");\n/* harmony import */ var _actions_allTime_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/allTime-actions */ \"./src/client/actions/allTime-actions.js\");\n/* harmony import */ var _actions_critic_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/critic-actions */ \"./src/client/actions/critic-actions.js\");\n\n\n\n\n\n\n\n\nvar CriticPage = function CriticPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TrophyCase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlayerList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CriticContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n};\n\nvar loadData = function loadData(store, path) {\n  return store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNbaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNbaCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNhlAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNhlCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_5__[\"getPgaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_6__[\"getPgaCritic\"])()), store.dispatch(Object(_actions_allTime_actions__WEBPACK_IMPORTED_MODULE_5__[\"getNbaAllTime\"])()), store.dispatch(Object(_actions_critic_actions__WEBPACK_IMPORTED_MODULE_6__[\"getNbaCritic\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  loadData: loadData,\n  component: CriticPage\n});\n\n//# sourceURL=webpack:///./src/client/pages/CriticPage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _criticReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criticReducer */ \"./src/client/reducers/criticReducer.js\");\n/* harmony import */ var _allTimeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allTimeReducer */ \"./src/client/reducers/allTimeReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  critic: _criticReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  allTime: _allTimeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\nvar initialState = {};\nvar middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middleware));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])))));\n  return \"\\n        <html>\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n                <link rel=\\\"icon\\\" href=\\\"data:,\\\">\\n                <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"style.css\\\">\\n                <title>Goat</title>\\n                <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"./images/favicon.ico\\\"/>\\n            </head>\\n            <body>\\n                <div id=\\\"app\\\">\".concat(content, \"</div>\\n                <script>\\n                    window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"\\n                </script>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n        </html>\\n    \");\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {\n//     proxyReqOptDecorator(opts) {\n//         opts.header['x-forwarded-host'] = 'localhost:5000'\n//         return opts\n//     }\n// }))\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(_helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path) : null;\n  });\n  Promise.all(promises).then(function () {\n    res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\n  });\n});\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n}); // https://react-ssr-api.herokuapp.com/\n\n//# sourceURL=webpack:///./src/index.js?");

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