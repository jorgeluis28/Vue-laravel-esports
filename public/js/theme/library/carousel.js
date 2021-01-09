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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/carousel.js":
/*!****************************************!*\
  !*** ./resources/js/theme/carousel.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 - This is jQuery plugin declaration for main slider
 - @html: ./html-component/esport_championship_main_slider.html
 - @html: ./html-component/sport_championship_main_slider.html
 - @deps: jQuery
 - @using: ./js/main.js
 - @author torbara (https://themeforest.net/user/torbara)
 - */
(function ($, window) {
  "use strict";

  $.fn.slider = function (time) {
    var model = {
      state: 0,
      statelen: 0,
      itemsVertical: $(".item_vertical"),
      itemsHorizontal: $("#horizontal-wrapper .wrapper"),
      itemsHeight: 0,
      itemsWidth: 0,
      getState: function getState() {
        var state = this.state;
        return state;
      },
      addState: function addState() {
        var state = this.state;

        if (state === this.statelen) {
          state = 0;
        } else {
          state += 1;
        }

        this.state = state;
        return state;
      },
      stateMin: function stateMin() {
        var state = this.state;

        if (state === 0) {
          state = this.statelen;
        } else {
          state -= 1;
        }

        this.state = state;
        return state;
      },
      stateLength: function stateLength() {
        var statelen = this.itemsVertical.length;
        this.statelen = statelen - 1;
        return this.statelen;
      },
      setState: function setState() {
        var self = this;
        this.itemsVertical.on("click", function () {
          var state = parseInt($(this).attr("data-id"), 10);
          self.state = state;
          horizontalSlide.slide();
          verticalSlide.slide();
        });
      },
      setItemsWidth: function setItemsWidth() {
        var width = $(".main-slide-post").width();
        this.itemsHorizontal.css({
          width: width
        });
        this.itemsWidth = width;
        return this.itemsWidth;
      },
      setItemsHeight: function setItemsHeight() {
        var height = this.itemsVertical.height();
        this.itemsHeight = height;
        var heightMain = $(".main-slide-post").height();
        this.itemsHorizontal.css({
          height: heightMain
        });
        return this.itemsHeight;
      },
      setRightView: function setRightView() {
        var leftState = this.state * this.itemsWidth;
        var topState = this.state * this.itemsHeight;
        this.itemsHorizontal.css({
          left: -leftState + "px"
        });
        this.itemsVertical.css({
          top: -topState + "px"
        });
      },
      init: function init() {
        this.setState();
        this.stateLength();
        this.setItemsWidth();
        this.setItemsHeight();
      }
    };
    var NavigationView = {
      next: $("a.arrow-right"),
      prev: $("a.arrow-left"),
      modelLink: model,
      init: function init() {
        var self = this;
        this.next.on("click", function (event) {
          event.preventDefault();
          self.modelLink.addState();
          horizontalSlide.slide();
          verticalSlide.slide();
        });
        this.prev.on("click", function (event) {
          event.preventDefault();
          self.modelLink.stateMin();
          horizontalSlide.slide();
          verticalSlide.slide();
        });
      }
    };
    var verticalSlide = {
      modelLink: model,
      slide: function slide() {
        if (this.modelLink.state !== this.modelLink.statelen) {
          var xx = this.modelLink.state * this.modelLink.itemsHeight;
          this.modelLink.itemsVertical.animate({
            top: -xx + "px"
          }, time);
        } else if (this.modelLink.state === this.modelLink.statelen) {
          var b = this.modelLink.state - 1;
          var xt = b * this.modelLink.itemsHeight;
          this.modelLink.itemsVertical.animate({
            top: -xt + "px"
          }, time);
        }
      }
    };
    var horizontalSlide = {
      modelLink: model,
      slide: function slide() {
        var xx = this.modelLink.state * this.modelLink.itemsWidth;
        this.modelLink.itemsHorizontal.animate({
          left: -xx + "px"
        }, time);
      }
    };
    $(window).on("resize", function () {
      model.setItemsHeight();
      model.setItemsWidth();
      model.setState();
      model.setRightView();
    });
    model.init();
    NavigationView.init();
    var timer = setInterval(function sliderInterval() {
      var span = $(".timeline >span");
      span.animate({
        width: "100%"
      }, 4800, function () {
        span.css({
          width: "0%"
        });
        NavigationView.next.trigger('click');
      });
    }, 6000);
  };
})(jQuery, window);

/***/ }),

/***/ 51:
/*!**********************************************!*\
  !*** multi ./resources/js/theme/carousel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\carousel.js */"./resources/js/theme/carousel.js");


/***/ })

/******/ });