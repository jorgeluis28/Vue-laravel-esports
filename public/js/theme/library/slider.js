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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/slider.js":
/*!**************************************!*\
  !*** ./resources/js/theme/slider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This is jQuery plugin declaration slider
 * @html: ./html-component/player_single_wrap.html
 * @deps: jQuery, owl.carousel
 * @using: ./js/main.js
 * @author torbara  (https://themeforest.net/user/torbara)
 */
(function ($, window) {
  "use strict";

  $.fn.teamSlider = function () {
    if ($(this).length === 0) {
      throw new Error('teamRadarGraph: target element not found');
    }

    var self = this;
    var $owl_item = $(this).find('.owl-carousel');

    var resiteItems = function resiteItems() {
      var top = $(self).offset().top;
      var max_height = $(window).height() - top;
      $(self).find(".item").height(max_height);
    };

    $owl_item.on('resized.owl.carousel', resiteItems);
    $owl_item.on('initialized.owl.carousel', resiteItems);
    $owl_item.on('refresh.owl.carousel', resiteItems);
    $owl_item.owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      stagePadding: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1500,
      fluidSpeed: 1
    });
    $(window).on('load', function () {
      $owl_item.trigger('refresh.owl.carousel');
    });
    $(window).on('resize', function () {
      $owl_item.trigger('resize.owl.carousel');
    }); // Animations and navigation

    $(this).find(".right-arrow").first().on('click', function () {
      $owl_item.trigger('next.owl.carousel');
    });
    $(this).find(".left-arrow").first().on('click', function () {
      $owl_item.trigger('prev.owl.carousel');
    });

    var animateBar = function animateBar() {
      $(self).find('.progress-line .bar').stop();
      $(self).find('.progress-line .bar').css({
        'width': '0px'
      });
      $(self).find('.progress-line .bar').animate({
        'width': '100%'
      }, {
        duration: 5000,
        queue: false
      });
    };

    $owl_item.on('changed.owl.carousel', function (event) {
      animateBar();
    });
    animateBar();
  };
})(jQuery, window);

/***/ }),

/***/ 27:
/*!********************************************!*\
  !*** multi ./resources/js/theme/slider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\slider.js */"./resources/js/theme/slider.js");


/***/ })

/******/ });