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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/jquery.team-coundown.js":
/*!****************************************************!*\
  !*** ./resources/js/theme/jquery.team-coundown.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This is jQuery plugin declaration for countdowns elements
 * Deps: jQuery
 * Using examples: /js/matches-slider.js
 * @author torbara  (https://themeforest.net/user/torbara)
 */
(function ($) {
  "use strict";

  $.fn.teamCountdown = function () {
    var View = function View(el) {
      this.initialize.apply(this, el);
    };

    View.prototype = {
      initialize: function initialize(el) {
        this.$el = $(el);
        var end = parseInt(this.$el.attr("data-date"));

        if (end < 0 || end < new Date()) {
          this.hideCounters();
          return;
        }

        this.end = end;
      },
      render: function render() {
        var _second = 1000;

        var _minute = _second * 60;

        var _hour = _minute * 60;

        var _day = _hour * 24;

        var timer;
        var self = this;

        function showRemaining() {
          var now = new Date();
          var distance = self.end - now;

          if (distance < 0) {
            clearInterval(timer);
            self.hideCounters();
            return;
          }

          var days = Math.floor(distance / _day);
          var hours = Math.floor(distance % _day / _hour);
          var minutes = Math.floor(distance % _hour / _minute);
          var seconds = Math.floor(distance % _minute / _second);
          self.$el.find('.days').html(days ? days : 0);
          self.$el.find('.hours').html(hours ? hours : 0);
          self.$el.find('.minutes').html(minutes ? minutes : 0);
          self.$el.find('.seconds').html(seconds ? seconds : 0);
        }

        timer = setInterval(showRemaining, 1000);
      }
    };
    return new View(this);
  };
})(jQuery);

/***/ }),

/***/ 14:
/*!**********************************************************!*\
  !*** multi ./resources/js/theme/jquery.team-coundown.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\jquery.team-coundown.js */"./resources/js/theme/jquery.team-coundown.js");


/***/ })

/******/ });