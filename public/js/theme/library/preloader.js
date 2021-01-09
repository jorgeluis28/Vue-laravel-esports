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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/preloader.js":
/*!*****************************************!*\
  !*** ./resources/js/theme/preloader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This is jQuery plugin declaration for matches-slider html-component
 * Deps: jQuery
 * Using examples: /js/main.js
 * @author torbara  (https://themeforest.net/user/torbara)
 */
(function ($, window) {
  "use strict";

  var PreloaderView = window.teamPreloader = {
    ended: false,
    initialize: function initialize($el) {
      this.$el = $el;
      var self = this;
      $(window).on("load", function () {
        self.end();
      });
      this.width = $(window).width();
      this.$DarkBig = this.$el.find('.dark-big');
      this.$DarkSmall = this.$el.find('.dark-small');
      this.$YellowBig = this.$el.find('.yellow-big');
      this.$YellowNormal = this.$el.find('.yellow-normal');
      this.$YellowSmall1 = this.$el.find('.yellow-small1');
      this.$YellowSmall2 = this.$el.find('.yellow-small2');
      this.start();
    },
    start: function start() {
      if (this.ended) {
        return;
      }

      var self = this;
      setTimeout(function () {//self.end();
      }, 8000);
      this.startPosition();
      this.$YellowBig.animate({
        'right': this.width
      }, 4000, 'linear');
      this.$YellowNormal.animate({
        'right': this.width
      }, 1400, 'linear');
      this.$DarkBig.animate({
        'left': this.width
      }, 4000, 'linear');
      setTimeout(function () {
        self.$DarkSmall.animate({
          'left': self.width
        }, 2000, 'linear');
      }, 600);
      setTimeout(function () {
        self.$YellowSmall1.animate({
          'right': self.width
        }, 800, 'linear');
        self.$YellowSmall2.animate({
          'right': self.width
        }, 900, 'linear');
      }, 350);
      setTimeout(function () {
        self.start();
      }, 4100);
    },
    startPosition: function startPosition() {
      this.$DarkBig.stop();
      this.$DarkSmall.stop();
      this.$YellowBig.stop();
      this.$YellowNormal.stop();
      this.$YellowSmall1.stop();
      this.$YellowSmall2.stop();
      this.$DarkBig.css('left', -this.$DarkBig.outerWidth(true));
      this.$DarkSmall.css('left', -this.$DarkSmall.outerWidth(true));
      this.$YellowBig.css('right', -this.$YellowBig.outerWidth(true));
      this.$YellowNormal.css('right', -this.$YellowNormal.outerWidth(true));
      this.$YellowSmall1.css('right', -this.$YellowSmall1.outerWidth(true));
      this.$YellowSmall2.css('right', -this.$YellowSmall2.outerWidth(true));
    },
    end: function end() {
      var self = this;
      this.ended = true;
      setTimeout(function () {
        self.$el.fadeOut();
        $(window).trigger('preloader.end');
      }, 400);
    }
  };
  PreloaderView.initialize($('.preloader-wrapper'));
})(jQuery, window);

/***/ }),

/***/ 28:
/*!***********************************************!*\
  !*** multi ./resources/js/theme/preloader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\preloader.js */"./resources/js/theme/preloader.js");


/***/ })

/******/ });