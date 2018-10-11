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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ThemeChange__ = __webpack_require__(10);



new __WEBPACK_IMPORTED_MODULE_0__Navbar__["a" /* default */]().init();
new __WEBPACK_IMPORTED_MODULE_1__ThemeChange__["a" /* default */]().init();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navbar = function () {
  _createClass(Navbar, [{
    key: 'init',
    value: function init() {
      this.domCached();
      this.bindEvents();
    }
  }]);

  function Navbar() {
    _classCallCheck(this, Navbar);

    this.toggleNavMenu = this.toggleNavMenu.bind(this);
  }

  _createClass(Navbar, [{
    key: 'domCached',
    value: function domCached() {
      this.burger = document.getElementById('burger');
      this.navMenu = document.querySelector('div.nav-menu');
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      this.burger.addEventListener('click', this.toggleNavMenu);
    }
  }, {
    key: 'toggleNavMenu',
    value: function toggleNavMenu() {
      if (this.navMenu.classList.contains('d-none')) {
        this.navMenu.classList.remove('d-none');
        this.navMenu.classList.add('d-block');
      } else {
        this.navMenu.classList.remove('d-block');
        this.navMenu.classList.add('d-none');
      }
    }
  }]);

  return Navbar;
}();

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThemeChange = function () {
  _createClass(ThemeChange, [{
    key: "init",
    value: function init() {
      this.domCached();
      this.bindEvents();
      this.settingThemeOnPageLoad();
      console.log('calling from themechange');
    }
  }, {
    key: "settingThemeOnPageLoad",
    value: function settingThemeOnPageLoad() {
      if (localStorage.getItem("theme")) {
        var theme = localStorage.getItem("theme");
        document.body.classList.add(theme);
        switch (theme) {
          case 'dark':
            this.settingActiveClass(this.darkThemeSelector);
            break;
          case 'solarized':
            this.settingActiveClass(this.solarizedThemeSelector);
            break;
        }
      }
    }
  }]);

  function ThemeChange() {
    _classCallCheck(this, ThemeChange);

    this.switchToLight = this.switchToLight.bind(this);
    this.switchToDark = this.switchToDark.bind(this);
    this.switchToSolarized = this.switchToSolarized.bind(this);
  }

  _createClass(ThemeChange, [{
    key: "domCached",
    value: function domCached() {
      this.lightThemeSelector = document.querySelector('.light-theme-selector');
      this.darkThemeSelector = document.querySelector('.dark-theme-selector');
      this.solarizedThemeSelector = document.querySelector('.solarized-theme-selector');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.lightThemeSelector.addEventListener('click', this.switchToLight);
      this.darkThemeSelector.addEventListener('click', this.switchToDark);
      this.solarizedThemeSelector.addEventListener('click', this.switchToSolarized);
    }
  }, {
    key: "settingActiveClass",
    value: function settingActiveClass(activeSelector) {
      this.lightThemeSelector.classList.remove('active');
      this.darkThemeSelector.classList.remove('active');
      this.solarizedThemeSelector.classList.remove('active');
      activeSelector.classList.add('active');
    }
  }, {
    key: "switchToLight",
    value: function switchToLight(e) {
      e.preventDefault();
      document.body.classList.remove('dark');
      document.body.classList.remove('solarized');
      this.settingActiveClass(this.lightThemeSelector);
      localStorage.removeItem("theme");
    }
  }, {
    key: "switchToDark",
    value: function switchToDark(e) {
      e.preventDefault();
      document.body.classList.add("dark");
      document.body.classList.remove("solarized");
      this.settingActiveClass(this.darkThemeSelector);
      localStorage.setItem("theme", "dark");
    }
  }, {
    key: "switchToSolarized",
    value: function switchToSolarized(e) {
      e.preventDefault();
      document.body.classList.add("solarized");
      document.body.classList.remove("dark");
      this.settingActiveClass(this.solarizedThemeSelector);
      localStorage.setItem("theme", "solarized");
    }
  }]);

  return ThemeChange;
}();

/* harmony default export */ __webpack_exports__["a"] = (ThemeChange);

/***/ })
/******/ ]);