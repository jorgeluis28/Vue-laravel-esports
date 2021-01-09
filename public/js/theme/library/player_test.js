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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/player_test.js":
/*!*******************************************!*\
  !*** ./resources/js/theme/player_test.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 - This is jQuery plugin declaration for landing players grid
 - @html: ./html-component/esport_team_landing_players_slider.html
 - @html: ./html-component/esport_championship_players.html
 - @deps: jQuery
 - @using: ./js/main.js
 - @author torbara (https://themeforest.net/user/torbara)
 - */
(function ($, document) {
  "use strict";

  $.fn.players = function () {
    var players = {
      itemWidth: 0,
      hoverItemWidth: 0,
      wrapperWidth: 0,
      items: $(".active .players-wrapper a"),
      itemsCount: 0,
      flag: 0,
      wrapper: $(".players-wrapper"),
      setWrapperWidth: function setWrapperWidth() {
        this.wrapper.css({
          width: this.wrapperWidth + "px"
        });
        return this.wrapperWidth;
      },
      getItemsCount: function getItemsCount() {
        this.itemsCount = this.items.length;
        return this.itemsCount;
      },
      getItemWidth: function getItemWidth() {
        this.itemWidth = this.items.width();
      },
      getWrapperWidth: function getWrapperWidth() {
        this.wrapperWidth = this.itemsCount * this.itemWidth;
        return this.wrapperWidth;
      },
      clickFunction: function clickFunction(param, event) {
        var element = $(param);

        if (element.attr("data-id") === "0") {
          event.preventDefault();
          element.attr("data-id", "1");
        } else {
          element.unbind("click");
          element.attr("data-id", "0");
        }
      },
      dropLinkstate: function dropLinkstate() {
        this.wrapper.css({
          width: "10000px"
        });
        var self = this;

        var x = function x() {
          self.wrapper.css({
            width: self.wrapperWidth + "px"
          });
        };

        setTimeout(x, 500);
        this.items.each(function () {
          $(this).attr("data-id", "0");
        });
      },
      setSmallWrapper: function setSmallWrapper() {
        var b = this.wrapperWidth;
        var width = b + 82;
        this.wrapper.css({
          width: "10000px"
        });
        var self = this;

        var x = function x() {
          self.wrapper.css({
            width: width + "px"
          });
        };

        setTimeout(x, 500);
      },
      init: function init() {
        this.getItemsCount();
        this.getItemWidth();
        this.getWrapperWidth();
        this.setWrapperWidth();
      }
    };
    $(window).on("load", function () {
      $(window).on("resize", function () {
        if ($(window).width() < 1200) {
          players.init();
          $(".players-wrapper").css({
            width: "1140px"
          });
          $(".active .wrap").css("overflow", "auto");
          $(".players-wrapper a").on("click", function (event) {
            players.setSmallWrapper();
            players.clickFunction(this, event);
            $(document).mouseup(function (e) {
              $(".players-wrapper").css({
                width: "11040px"
              });
              var div = $(".active .wrap");

              if (!div.is(e.target) && div.has(e.target).length === 0) {
                players.dropLinkstate();
              }
            });
          });
        } else {
          $(".players-wrapper a").off("click");
          $(".players-wrapper").css("width", "10000px");
          $(".active .wrap").css("overflow", "hidden");
        }
      }).trigger("resize");
    });
  };
})(jQuery, document);

/***/ }),

/***/ 54:
/*!*************************************************!*\
  !*** multi ./resources/js/theme/player_test.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\git_project\metrotech\resources\js\theme\player_test.js */"./resources/js/theme/player_test.js");


/***/ })

/******/ });