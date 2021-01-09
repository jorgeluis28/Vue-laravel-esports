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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/anchor.js":
/*!**************************************!*\
  !*** ./resources/js/theme/anchor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 - This is jQuery plugin declaration for anchor link scrolling 
 - @html: ./html-component/landing_sport_standings.html
 -        ./html-component/landing_sport_header.html  
 -        ./html-component/landing_sport_main_slider.html
 -        ./html-component/landing_sport_players_slider.html  
 -        ./html-component/landing_sport_main_news.html  
 -        ./html-component/landing_sport_about.html  
 -        ./html-component/landing_sport_twitter_slider.html  
 - @deps: jQuery
 - @using: ./js/main.js
 - @author torbara (https://themeforest.net/user/torbara)
 - */
(function ($, window) {
  "use strict";

  $.fn.anchor = function (time, menu, menuToStyle) {
    var element = $(this);
    var elementId = element.attr("id");
    var menuHeight = 0;

    window.onload = function () {
      menuHeight = $(menu).innerHeight();
      var top = 0;

      var styleMenu = function styleMenu() {
        if ($(menuToStyle).attr("data-id") === "1") {
          $(menuToStyle).addClass('style-menu');
        } else {
          $(menuToStyle).removeClass('style-menu');
        }
      };

      var scrollMenu = function scrollMenu() {
        styleMenu();
        $(menu + " li").each(function () {
          var link = $(this).children();
          var target = link.attr("href");
          var menuH = $(menu).offset().top + $(menu).height() + 1;

          if (menuH >= $(target).offset().top && menuH <= $(target).offset().top + $(target).height() - $(menu).height()) {
            $(menu + " li.active").removeClass("active");
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });
      };

      var animateAnchor = function animateAnchor() {
        $("body,html").animate({
          scrollTop: top
        }, time);
        styleMenu();
      };

      element.on("click", "a", function (event) {
        $(window).off("scroll", scrollMenu);
        $("#" + elementId + " li").removeClass("active");
        event.preventDefault();
        $(".list a").css({
          "pointer-events": "none"
        });
        var id = $(this).attr("href");

        if ($(menuToStyle).css("position") === "relative") {
          top = $(id).offset().top - menuHeight * 2;
        } else {
          top = $(id).offset().top - menuHeight;
        }

        animateAnchor();
        setTimeout(function () {
          $(window).on("scroll", scrollMenu);
          $(".list a").css({
            "pointer-events": "auto"
          });
        }, time);
        $(this).parent().addClass("active");
      });
      $(window).on("scroll", scrollMenu);
      $(window).on("scroll", styleMenu);
    };
  };
})(jQuery, window);

/***/ }),

/***/ 45:
/*!********************************************!*\
  !*** multi ./resources/js/theme/anchor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\anchor.js */"./resources/js/theme/anchor.js");


/***/ })

/******/ });