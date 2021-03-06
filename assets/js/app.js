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
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ThemeChange__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FontChange__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TopScroll__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Toc__ = __webpack_require__(13);
// importing component






// instantiating component
// those component is not pure. its modified dom directly
// but I am getting benefit by ::divsion of work::
new __WEBPACK_IMPORTED_MODULE_0__Navbar__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_1__ThemeChange__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_2__FontChange__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_3__TopScroll__["a" /* default */]();
new __WEBPACK_IMPORTED_MODULE_4__Toc__["a" /* default */]();

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
    this.init();
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
    this.init();
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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontChange = function () {
  _createClass(FontChange, [{
    key: "init",
    value: function init() {
      this.domCached();
      this.bindEvents();
      this.settingFontOnPageLoad();
    }
  }, {
    key: "settingFontOnPageLoad",
    value: function settingFontOnPageLoad() {
      if (localStorage.getItem("fontsize")) {
        var fontsize = localStorage.getItem("fontsize");
        document.body.classList.add(fontsize);
        switch (fontsize) {
          case 'large-font':
            this.settingActiveClass(this.largeFontSelector);
            break;
          case 'small-font':
            this.settingActiveClass(this.smallFontSelector);
            break;
        }
      }
    }
  }]);

  function FontChange() {
    _classCallCheck(this, FontChange);

    this.switchToDefault = this.switchToDefault.bind(this);
    this.switchToLarge = this.switchToLarge.bind(this);
    this.switchToSmall = this.switchToSmall.bind(this);
    this.init();
  }

  _createClass(FontChange, [{
    key: "domCached",
    value: function domCached() {
      this.defaultFontSelector = document.querySelector('.default-font-selector');
      this.largeFontSelector = document.querySelector('.large-font-selector');
      this.smallFontSelector = document.querySelector('.small-font-selector');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.defaultFontSelector.addEventListener('click', this.switchToDefault);
      this.largeFontSelector.addEventListener('click', this.switchToLarge);
      this.smallFontSelector.addEventListener('click', this.switchToSmall);
    }
  }, {
    key: "settingActiveClass",
    value: function settingActiveClass(activeSelector) {
      this.defaultFontSelector.classList.remove('active');
      this.smallFontSelector.classList.remove('active');
      this.largeFontSelector.classList.remove('active');
      activeSelector.classList.add('active');
    }
  }, {
    key: "switchToDefault",
    value: function switchToDefault(e) {
      e.preventDefault();
      document.body.classList.remove('large-font');
      document.body.classList.remove('small-font');
      this.settingActiveClass(this.defaultFontSelector);
      localStorage.removeItem("fontsize");
    }
  }, {
    key: "switchToSmall",
    value: function switchToSmall(e) {
      e.preventDefault();
      document.body.classList.add("small-font");
      document.body.classList.remove("large-font");
      this.settingActiveClass(this.smallFontSelector);
      localStorage.setItem("fontsize", "small-font");
    }
  }, {
    key: "switchToLarge",
    value: function switchToLarge(e) {
      e.preventDefault();
      document.body.classList.add("large-font");
      document.body.classList.remove("small-font");
      this.settingActiveClass(this.largeFontSelector);
      localStorage.setItem("fontsize", "large-font");
    }
  }]);

  return FontChange;
}();

/* harmony default export */ __webpack_exports__["a"] = (FontChange);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TopScroll = function () {
  _createClass(TopScroll, [{
    key: 'init',
    value: function init() {
      this.domCached();
      this.bindEvents();
    }
  }]);

  function TopScroll() {
    _classCallCheck(this, TopScroll);

    this.showTopButtonNProgress = this.showTopButtonNProgress.bind(this);
    this.init();
  }

  _createClass(TopScroll, [{
    key: 'domCached',
    value: function domCached() {
      this.topBtn = document.querySelector(".top");
      this.de = document.documentElement;
      this.bd = document.body;
      this.progress = document.querySelector('.progress');
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      if (this.topBtn) {
        this.topBtn.addEventListener('click', function () {
          return window.scrollTo(0, 0);
        });
      }
      document.addEventListener('scroll', this.showTopButtonNProgress, { passive: true });
    }
  }, {
    key: 'debug',
    value: function debug() {
      console.log('this.de.scrollTop', this.de.scrollTop);
      console.log('this.bd.scrollTop', this.bd.scrollTop);
      console.log('this.de.scrollHeight', this.de.scrollHeight);
      console.log('this.bd.scrollHeight', this.bd.scrollHeight);
      console.log('this.de.clientHeight', this.de.clientHeight);
    }
  }, {
    key: 'showTopButtonNProgress',
    value: function showTopButtonNProgress() {
      var scroll = (this.de.scrollTop || this.bd.scrollTop) / ((this.de.scrollHeight || this.bd.scrollHeight) - this.de.clientHeight) * 100;

      this.progress.style.setProperty("--scroll", scroll + '%');

      if (this.topBtn && !this.topBtn.classList.contains("top-active") && window.scrollY >= 1500) {
        this.topBtn.classList.add("top-active");
      } else if (this.topBtn && this.topBtn.classList.contains("top-active") && window.scrollY < 1500) {
        this.topBtn.classList.remove("top-active");
      }
    }
  }]);

  return TopScroll;
}();

/* harmony default export */ __webpack_exports__["a"] = (TopScroll);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toc = function () {
  _createClass(Toc, [{
    key: 'init',
    value: function init() {
      this.domCached();
      this.bindEvents();
    }
  }]);

  function Toc() {
    _classCallCheck(this, Toc);

    this.toggleContent = this.toggleContent.bind(this);
    this.init();
  }

  _createClass(Toc, [{
    key: 'domCached',
    value: function domCached() {
      this.tocSpan = document.getElementById('toc_toggle_span');
      this.tocContent = document.getElementById('toc_content');
    }
  }, {
    key: 'toggleContent',
    value: function toggleContent() {
      if (this.tocContent.classList.contains('d-none')) {
        this.tocContent.classList.remove('d-none');
        this.tocSpan.innerText = '[Hide]';
      } else {
        this.tocContent.classList.add('d-none');
        this.tocSpan.innerText = '[Show]';
      }
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      if (this.tocSpan) {
        this.tocSpan.addEventListener('click', this.toggleContent);
      }
    }
  }]);

  return Toc;
}();

/* harmony default export */ __webpack_exports__["a"] = (Toc);

/***/ })
/******/ ]);