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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/main-club-gallery.js":
/*!*************************************************!*\
  !*** ./resources/js/theme/main-club-gallery.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This is jQuery plugin declaration for main_club_gallery html-component
 * @html: ./html-component/main_club_gallery.html
 * @deps: jQuery, owl.carousel, isotope, imagesloaded
 * @using: ./js/main.js
 * @author torbara  (https://themeforest.net/user/torbara)
 */
(function ($) {
  "use strict";

  $.fn.mainClubGallery = function () {
    var $el = $(this);

    if ($el.length === 0) {
      throw new Error('mainClubGallery: target element not found');
    }

    var owl = $el.find('.owl-carousel');

    var init_owl = function init_owl(owl) {
      var owl_init = $(owl).owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoHeight: true,
        responsive: {
          0: {
            items: 1
          },
          767: {
            items: 1
          },
          992: {
            items: 1
          },
          1400: {
            items: 1
          }
        }
      });
      $el.find(".custom-next-btn").first().on('click', function () {
        owl_init.trigger('next.owl.carousel');
      });
      $el.find(".custom-prev-btn").first().on('click', function () {
        owl_init.trigger('prev.owl.carousel');
      });
    };

    var init_isotop = function init_isotop(grid, owl) {
      $(grid).isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });
      $(owl).trigger('refresh.owl.carousel');
    };

    $(owl).imagesLoaded().done(function () {
      init_owl(owl);
      $(owl).find('.isotope-grid').each(function () {
        init_isotop(this, owl);
      });
    });
  };
})(jQuery);

/***/ }),

/***/ 20:
/*!*******************************************************!*\
  !*** multi ./resources/js/theme/main-club-gallery.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\main-club-gallery.js */"./resources/js/theme/main-club-gallery.js");


/***/ })

/******/ });