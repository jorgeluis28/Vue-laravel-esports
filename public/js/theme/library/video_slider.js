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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/video_slider.js":
/*!********************************************!*\
  !*** ./resources/js/theme/video_slider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 - This is jQuery plugin declaration for latest video slider
 - @html: ./html-component/esport_championship_latest_videos.html
 - @html: ./html-component/esport_team_landing_latest_videos.html
 - @html: ./html-components/sport_championship_latest_videos.html
 - @deps: jQuery
 - @using: ./js/main.js
 - @author torbara (https://themeforest.net/user/torbara)
 - */
(function ($, window) {
  "use strict";

  $.fn.videoslider = function () {
    var slider = {
      state: 0,
      flag: 0,
      video: $(".ifram-wrapper > iframe"),
      elementsCount: 2,
      elements: $(".news-wrapper"),
      elementsHeight: 0,
      totalElements: 0,
      elementsWidth: 300,
      screenWidth: 0,
      getElementsHeight: function getElementsHeight() {
        this.elementsHeight = this.video.height() / this.elementsCount;
        return this.elementsHeight;
      },
      setScreenWidth: function setScreenWidth() {
        var width = $(window).width();
        this.screenWidth = width;
        return this.screenWidth;
      },
      setTotalElements: function setTotalElements() {
        this.totalElements = this.elements.length;
        return this.totalElements;
      },
      addState: function addState() {
        if (this.flag === 0) {
          if (this.state !== this.totalElements - 1) {
            this.state += 1;
          } else {
            this.flag = 1;
          }
        } else if (this.flag === 1) {
          if (this.state !== 0) {
            this.state -= 1;
          } else {
            this.flag = 0;
          }
        }
      },
      init: function init() {
        this.setScreenWidth();
        this.getElementsHeight();
        this.setTotalElements();
      }
    };
    var view = {
      model: slider,
      itemWrapper: $(".video-wrapper .wrapper"),
      itemWidthWrapper: $(".wrapper .width"),
      styleVertical: function styleVertical() {
        if (this.model.screenWidth >= 992) {
          this.itemWrapper.css({
            height: this.model.elementsHeight * this.model.elementsCount + "px",
            "overflow": "hidden"
          });
          this.itemWidthWrapper.css({
            "overflow": "auto",
            width: ""
          });
          this.model.elements.css({
            height: this.model.elementsHeight
          });
        }
      },
      styleHorizontal: function styleHorizontal() {
        if (this.model.screenWidth < 992) {
          this.itemWrapper.css({
            height: "",
            "overflow": ""
          });
          this.itemWidthWrapper.css({
            "width": this.model.elementsWidth * this.model.totalElements + "px"
          });
        }
      },
      animation: function animation() {
        var state = this.model.state;
        this.itemWidthWrapper.animate({
          scrollTop: state * this.model.elementsHeight + "px"
        }, 1600);
      },
      setVideo: function setVideo() {
        this.model.elements.on('click', function () {
          var video = $(this).find("iframe").clone();
          $(".ifram-wrapper iframe").remove();
          $(".ifram-wrapper").append(video);
        });
      },
      init: function init() {
        this.styleHorizontal();
        this.styleVertical();
        this.animation();
        this.setVideo();
      }
    };
    $(window).on("resize", function () {
      slider.init();
      view.init();
    });
    $(window).on("load", function () {
      slider.init();
      view.init();
    });
    slider.init();
    view.init();
    var interval = setInterval(function () {
      slider.addState();
      view.animation();
    }, 3000);
    slider.elements.on("touchstart", function () {
      clearInterval(interval);
    });
    slider.elements.on("mouseenter", function () {
      clearInterval(interval);
    });
  };
})(jQuery, window);

/***/ }),

/***/ 52:
/*!**************************************************!*\
  !*** multi ./resources/js/theme/video_slider.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\video_slider.js */"./resources/js/theme/video_slider.js");


/***/ })

/******/ });