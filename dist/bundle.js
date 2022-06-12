/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".colors {\n  color: #222831, #222831, #00ADB5, #EEEEEE;\n}\n\nbody{\nfont-family: 'Noto Sans', sans-serif;;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  background-color: #222831;\n  height: 100px;\n  font-size: 70px;\n  color: #EEEEEE;\n  padding: 0px 0px 0px 28px;\n}\n\n.main {\n  background-color: #EEEEEE;\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n  min-height: 700px;\n}\n\n.sidebar{\n  border: 1px solid black;\n}\n\n.side-icons {\n  height: 30px;\n}\n\n.static-bar {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 20px;\n  margin-top: 30px;\n  gap: 10px;\n\n}\n.static-line {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.projects-bar {\n  display: flex;\n  margin-top: 40px;\n  padding: 0px 20px;\n  flex-direction: column;\n}\n\n.projects-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.projects {\n  margin-left: 10px;\n}\n\n.footer {\n  background-color: #222831;\n  padding: 30px;\n}\n\n.project-title {\n  font-size: 30px;\n  font-weight: bold;\n  margin: 20px;\n}\n\n.add-task {\n  margin: 10px 20px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 18px;\n  cursor: pointer;\n  min-width: fit-content;\n  width: 200px;\n}\n\n.plus-sign {\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.task-form {\n  margin: 10px 5px 0px 30px;\n  width: 350px;\n  height: 20px;\n  box-shadow: 2px 2px 1em rgb(207, 207, 207);\n}\n\n.submit-button {\n  height: 25px;\n  font-weight: bold;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 0px 0px 50px;\n  gap: 10px;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: #969696 1px solid;\n  min-width: fit-content;\n  width: 70%;\n  padding-bottom: 10px;\n}\n\n.checkbox {\n  border-radius: 50%;\n  border: 1px black solid;\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\n\n.priority-container {\n  display: flex;\n  font-size: 22px;\n  gap: 5px;\n  border: 1px solid #6b6a6a;\n  align-items: center;\n  padding: 5px;\n}\n\n.red-priority, .green-priority, .yellow-priority {\n  font-family: 'Alfa Slab One', cursive;\n  color: #EEEEEE; \n  -webkit-text-stroke: 1px rgb(114, 113, 113);\n  padding: 0px 6px;\n  cursor: pointer;\n}\n\n.red-priority.active {\n  color: red;\n}\n\n.yellow-priority.active {\n  color: rgb(206, 206, 21);\n}\n\n.green-priority.active {\n  color: green;\n}\n\n.priority-text {\n  align-self: center;\n  font-size: 12px;\n  color: #6b6a6a;\n}\n\n.calendar {\n  margin-left: auto;\n}\n\n.project-image {\n  height: 18px;\n}\n\n.project-line {\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  gap: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-project {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n.project-line.highlight {\n  background-color: #dad8d8;\n}\n\n.remove-button {\n  margin-left: auto;\n  margin-right: 5px;\n  font-weight: bold;\n  border-radius: 50%;\n  padding: 0px 5px;\n  cursor: not-allowed;\n  display: none;\n}\n\n.remove-button.show {\n  display: inline;\n}\n\n.project-page-header {\n  display: flex;\n  align-items: center;\n  width: 70%;\n}\n\n.sort-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-left: auto;\n}\n\n.sort-button {\n  padding: 7px 3px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;AAC3C;;AAEA;AACA,oCAAoC;AACpC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;;AAEX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gCAAgC;EAChC,sBAAsB;EACtB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,cAAc;EACd,2CAA2C;EAC3C,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,QAAQ;EACR,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".colors {\n  color: #222831, #222831, #00ADB5, #EEEEEE;\n}\n\nbody{\nfont-family: 'Noto Sans', sans-serif;;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  background-color: #222831;\n  height: 100px;\n  font-size: 70px;\n  color: #EEEEEE;\n  padding: 0px 0px 0px 28px;\n}\n\n.main {\n  background-color: #EEEEEE;\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n  min-height: 700px;\n}\n\n.sidebar{\n  border: 1px solid black;\n}\n\n.side-icons {\n  height: 30px;\n}\n\n.static-bar {\n  display: flex;\n  flex-direction: column;\n  padding: 0px 20px;\n  margin-top: 30px;\n  gap: 10px;\n\n}\n.static-line {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.projects-bar {\n  display: flex;\n  margin-top: 40px;\n  padding: 0px 20px;\n  flex-direction: column;\n}\n\n.projects-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.projects {\n  margin-left: 10px;\n}\n\n.footer {\n  background-color: #222831;\n  padding: 30px;\n}\n\n.project-title {\n  font-size: 30px;\n  font-weight: bold;\n  margin: 20px;\n}\n\n.add-task {\n  margin: 10px 20px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 18px;\n  cursor: pointer;\n  min-width: fit-content;\n  width: 200px;\n}\n\n.plus-sign {\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.task-form {\n  margin: 10px 5px 0px 30px;\n  width: 350px;\n  height: 20px;\n  box-shadow: 2px 2px 1em rgb(207, 207, 207);\n}\n\n.submit-button {\n  height: 25px;\n  font-weight: bold;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0px 0px 0px 50px;\n  gap: 10px;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: #969696 1px solid;\n  min-width: fit-content;\n  width: 70%;\n  padding-bottom: 10px;\n}\n\n.checkbox {\n  border-radius: 50%;\n  border: 1px black solid;\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\n\n.priority-container {\n  display: flex;\n  font-size: 22px;\n  gap: 5px;\n  border: 1px solid #6b6a6a;\n  align-items: center;\n  padding: 5px;\n}\n\n.red-priority, .green-priority, .yellow-priority {\n  font-family: 'Alfa Slab One', cursive;\n  color: #EEEEEE; \n  -webkit-text-stroke: 1px rgb(114, 113, 113);\n  padding: 0px 6px;\n  cursor: pointer;\n}\n\n.red-priority.active {\n  color: red;\n}\n\n.yellow-priority.active {\n  color: rgb(206, 206, 21);\n}\n\n.green-priority.active {\n  color: green;\n}\n\n.priority-text {\n  align-self: center;\n  font-size: 12px;\n  color: #6b6a6a;\n}\n\n.calendar {\n  margin-left: auto;\n}\n\n.project-image {\n  height: 18px;\n}\n\n.project-line {\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  gap: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-project {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n.project-line.highlight {\n  background-color: #dad8d8;\n}\n\n.remove-button {\n  margin-left: auto;\n  margin-right: 5px;\n  font-weight: bold;\n  border-radius: 50%;\n  padding: 0px 5px;\n  cursor: not-allowed;\n  display: none;\n}\n\n.remove-button.show {\n  display: inline;\n}\n\n.project-page-header {\n  display: flex;\n  align-items: center;\n  width: 70%;\n}\n\n.sort-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-left: auto;\n}\n\n.sort-button {\n  padding: 7px 3px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-buttons.js":
/*!****************************!*\
  !*** ./src/add-buttons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectPlusSign": () => (/* binding */ addProjectPlusSign),
/* harmony export */   "projectsBar": () => (/* binding */ projectsBar),
/* harmony export */   "projectsContainer": () => (/* binding */ projectsContainer),
/* harmony export */   "tasksDinamicContainer": () => (/* binding */ tasksDinamicContainer)
/* harmony export */ });
/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elements */ "./src/create-elements.js");


let tasksDinamicContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "tasks-container", "", "");

let projectsBar = document.querySelector(".projects");
let projectsContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "projects-container", "", "");
let addProjectPlusSign = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
  "div",
  "add-project",
  "",
  "<span class='plus-sign'>+</span> Add Project"
);




/***/ }),

/***/ "./src/create-elements.js":
/*!********************************!*\
  !*** ./src/create-elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "loadImage": () => (/* binding */ loadImage)
/* harmony export */ });
function createElement(type, className, id, text) {
  let element = document.createElement(type);
  element.classList.add(className);
  element.setAttribute("id", id);
  element.innerHTML = text;

  return element;
}

function loadImage(icon, className) {
  const myIcon = new Image();
  myIcon.src = icon;
  myIcon.classList.add(className);
  return myIcon;
}




/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "allTasksStatic": () => (/* binding */ allTasksStatic),
/* harmony export */   "inboxStatic": () => (/* binding */ inboxStatic),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "todayStatic": () => (/* binding */ todayStatic)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


class Project {
  constructor(title) {
    this.title = title;
    this.tasksList = [];
  }
  deleteProject() {
    projects = projects.filter((el) => {
      return el != this;
    });
  }
}

let projects = [];
if (
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)("localStorage") &&
  localStorage.getItem("projects") != null
) {
  let projects2 = JSON.parse(localStorage.getItem("projects"));
  projects2.forEach((proj) => {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.parseRefJSON)(proj);
    //let newProject = new Project(proj.title);
    //newProject.tasksList = proj.tasksList;
    // projects.push(newProject);
  });
}

class Task {
  constructor(title, dueDate, priority, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
  finishTask() {
    allTasksStatic.tasksList = allTasksStatic.tasksList.filter((el) => {
      return el != this;
    });
    this.project.tasksList = this.project.tasksList.filter((el) => {
      return el != this;
    });
  }

  changeProject(newProject) {
    this.project.tasksList = this.project.tasksList.filter((el) => {
      return el != this;
    }); //filtered array that returns all values that are different from this object
    newProject = projects.find((element) => {
      return element.title == newProject;
    });
    newProject.tasksList.push(this);
    this.project = newProject;
  }
}

let inboxStatic = new Project("Inbox");
projects.push(inboxStatic);
let todayStatic = new Project("Today");
let allTasksStatic = new Project("All Tasks");

let priorities = ["red", "yellow", "green", ""];




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContent": () => (/* binding */ mainContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-page */ "./src/project-page.js");
/* harmony import */ var _add_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-buttons */ "./src/add-buttons.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _projects_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-bar */ "./src/projects-bar.js");






let mainContent = document.querySelector(".main-content");
let inboxButton = document.querySelector("#inbox");
let todayButton = document.querySelector("#today");
let allTasksButton = document.querySelector("#all-tasks");

inboxButton.addEventListener("click", () => {
  (0,_project_page__WEBPACK_IMPORTED_MODULE_1__.createProjectPage)(mainContent, _create_todo__WEBPACK_IMPORTED_MODULE_3__.inboxStatic, _add_buttons__WEBPACK_IMPORTED_MODULE_2__.tasksDinamicContainer);
});

todayButton.addEventListener("click", () => {
  (0,_project_page__WEBPACK_IMPORTED_MODULE_1__.createTodayPage)(mainContent, _add_buttons__WEBPACK_IMPORTED_MODULE_2__.tasksDinamicContainer);
});

allTasksButton.addEventListener("click", () => {
  (0,_project_page__WEBPACK_IMPORTED_MODULE_1__.createNoButtonPage)(mainContent, _create_todo__WEBPACK_IMPORTED_MODULE_3__.allTasksStatic, _add_buttons__WEBPACK_IMPORTED_MODULE_2__.tasksDinamicContainer);
});

(0,_project_page__WEBPACK_IMPORTED_MODULE_1__.createProjectPage)(mainContent, _create_todo__WEBPACK_IMPORTED_MODULE_3__.inboxStatic, _add_buttons__WEBPACK_IMPORTED_MODULE_2__.tasksDinamicContainer);
(0,_projects_bar__WEBPACK_IMPORTED_MODULE_4__.createProjectBar)(_add_buttons__WEBPACK_IMPORTED_MODULE_2__.projectsBar, _add_buttons__WEBPACK_IMPORTED_MODULE_2__.projectsContainer, _add_buttons__WEBPACK_IMPORTED_MODULE_2__.addProjectPlusSign);




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseRefJSON": () => (/* binding */ parseRefJSON),
/* harmony export */   "refReplacer": () => (/* binding */ refReplacer),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function refReplacer() {
  let m = new Map(),
    v = new Map(),
    init = null;

  return function (field, value) {
    let p = m.get(this) + (Array.isArray(this) ? `[${field}]` : "." + field);
    let isComplex = value === Object(value);

    if (isComplex) m.set(value, p);

    let pp = v.get(value) || "";
    let path = p.replace(/undefined\.\.?/, "");
    let val = pp ? `#REF:${pp[0] == "[" ? "$" : "$."}${pp}` : value;

    !init ? (init = value) : val === init ? (val = "#REF:$") : 0;
    if (!pp && isComplex) v.set(value, path);

    return val;
  };
}

function parseRefJSON(json) {
  let objToPath = new Map();
  let pathToObj = new Map();
  let o = JSON.parse(json);

  let traverse = (parent, field) => {
    let obj = parent;
    let path = "#REF:$";

    if (field !== undefined) {
      obj = parent[field];
      path =
        objToPath.get(parent) +
        (Array.isArray(parent) ? `[${field}]` : `${field ? "." + field : ""}`);
    }

    objToPath.set(obj, path);
    pathToObj.set(path, obj);

    let ref = pathToObj.get(obj);
    if (ref) parent[field] = ref;

    for (let f in obj) if (obj === Object(obj)) traverse(obj, f);
  };

  traverse(o);
  return o;
}




/***/ }),

/***/ "./src/project-page.js":
/*!*****************************!*\
  !*** ./src/project-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNoButtonPage": () => (/* binding */ createNoButtonPage),
/* harmony export */   "createProjectPage": () => (/* binding */ createProjectPage),
/* harmony export */   "createTodayPage": () => (/* binding */ createTodayPage),
/* harmony export */   "printTask": () => (/* binding */ printTask)
/* harmony export */ });
/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-elements */ "./src/create-elements.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");




function clearPage(location, dinamicContainer) {
  while (location.lastElementChild) {
    location.removeChild(location.lastElementChild);
  }
  while (dinamicContainer.lastElementChild) {
    dinamicContainer.removeChild(dinamicContainer.lastElementChild);
  }
}

function createTitle(location, project, dinamicContainer) {
  let projectPageHeader = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "project-page-header", "", "");
  let projectTitle = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "project-title", "", project.title);
  location.appendChild(projectPageHeader);
  projectPageHeader.appendChild(projectTitle);
  let sortContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "sort-container", "", "");
  projectPageHeader.appendChild(sortContainer);
  let sortText = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "sort-text", "", "Sort by:");
  sortContainer.appendChild(sortText);
  let dateSort = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "sort-button", "", "Due Date");
  let prioritySort = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "sort-button", "", "Priority");
  sortContainer.appendChild(dateSort);
  sortContainer.appendChild(prioritySort);

  dateSort.addEventListener("click", () => {
    sortPage(project, location, dinamicContainer, "Due Date");
  });

  prioritySort.addEventListener("click", () => {
    sortPage(project, location, dinamicContainer, "Priority");
  });
}

function createAddButton(location, dinamicContainer, project) {
  let plusSignButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "div",
    "add-task",
    "",
    "<span class='plus-sign'>+</span> Add Task"
  );
  location.appendChild(dinamicContainer);
  location.appendChild(plusSignButton);
  plusSignButton.addEventListener("click", () => {
    createTaskForm(location, plusSignButton, project, dinamicContainer);
  });
}

function createTaskForm(
  mainContainer,
  plusSignButton,
  project,
  dinamicContainer
) {
  let taskForm = document.createElement("input");
  let addFormButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "submit-button", "", "Add");
  taskForm.setAttribute("type", "text");
  taskForm.setAttribute("placeholder", "Type your task here");
  taskForm.classList.add("task-form");
  mainContainer.appendChild(taskForm);
  mainContainer.removeChild(plusSignButton);
  mainContainer.appendChild(addFormButton);
  addFormButton.addEventListener("click", () => {
    setupTaskContainer(
      project,
      mainContainer,
      taskForm,
      addFormButton,
      plusSignButton,
      dinamicContainer
    );
  });
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskForm.value != "") {
      setupTaskContainer(
        project,
        mainContainer,
        taskForm,
        addFormButton,
        plusSignButton,
        dinamicContainer
      );
    }
  });
}

function setupTaskContainer(
  project,
  mainContainer,
  taskForm,
  addFormButton,
  plusSignButton,
  dinamicContainer
) {
  if (taskForm.value != "") {
    let newTask = new _create_todo__WEBPACK_IMPORTED_MODULE_1__.Task(taskForm.value, "", "", project);
    project.tasksList.push(newTask);
    _create_todo__WEBPACK_IMPORTED_MODULE_1__.allTasksStatic.tasksList.push(newTask);
    mainContainer.removeChild(addFormButton);
    mainContainer.removeChild(taskForm);
    taskForm.value = "";
    mainContainer.appendChild(plusSignButton);
    printTask(newTask, dinamicContainer);
  }
}

function printTask(task, dinamicContainer) {
  let newTaskLine = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "task", task.title + "line", "");
  dinamicContainer.appendChild(newTaskLine);
  let checkbox = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "checkbox", task.title + "checkbox", "");
  newTaskLine.appendChild(checkbox);
  let taskTitle = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "div",
    "task-title",
    task.title + "title",
    task.title
  );
  newTaskLine.appendChild(taskTitle);
  checkbox.addEventListener("click", () => {
    dinamicContainer.removeChild(newTaskLine);
    task.finishTask();
  });
  let calendar = document.createElement("input");
  calendar.setAttribute("type", "date");
  calendar.classList.add("calendar");
  calendar.value = task.dueDate;
  calendar.addEventListener("change", () => {
    task.dueDate = calendar.value;
  });
  newTaskLine.appendChild(calendar);
  let priorityContainer = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "priority-container", "", "");
  newTaskLine.appendChild(priorityContainer);
  let priorityText = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "priority-text", "", "priority:");
  let redPriority = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "red-priority", "", "!");
  let yellowPriority = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "yellow-priority", "", "!");
  let greenPriority = (0,_create_elements__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "green-priority", "", "!");
  priorityContainer.appendChild(priorityText);
  priorityContainer.appendChild(redPriority);
  priorityContainer.appendChild(yellowPriority);
  priorityContainer.appendChild(greenPriority);
  priorityFlow(task, redPriority, yellowPriority, greenPriority);
  let projectDrop = document.createElement("select");
  _create_todo__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element.title;
    option.value = element.title;
    projectDrop.appendChild(option);
  });
  projectDrop.value = task.project.title;
  newTaskLine.appendChild(projectDrop);
  projectDrop.addEventListener("change", () => {
    task.changeProject(projectDrop.value);
  });
}

function priorityFlow(task, redPriority, yellowPriority, greenPriority) {
  if (task.priority == "red") {
    colorPriority(task, "red", redPriority, yellowPriority, greenPriority);
  } else if (task.priority == "yellow") {
    colorPriority(task, "yellow", yellowPriority, redPriority, greenPriority);
  } else if (task.priority == "green") {
    colorPriority(task, "green", greenPriority, yellowPriority, redPriority);
  }
  redPriority.addEventListener("click", () => {
    if (task.priority == "red") {
      task.priority = "";
      redPriority.classList.remove("active");
    } else {
      colorPriority(task, "red", redPriority, yellowPriority, greenPriority);
    }
  });
  yellowPriority.addEventListener("click", () => {
    if (task.priority == "yellow") {
      task.priority = "";
      yellowPriority.classList.remove("active");
    } else {
      colorPriority(task, "yellow", yellowPriority, redPriority, greenPriority);
    }
  });
  greenPriority.addEventListener("click", () => {
    if (task.priority == "green") {
      task.priority = "";
      greenPriority.classList.remove("active");
    } else {
      colorPriority(task, "green", greenPriority, yellowPriority, redPriority);
    }
  });
}

function colorPriority(
  task,
  color,
  clickedPriority,
  otherPriority,
  otherPriority2
) {
  task.priority = color;
  clickedPriority.classList.add("active");
  otherPriority.classList.remove("active");
  otherPriority2.classList.remove("active");
}

function createProjectPage(location, project, dinamicContainer) {
  clearPage(location, dinamicContainer);
  createTitle(location, project, dinamicContainer);
  createAddButton(location, dinamicContainer, project);
  project.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function createNoButtonPage(location, project, dinamicContainer) {
  clearPage(location, dinamicContainer);
  createTitle(location, project, dinamicContainer);
  location.appendChild(dinamicContainer);
  project.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function createTodayPage(location, dinamicContainer) {
  let today = new _create_todo__WEBPACK_IMPORTED_MODULE_1__.Project("Today");
  clearPage(location, dinamicContainer);
  createTitle(location, today, dinamicContainer);
  location.appendChild(dinamicContainer);
  today.tasksList = _create_todo__WEBPACK_IMPORTED_MODULE_1__.allTasksStatic.tasksList.filter((task) => {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.dueDate, 1));
  });
  today.tasksList.forEach((task) => {
    printTask(task, dinamicContainer);
  });
}

function sortPage(project, location, dinamicContainer, sortType) {
  clearPage(location, dinamicContainer);
  createTitle(location, project, dinamicContainer);
  location.appendChild(dinamicContainer);
  if (sortType == "Due Date") {
    project.tasksList.sort(function (a, b) {
      if (a.dueDate == "") return 1;
      else if (b.dueDate == "") return -1;
      else return Date.parse(a.dueDate) - Date.parse(b.dueDate);
    });
    project.tasksList.forEach((task) => {
      printTask(task, dinamicContainer);
    });
    createAddButton(location, dinamicContainer, project);
  } else if (sortType == "Priority") {
    project.tasksList.sort(function (a, b) {
      return _create_todo__WEBPACK_IMPORTED_MODULE_1__.priorities.indexOf(a.priority) - _create_todo__WEBPACK_IMPORTED_MODULE_1__.priorities.indexOf(b.priority);
    });
    project.tasksList.forEach((task) => {
      printTask(task, dinamicContainer);
    });
    createAddButton(location, dinamicContainer, project);
  }
}




/***/ }),

/***/ "./src/projects-bar.js":
/*!*****************************!*\
  !*** ./src/projects-bar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectBar": () => (/* binding */ createProjectBar)
/* harmony export */ });
/* harmony import */ var _add_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-buttons */ "./src/add-buttons.js");
/* harmony import */ var _create_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-elements */ "./src/create-elements.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-page */ "./src/project-page.js");
/* harmony import */ var _project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.svg */ "./src/project.svg");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");








function createAddProjectButton(location, dinamicContainer, plusSignButton) {
  location.appendChild(dinamicContainer);
  location.appendChild(plusSignButton);
  plusSignButton.addEventListener("click", () => {
    createProjectForm(location, plusSignButton, dinamicContainer);
  });
}

function createProjectForm(mainContainer, plusSignButton, dinamicContainer) {
  let projectForm = document.createElement("input");
  let addFormButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", "project-button", "", "Add");
  projectForm.setAttribute("type", "text");
  projectForm.setAttribute("placeholder", "Project name");
  projectForm.classList.add("project-form");
  mainContainer.appendChild(projectForm);
  mainContainer.removeChild(plusSignButton);
  mainContainer.appendChild(addFormButton);
  addFormButton.addEventListener("click", () => {
    setupProjectContainer(
      projectForm.value,
      mainContainer,
      addFormButton,
      projectForm,
      plusSignButton,
      dinamicContainer
    );
  });
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && projectForm.value != "") {
      setupProjectContainer(
        projectForm.value,
        mainContainer,
        addFormButton,
        projectForm,
        plusSignButton,
        dinamicContainer
      );
    }
  });
}

function setupProjectContainer(
  title,
  mainContainer,
  addFormButton,
  projectForm,
  plusSignButton,
  dinamicContainer
) {
  if (projectForm.value != "") {
    let newProject = new _create_todo__WEBPACK_IMPORTED_MODULE_2__.Project(title);
    _create_todo__WEBPACK_IMPORTED_MODULE_2__.projects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(_create_todo__WEBPACK_IMPORTED_MODULE_2__.projects, (0,_localStorage__WEBPACK_IMPORTED_MODULE_6__.refReplacer)()));
    mainContainer.removeChild(addFormButton);
    mainContainer.removeChild(projectForm);
    mainContainer.appendChild(plusSignButton);
    projectForm.value = "";
    printProject(newProject, dinamicContainer);
  }
}

function printProject(project, dinamicContainer) {
  let newProjectLine = (0,_create_elements__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "project-line", "", "");
  dinamicContainer.appendChild(newProjectLine);
  newProjectLine.appendChild((0,_create_elements__WEBPACK_IMPORTED_MODULE_1__.loadImage)(_project_svg__WEBPACK_IMPORTED_MODULE_4__, "project-image"));
  let projectTitle = (0,_create_elements__WEBPACK_IMPORTED_MODULE_1__.createElement)(
    "div",
    "project-title-bar",
    "",
    project.title
  );
  newProjectLine.appendChild(projectTitle);

  newProjectLine.addEventListener("click", () => {
    (0,_project_page__WEBPACK_IMPORTED_MODULE_3__.createProjectPage)(_index__WEBPACK_IMPORTED_MODULE_5__.mainContent, project, _add_buttons__WEBPACK_IMPORTED_MODULE_0__.tasksDinamicContainer);
  });

  let removeButton = (0,_create_elements__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "remove-button", "", "x");
  newProjectLine.appendChild(removeButton);
  newProjectLine.addEventListener("mouseenter", () => {
    highlight(true, newProjectLine, removeButton);
  });
  newProjectLine.addEventListener("mouseleave", () => {
    highlight(false, newProjectLine, removeButton);
  });
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    dinamicContainer.removeChild(newProjectLine);
    project.deleteProject();
    (0,_project_page__WEBPACK_IMPORTED_MODULE_3__.createProjectPage)(_index__WEBPACK_IMPORTED_MODULE_5__.mainContent, _create_todo__WEBPACK_IMPORTED_MODULE_2__.inboxStatic, _add_buttons__WEBPACK_IMPORTED_MODULE_0__.tasksDinamicContainer);
    project.tasksList.forEach((task) => {
      _create_todo__WEBPACK_IMPORTED_MODULE_2__.allTasksStatic.tasksList = _create_todo__WEBPACK_IMPORTED_MODULE_2__.allTasksStatic.tasksList.filter((el) => {
        return el != task;
      });
    });
    project.tasksList = [];
  });
}

function highlight(add, line, removeButton) {
  if (add) {
    line.classList.add("highlight");
    removeButton.classList.add("show");
  } else {
    line.classList.remove("highlight");
    removeButton.classList.remove("show");
  }
}

function createProjectBar(location, dinamicContainer, plusSignButton) {
  createAddProjectButton(location, dinamicContainer, plusSignButton);
  console.log(_create_todo__WEBPACK_IMPORTED_MODULE_2__.projects);
  _create_todo__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
    if (project.title == "Inbox") {
    } else printProject(project, dinamicContainer);
  });
}




/***/ }),

/***/ "./src/project.svg":
/*!*************************!*\
  !*** ./src/project.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51b36497f1c1ec983a19.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC1idXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbG9ycyB7XFxuICBjb2xvcjogIzIyMjgzMSwgIzIyMjgzMSwgIzAwQURCNSwgI0VFRUVFRTtcXG59XFxuXFxuYm9keXtcXG5mb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBjb2xvcjogI0VFRUVFRTtcXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDI4cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaWRlLWljb25zIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnN0YXRpYy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBnYXA6IDEwcHg7XFxuXFxufVxcbi5zdGF0aWMtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5wbHVzLXNpZ24ge1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgbWFyZ2luOiAxMHB4IDVweCAwcHggMzBweDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMWVtIHJnYigyMDcsIDIwNywgMjA3KTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDBweCAwcHggMHB4IDUwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogIzk2OTY5NiAxcHggc29saWQ7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZ2FwOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmI2YTZhO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnJlZC1wcmlvcml0eSwgLmdyZWVuLXByaW9yaXR5LCAueWVsbG93LXByaW9yaXR5IHtcXG4gIGZvbnQtZmFtaWx5OiAnQWxmYSBTbGFiIE9uZScsIGN1cnNpdmU7XFxuICBjb2xvcjogI0VFRUVFRTsgXFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDExNCwgMTEzLCAxMTMpO1xcbiAgcGFkZGluZzogMHB4IDZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlZC1wcmlvcml0eS5hY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnllbGxvdy1wcmlvcml0eS5hY3RpdmUge1xcbiAgY29sb3I6IHJnYigyMDYsIDIwNiwgMjEpO1xcbn1cXG5cXG4uZ3JlZW4tcHJpb3JpdHkuYWN0aXZlIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnByaW9yaXR5LXRleHQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM2YjZhNmE7XFxufVxcblxcbi5jYWxlbmRhciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgZ2FwOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbGluZS5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZDhkODtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVtb3ZlLWJ1dHRvbi5zaG93IHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLnByb2plY3QtcGFnZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uc29ydC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc29ydC1idXR0b24ge1xcbiAgcGFkZGluZzogN3B4IDNweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixTQUFTOztBQUVYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb2xvcnMge1xcbiAgY29sb3I6ICMyMjI4MzEsICMyMjI4MzEsICMwMEFEQjUsICNFRUVFRUU7XFxufVxcblxcbmJvZHl7XFxuZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmOztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbiAgY29sb3I6ICNFRUVFRUU7XFxuICBwYWRkaW5nOiAwcHggMHB4IDBweCAyOHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2lkZS1pY29ucyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5zdGF0aWMtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZ2FwOiAxMHB4O1xcblxcbn1cXG4uc3RhdGljLWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucGx1cy1zaWduIHtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIG1hcmdpbjogMTBweCA1cHggMHB4IDMwcHg7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDFlbSByZ2IoMjA3LCAyMDcsIDIwNyk7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1ib3R0b206ICM5Njk2OTYgMXB4IHNvbGlkO1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGdhcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZiNmE2YTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5yZWQtcHJpb3JpdHksIC5ncmVlbi1wcmlvcml0eSwgLnllbGxvdy1wcmlvcml0eSB7XFxuICBmb250LWZhbWlseTogJ0FsZmEgU2xhYiBPbmUnLCBjdXJzaXZlO1xcbiAgY29sb3I6ICNFRUVFRUU7IFxcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHJnYigxMTQsIDExMywgMTEzKTtcXG4gIHBhZGRpbmc6IDBweCA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWQtcHJpb3JpdHkuYWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi55ZWxsb3ctcHJpb3JpdHkuYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2IoMjA2LCAyMDYsIDIxKTtcXG59XFxuXFxuLmdyZWVuLXByaW9yaXR5LmFjdGl2ZSB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcmlvcml0eS10ZXh0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNmI2YTZhO1xcbn1cXG5cXG4uY2FsZW5kYXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWltYWdlIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuXFxuLnByb2plY3QtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGdhcDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWxpbmUuaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWQ4ZDg7XFxufVxcblxcbi5yZW1vdmUtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDBweCA1cHg7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJlbW92ZS1idXR0b24uc2hvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5wcm9qZWN0LXBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnNvcnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNvcnQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweCAzcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDsiLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgcHJldmlvdXMgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbiB3YXMgcmVuYW1lZCB0byBgcGFyc2VJU09gLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIHBhcnNlKCcyMDE2LTAxLTAxJylcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgcGFyc2VJU08oJzIwMTYtMDEtMDEnKVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IHZhbGlkYXRlcyBzZXBhcmF0ZSBkYXRlIGFuZCB0aW1lIHZhbHVlcyBpbiBJU08tODYwMSBzdHJpbmdzXG4gKiAgIGFuZCByZXR1cm5zIGBJbnZhbGlkIERhdGVgIGlmIHRoZSBkYXRlIGlzIGludmFsaWQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIHBhcnNlSVNPKCcyMDE4LTEzLTMyJylcbiAqICAgLy89PiBJbnZhbGlkIERhdGVcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyBkb2Vzbid0IGZhbGwgYmFjayB0byBgbmV3IERhdGVgIGNvbnN0cnVjdG9yXG4gKiAgIGlmIGl0IGZhaWxzIHRvIHBhcnNlIGEgc3RyaW5nIGFyZ3VtZW50LiBJbnN0ZWFkLCBpdCByZXR1cm5zIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gMiA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtZWxlbWVudHNcIjtcblxubGV0IHRhc2tzRGluYW1pY0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrcy1jb250YWluZXJcIiwgXCJcIiwgXCJcIik7XG5cbmxldCBwcm9qZWN0c0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5sZXQgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIsIFwiXCIsIFwiXCIpO1xubGV0IGFkZFByb2plY3RQbHVzU2lnbiA9IGNyZWF0ZUVsZW1lbnQoXG4gIFwiZGl2XCIsXG4gIFwiYWRkLXByb2plY3RcIixcbiAgXCJcIixcbiAgXCI8c3BhbiBjbGFzcz0ncGx1cy1zaWduJz4rPC9zcGFuPiBBZGQgUHJvamVjdFwiXG4pO1xuXG5leHBvcnQge1xuICB0YXNrc0RpbmFtaWNDb250YWluZXIsXG4gIHByb2plY3RzQmFyLFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgYWRkUHJvamVjdFBsdXNTaWduLFxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkSW1hZ2UoaWNvbiwgY2xhc3NOYW1lKSB7XG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUljb24uc3JjID0gaWNvbjtcbiAgbXlJY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIG15SWNvbjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgbG9hZEltYWdlIH07XG4iLCJpbXBvcnQgeyBwYXJzZVJlZkpTT04sIHN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3NMaXN0ID0gW107XG4gIH1cbiAgZGVsZXRlUHJvamVjdCgpIHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoZWwpID0+IHtcbiAgICAgIHJldHVybiBlbCAhPSB0aGlzO1xuICAgIH0pO1xuICB9XG59XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuaWYgKFxuICBzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmXG4gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgIT0gbnVsbFxuKSB7XG4gIGxldCBwcm9qZWN0czIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBwcm9qZWN0czIuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgIHBhcnNlUmVmSlNPTihwcm9qKTtcbiAgICAvL2xldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvai50aXRsZSk7XG4gICAgLy9uZXdQcm9qZWN0LnRhc2tzTGlzdCA9IHByb2oudGFza3NMaXN0O1xuICAgIC8vIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIH0pO1xufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cbiAgZmluaXNoVGFzaygpIHtcbiAgICBhbGxUYXNrc1N0YXRpYy50YXNrc0xpc3QgPSBhbGxUYXNrc1N0YXRpYy50YXNrc0xpc3QuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgcmV0dXJuIGVsICE9IHRoaXM7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9qZWN0LnRhc2tzTGlzdCA9IHRoaXMucHJvamVjdC50YXNrc0xpc3QuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgcmV0dXJuIGVsICE9IHRoaXM7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3QudGFza3NMaXN0ID0gdGhpcy5wcm9qZWN0LnRhc2tzTGlzdC5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICByZXR1cm4gZWwgIT0gdGhpcztcbiAgICB9KTsgLy9maWx0ZXJlZCBhcnJheSB0aGF0IHJldHVybnMgYWxsIHZhbHVlcyB0aGF0IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGlzIG9iamVjdFxuICAgIG5ld1Byb2plY3QgPSBwcm9qZWN0cy5maW5kKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC50aXRsZSA9PSBuZXdQcm9qZWN0O1xuICAgIH0pO1xuICAgIG5ld1Byb2plY3QudGFza3NMaXN0LnB1c2godGhpcyk7XG4gICAgdGhpcy5wcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgfVxufVxuXG5sZXQgaW5ib3hTdGF0aWMgPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xucHJvamVjdHMucHVzaChpbmJveFN0YXRpYyk7XG5sZXQgdG9kYXlTdGF0aWMgPSBuZXcgUHJvamVjdChcIlRvZGF5XCIpO1xubGV0IGFsbFRhc2tzU3RhdGljID0gbmV3IFByb2plY3QoXCJBbGwgVGFza3NcIik7XG5cbmxldCBwcmlvcml0aWVzID0gW1wicmVkXCIsIFwieWVsbG93XCIsIFwiZ3JlZW5cIiwgXCJcIl07XG5cbmV4cG9ydCB7XG4gIFRhc2ssXG4gIFByb2plY3QsXG4gIHByb2plY3RzLFxuICBpbmJveFN0YXRpYyxcbiAgdG9kYXlTdGF0aWMsXG4gIGFsbFRhc2tzU3RhdGljLFxuICBwcmlvcml0aWVzLFxufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVOb0J1dHRvblBhZ2UsXG4gIGNyZWF0ZVByb2plY3RQYWdlLFxuICBjcmVhdGVUb2RheVBhZ2UsXG59IGZyb20gXCIuL3Byb2plY3QtcGFnZVwiO1xuaW1wb3J0IHtcbiAgYWRkUHJvamVjdFBsdXNTaWduLFxuICBwcm9qZWN0c0JhcixcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIHRhc2tzRGluYW1pY0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vYWRkLWJ1dHRvbnNcIjtcbmltcG9ydCB7IGluYm94U3RhdGljLCB0b2RheVN0YXRpYywgYWxsVGFza3NTdGF0aWMgfSBmcm9tIFwiLi9jcmVhdGUtdG9kb1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEJhciB9IGZyb20gXCIuL3Byb2plY3RzLWJhclwiO1xuXG5sZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcbmxldCBpbmJveEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XG5sZXQgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpO1xubGV0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtdGFza3NcIik7XG5cbmluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNyZWF0ZVByb2plY3RQYWdlKG1haW5Db250ZW50LCBpbmJveFN0YXRpYywgdGFza3NEaW5hbWljQ29udGFpbmVyKTtcbn0pO1xuXG50b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjcmVhdGVUb2RheVBhZ2UobWFpbkNvbnRlbnQsIHRhc2tzRGluYW1pY0NvbnRhaW5lcik7XG59KTtcblxuYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlTm9CdXR0b25QYWdlKG1haW5Db250ZW50LCBhbGxUYXNrc1N0YXRpYywgdGFza3NEaW5hbWljQ29udGFpbmVyKTtcbn0pO1xuXG5jcmVhdGVQcm9qZWN0UGFnZShtYWluQ29udGVudCwgaW5ib3hTdGF0aWMsIHRhc2tzRGluYW1pY0NvbnRhaW5lcik7XG5jcmVhdGVQcm9qZWN0QmFyKHByb2plY3RzQmFyLCBwcm9qZWN0c0NvbnRhaW5lciwgYWRkUHJvamVjdFBsdXNTaWduKTtcblxuZXhwb3J0IHsgbWFpbkNvbnRlbnQgfTtcbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICB2YXIgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIHZhciB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICBzdG9yYWdlICYmXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVmUmVwbGFjZXIoKSB7XG4gIGxldCBtID0gbmV3IE1hcCgpLFxuICAgIHYgPSBuZXcgTWFwKCksXG4gICAgaW5pdCA9IG51bGw7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWVsZCwgdmFsdWUpIHtcbiAgICBsZXQgcCA9IG0uZ2V0KHRoaXMpICsgKEFycmF5LmlzQXJyYXkodGhpcykgPyBgWyR7ZmllbGR9XWAgOiBcIi5cIiArIGZpZWxkKTtcbiAgICBsZXQgaXNDb21wbGV4ID0gdmFsdWUgPT09IE9iamVjdCh2YWx1ZSk7XG5cbiAgICBpZiAoaXNDb21wbGV4KSBtLnNldCh2YWx1ZSwgcCk7XG5cbiAgICBsZXQgcHAgPSB2LmdldCh2YWx1ZSkgfHwgXCJcIjtcbiAgICBsZXQgcGF0aCA9IHAucmVwbGFjZSgvdW5kZWZpbmVkXFwuXFwuPy8sIFwiXCIpO1xuICAgIGxldCB2YWwgPSBwcCA/IGAjUkVGOiR7cHBbMF0gPT0gXCJbXCIgPyBcIiRcIiA6IFwiJC5cIn0ke3BwfWAgOiB2YWx1ZTtcblxuICAgICFpbml0ID8gKGluaXQgPSB2YWx1ZSkgOiB2YWwgPT09IGluaXQgPyAodmFsID0gXCIjUkVGOiRcIikgOiAwO1xuICAgIGlmICghcHAgJiYgaXNDb21wbGV4KSB2LnNldCh2YWx1ZSwgcGF0aCk7XG5cbiAgICByZXR1cm4gdmFsO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVJlZkpTT04oanNvbikge1xuICBsZXQgb2JqVG9QYXRoID0gbmV3IE1hcCgpO1xuICBsZXQgcGF0aFRvT2JqID0gbmV3IE1hcCgpO1xuICBsZXQgbyA9IEpTT04ucGFyc2UoanNvbik7XG5cbiAgbGV0IHRyYXZlcnNlID0gKHBhcmVudCwgZmllbGQpID0+IHtcbiAgICBsZXQgb2JqID0gcGFyZW50O1xuICAgIGxldCBwYXRoID0gXCIjUkVGOiRcIjtcblxuICAgIGlmIChmaWVsZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmogPSBwYXJlbnRbZmllbGRdO1xuICAgICAgcGF0aCA9XG4gICAgICAgIG9ialRvUGF0aC5nZXQocGFyZW50KSArXG4gICAgICAgIChBcnJheS5pc0FycmF5KHBhcmVudCkgPyBgWyR7ZmllbGR9XWAgOiBgJHtmaWVsZCA/IFwiLlwiICsgZmllbGQgOiBcIlwifWApO1xuICAgIH1cblxuICAgIG9ialRvUGF0aC5zZXQob2JqLCBwYXRoKTtcbiAgICBwYXRoVG9PYmouc2V0KHBhdGgsIG9iaik7XG5cbiAgICBsZXQgcmVmID0gcGF0aFRvT2JqLmdldChvYmopO1xuICAgIGlmIChyZWYpIHBhcmVudFtmaWVsZF0gPSByZWY7XG5cbiAgICBmb3IgKGxldCBmIGluIG9iaikgaWYgKG9iaiA9PT0gT2JqZWN0KG9iaikpIHRyYXZlcnNlKG9iaiwgZik7XG4gIH07XG5cbiAgdHJhdmVyc2Uobyk7XG4gIHJldHVybiBvO1xufVxuXG5leHBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlLCByZWZSZXBsYWNlciwgcGFyc2VSZWZKU09OIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRzXCI7XG5pbXBvcnQge1xuICBUYXNrLFxuICBhbGwsXG4gIGFsbFRhc2tzU3RhdGljLFxuICBQcm9qZWN0LFxuICBwcm9qZWN0cyxcbiAgcHJpb3JpdGllcyxcbn0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7IGlzVG9kYXksIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZShsb2NhdGlvbiwgZGluYW1pY0NvbnRhaW5lcikge1xuICB3aGlsZSAobG9jYXRpb24ubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGxvY2F0aW9uLnJlbW92ZUNoaWxkKGxvY2F0aW9uLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIHdoaWxlIChkaW5hbWljQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBkaW5hbWljQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRpbmFtaWNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUobG9jYXRpb24sIHByb2plY3QsIGRpbmFtaWNDb250YWluZXIpIHtcbiAgbGV0IHByb2plY3RQYWdlSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtcGFnZS1oZWFkZXJcIiwgXCJcIiwgXCJcIik7XG4gIGxldCBwcm9qZWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC10aXRsZVwiLCBcIlwiLCBwcm9qZWN0LnRpdGxlKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2VIZWFkZXIpO1xuICBwcm9qZWN0UGFnZUhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBsZXQgc29ydENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzb3J0LWNvbnRhaW5lclwiLCBcIlwiLCBcIlwiKTtcbiAgcHJvamVjdFBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoc29ydENvbnRhaW5lcik7XG4gIGxldCBzb3J0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzb3J0LXRleHRcIiwgXCJcIiwgXCJTb3J0IGJ5OlwiKTtcbiAgc29ydENvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0VGV4dCk7XG4gIGxldCBkYXRlU29ydCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzb3J0LWJ1dHRvblwiLCBcIlwiLCBcIkR1ZSBEYXRlXCIpO1xuICBsZXQgcHJpb3JpdHlTb3J0ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNvcnQtYnV0dG9uXCIsIFwiXCIsIFwiUHJpb3JpdHlcIik7XG4gIHNvcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVNvcnQpO1xuICBzb3J0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U29ydCk7XG5cbiAgZGF0ZVNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzb3J0UGFnZShwcm9qZWN0LCBsb2NhdGlvbiwgZGluYW1pY0NvbnRhaW5lciwgXCJEdWUgRGF0ZVwiKTtcbiAgfSk7XG5cbiAgcHJpb3JpdHlTb3J0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc29ydFBhZ2UocHJvamVjdCwgbG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIFwiUHJpb3JpdHlcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24obG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIHByb2plY3QpIHtcbiAgbGV0IHBsdXNTaWduQnV0dG9uID0gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwiYWRkLXRhc2tcIixcbiAgICBcIlwiLFxuICAgIFwiPHNwYW4gY2xhc3M9J3BsdXMtc2lnbic+Kzwvc3Bhbj4gQWRkIFRhc2tcIlxuICApO1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChkaW5hbWljQ29udGFpbmVyKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQocGx1c1NpZ25CdXR0b24pO1xuICBwbHVzU2lnbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZVRhc2tGb3JtKGxvY2F0aW9uLCBwbHVzU2lnbkJ1dHRvbiwgcHJvamVjdCwgZGluYW1pY0NvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybShcbiAgbWFpbkNvbnRhaW5lcixcbiAgcGx1c1NpZ25CdXR0b24sXG4gIHByb2plY3QsXG4gIGRpbmFtaWNDb250YWluZXJcbikge1xuICBsZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBhZGRGb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInN1Ym1pdC1idXR0b25cIiwgXCJcIiwgXCJBZGRcIik7XG4gIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlR5cGUgeW91ciB0YXNrIGhlcmVcIik7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBsdXNTaWduQnV0dG9uKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRGb3JtQnV0dG9uKTtcbiAgYWRkRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldHVwVGFza0NvbnRhaW5lcihcbiAgICAgIHByb2plY3QsXG4gICAgICBtYWluQ29udGFpbmVyLFxuICAgICAgdGFza0Zvcm0sXG4gICAgICBhZGRGb3JtQnV0dG9uLFxuICAgICAgcGx1c1NpZ25CdXR0b24sXG4gICAgICBkaW5hbWljQ29udGFpbmVyXG4gICAgKTtcbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgdGFza0Zvcm0udmFsdWUgIT0gXCJcIikge1xuICAgICAgc2V0dXBUYXNrQ29udGFpbmVyKFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBtYWluQ29udGFpbmVyLFxuICAgICAgICB0YXNrRm9ybSxcbiAgICAgICAgYWRkRm9ybUJ1dHRvbixcbiAgICAgICAgcGx1c1NpZ25CdXR0b24sXG4gICAgICAgIGRpbmFtaWNDb250YWluZXJcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBUYXNrQ29udGFpbmVyKFxuICBwcm9qZWN0LFxuICBtYWluQ29udGFpbmVyLFxuICB0YXNrRm9ybSxcbiAgYWRkRm9ybUJ1dHRvbixcbiAgcGx1c1NpZ25CdXR0b24sXG4gIGRpbmFtaWNDb250YWluZXJcbikge1xuICBpZiAodGFza0Zvcm0udmFsdWUgIT0gXCJcIikge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza0Zvcm0udmFsdWUsIFwiXCIsIFwiXCIsIHByb2plY3QpO1xuICAgIHByb2plY3QudGFza3NMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgYWxsVGFza3NTdGF0aWMudGFza3NMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChhZGRGb3JtQnV0dG9uKTtcbiAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tGb3JtKTtcbiAgICB0YXNrRm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzU2lnbkJ1dHRvbik7XG4gICAgcHJpbnRUYXNrKG5ld1Rhc2ssIGRpbmFtaWNDb250YWluZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50VGFzayh0YXNrLCBkaW5hbWljQ29udGFpbmVyKSB7XG4gIGxldCBuZXdUYXNrTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrXCIsIHRhc2sudGl0bGUgKyBcImxpbmVcIiwgXCJcIik7XG4gIGRpbmFtaWNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0xpbmUpO1xuICBsZXQgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY2hlY2tib3hcIiwgdGFzay50aXRsZSArIFwiY2hlY2tib3hcIiwgXCJcIik7XG4gIG5ld1Rhc2tMaW5lLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgbGV0IHRhc2tUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcInRhc2stdGl0bGVcIixcbiAgICB0YXNrLnRpdGxlICsgXCJ0aXRsZVwiLFxuICAgIHRhc2sudGl0bGVcbiAgKTtcbiAgbmV3VGFza0xpbmUuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaW5hbWljQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld1Rhc2tMaW5lKTtcbiAgICB0YXNrLmZpbmlzaFRhc2soKTtcbiAgfSk7XG4gIGxldCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRhclwiKTtcbiAgY2FsZW5kYXIudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIGNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHRhc2suZHVlRGF0ZSA9IGNhbGVuZGFyLnZhbHVlO1xuICB9KTtcbiAgbmV3VGFza0xpbmUuYXBwZW5kQ2hpbGQoY2FsZW5kYXIpO1xuICBsZXQgcHJpb3JpdHlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJpb3JpdHktY29udGFpbmVyXCIsIFwiXCIsIFwiXCIpO1xuICBuZXdUYXNrTGluZS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XG4gIGxldCBwcmlvcml0eVRleHQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJpb3JpdHktdGV4dFwiLCBcIlwiLCBcInByaW9yaXR5OlwiKTtcbiAgbGV0IHJlZFByaW9yaXR5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInJlZC1wcmlvcml0eVwiLCBcIlwiLCBcIiFcIik7XG4gIGxldCB5ZWxsb3dQcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ5ZWxsb3ctcHJpb3JpdHlcIiwgXCJcIiwgXCIhXCIpO1xuICBsZXQgZ3JlZW5Qcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJncmVlbi1wcmlvcml0eVwiLCBcIlwiLCBcIiFcIik7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlZFByaW9yaXR5KTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVsbG93UHJpb3JpdHkpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmVlblByaW9yaXR5KTtcbiAgcHJpb3JpdHlGbG93KHRhc2ssIHJlZFByaW9yaXR5LCB5ZWxsb3dQcmlvcml0eSwgZ3JlZW5Qcmlvcml0eSk7XG4gIGxldCBwcm9qZWN0RHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQudGl0bGU7XG4gICAgcHJvamVjdERyb3AuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIHByb2plY3REcm9wLnZhbHVlID0gdGFzay5wcm9qZWN0LnRpdGxlO1xuICBuZXdUYXNrTGluZS5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcCk7XG4gIHByb2plY3REcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHRhc2suY2hhbmdlUHJvamVjdChwcm9qZWN0RHJvcC52YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcmlvcml0eUZsb3codGFzaywgcmVkUHJpb3JpdHksIHllbGxvd1ByaW9yaXR5LCBncmVlblByaW9yaXR5KSB7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09IFwicmVkXCIpIHtcbiAgICBjb2xvclByaW9yaXR5KHRhc2ssIFwicmVkXCIsIHJlZFByaW9yaXR5LCB5ZWxsb3dQcmlvcml0eSwgZ3JlZW5Qcmlvcml0eSk7XG4gIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcInllbGxvd1wiKSB7XG4gICAgY29sb3JQcmlvcml0eSh0YXNrLCBcInllbGxvd1wiLCB5ZWxsb3dQcmlvcml0eSwgcmVkUHJpb3JpdHksIGdyZWVuUHJpb3JpdHkpO1xuICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJncmVlblwiKSB7XG4gICAgY29sb3JQcmlvcml0eSh0YXNrLCBcImdyZWVuXCIsIGdyZWVuUHJpb3JpdHksIHllbGxvd1ByaW9yaXR5LCByZWRQcmlvcml0eSk7XG4gIH1cbiAgcmVkUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcInJlZFwiKSB7XG4gICAgICB0YXNrLnByaW9yaXR5ID0gXCJcIjtcbiAgICAgIHJlZFByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yUHJpb3JpdHkodGFzaywgXCJyZWRcIiwgcmVkUHJpb3JpdHksIHllbGxvd1ByaW9yaXR5LCBncmVlblByaW9yaXR5KTtcbiAgICB9XG4gIH0pO1xuICB5ZWxsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwieWVsbG93XCIpIHtcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBcIlwiO1xuICAgICAgeWVsbG93UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3JQcmlvcml0eSh0YXNrLCBcInllbGxvd1wiLCB5ZWxsb3dQcmlvcml0eSwgcmVkUHJpb3JpdHksIGdyZWVuUHJpb3JpdHkpO1xuICAgIH1cbiAgfSk7XG4gIGdyZWVuUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcImdyZWVuXCIpIHtcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBcIlwiO1xuICAgICAgZ3JlZW5Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xvclByaW9yaXR5KHRhc2ssIFwiZ3JlZW5cIiwgZ3JlZW5Qcmlvcml0eSwgeWVsbG93UHJpb3JpdHksIHJlZFByaW9yaXR5KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb2xvclByaW9yaXR5KFxuICB0YXNrLFxuICBjb2xvcixcbiAgY2xpY2tlZFByaW9yaXR5LFxuICBvdGhlclByaW9yaXR5LFxuICBvdGhlclByaW9yaXR5MlxuKSB7XG4gIHRhc2sucHJpb3JpdHkgPSBjb2xvcjtcbiAgY2xpY2tlZFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG90aGVyUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgb3RoZXJQcmlvcml0eTIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFBhZ2UobG9jYXRpb24sIHByb2plY3QsIGRpbmFtaWNDb250YWluZXIpIHtcbiAgY2xlYXJQYWdlKGxvY2F0aW9uLCBkaW5hbWljQ29udGFpbmVyKTtcbiAgY3JlYXRlVGl0bGUobG9jYXRpb24sIHByb2plY3QsIGRpbmFtaWNDb250YWluZXIpO1xuICBjcmVhdGVBZGRCdXR0b24obG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIHByb2plY3QpO1xuICBwcm9qZWN0LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcHJpbnRUYXNrKHRhc2ssIGRpbmFtaWNDb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9CdXR0b25QYWdlKGxvY2F0aW9uLCBwcm9qZWN0LCBkaW5hbWljQ29udGFpbmVyKSB7XG4gIGNsZWFyUGFnZShsb2NhdGlvbiwgZGluYW1pY0NvbnRhaW5lcik7XG4gIGNyZWF0ZVRpdGxlKGxvY2F0aW9uLCBwcm9qZWN0LCBkaW5hbWljQ29udGFpbmVyKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoZGluYW1pY0NvbnRhaW5lcik7XG4gIHByb2plY3QudGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBwcmludFRhc2sodGFzaywgZGluYW1pY0NvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RheVBhZ2UobG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIpIHtcbiAgbGV0IHRvZGF5ID0gbmV3IFByb2plY3QoXCJUb2RheVwiKTtcbiAgY2xlYXJQYWdlKGxvY2F0aW9uLCBkaW5hbWljQ29udGFpbmVyKTtcbiAgY3JlYXRlVGl0bGUobG9jYXRpb24sIHRvZGF5LCBkaW5hbWljQ29udGFpbmVyKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoZGluYW1pY0NvbnRhaW5lcik7XG4gIHRvZGF5LnRhc2tzTGlzdCA9IGFsbFRhc2tzU3RhdGljLnRhc2tzTGlzdC5maWx0ZXIoKHRhc2spID0+IHtcbiAgICByZXR1cm4gaXNUb2RheShwYXJzZUlTTyh0YXNrLmR1ZURhdGUsIDEpKTtcbiAgfSk7XG4gIHRvZGF5LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcHJpbnRUYXNrKHRhc2ssIGRpbmFtaWNDb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc29ydFBhZ2UocHJvamVjdCwgbG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIHNvcnRUeXBlKSB7XG4gIGNsZWFyUGFnZShsb2NhdGlvbiwgZGluYW1pY0NvbnRhaW5lcik7XG4gIGNyZWF0ZVRpdGxlKGxvY2F0aW9uLCBwcm9qZWN0LCBkaW5hbWljQ29udGFpbmVyKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoZGluYW1pY0NvbnRhaW5lcik7XG4gIGlmIChzb3J0VHlwZSA9PSBcIkR1ZSBEYXRlXCIpIHtcbiAgICBwcm9qZWN0LnRhc2tzTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYS5kdWVEYXRlID09IFwiXCIpIHJldHVybiAxO1xuICAgICAgZWxzZSBpZiAoYi5kdWVEYXRlID09IFwiXCIpIHJldHVybiAtMTtcbiAgICAgIGVsc2UgcmV0dXJuIERhdGUucGFyc2UoYS5kdWVEYXRlKSAtIERhdGUucGFyc2UoYi5kdWVEYXRlKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBwcmludFRhc2sodGFzaywgZGluYW1pY0NvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgY3JlYXRlQWRkQnV0dG9uKGxvY2F0aW9uLCBkaW5hbWljQ29udGFpbmVyLCBwcm9qZWN0KTtcbiAgfSBlbHNlIGlmIChzb3J0VHlwZSA9PSBcIlByaW9yaXR5XCIpIHtcbiAgICBwcm9qZWN0LnRhc2tzTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gcHJpb3JpdGllcy5pbmRleE9mKGEucHJpb3JpdHkpIC0gcHJpb3JpdGllcy5pbmRleE9mKGIucHJpb3JpdHkpO1xuICAgIH0pO1xuICAgIHByb2plY3QudGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHByaW50VGFzayh0YXNrLCBkaW5hbWljQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBjcmVhdGVBZGRCdXR0b24obG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIHByb2plY3QpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlLCBjcmVhdGVOb0J1dHRvblBhZ2UsIGNyZWF0ZVRvZGF5UGFnZSwgcHJpbnRUYXNrIH07XG4iLCJpbXBvcnQgeyB0YXNrc0RpbmFtaWNDb250YWluZXIgfSBmcm9tIFwiLi9hZGQtYnV0dG9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgbG9hZEltYWdlIH0gZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRzXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cywgaW5ib3hTdGF0aWMsIGFsbFRhc2tzU3RhdGljIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH0gZnJvbSBcIi4vcHJvamVjdC1wYWdlXCI7XG5pbXBvcnQgcHJvamVjdEltYWdlIGZyb20gXCIuL3Byb2plY3Quc3ZnXCI7XG5pbXBvcnQgeyBtYWluQ29udGVudCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyByZWZSZXBsYWNlciwgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKGxvY2F0aW9uLCBkaW5hbWljQ29udGFpbmVyLCBwbHVzU2lnbkJ1dHRvbikge1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChkaW5hbWljQ29udGFpbmVyKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQocGx1c1NpZ25CdXR0b24pO1xuICBwbHVzU2lnbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3RGb3JtKGxvY2F0aW9uLCBwbHVzU2lnbkJ1dHRvbiwgZGluYW1pY0NvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybShtYWluQ29udGFpbmVyLCBwbHVzU2lnbkJ1dHRvbiwgZGluYW1pY0NvbnRhaW5lcikge1xuICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBhZGRGb3JtQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInByb2plY3QtYnV0dG9uXCIsIFwiXCIsIFwiQWRkXCIpO1xuICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IG5hbWVcIik7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBsdXNTaWduQnV0dG9uKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRGb3JtQnV0dG9uKTtcbiAgYWRkRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldHVwUHJvamVjdENvbnRhaW5lcihcbiAgICAgIHByb2plY3RGb3JtLnZhbHVlLFxuICAgICAgbWFpbkNvbnRhaW5lcixcbiAgICAgIGFkZEZvcm1CdXR0b24sXG4gICAgICBwcm9qZWN0Rm9ybSxcbiAgICAgIHBsdXNTaWduQnV0dG9uLFxuICAgICAgZGluYW1pY0NvbnRhaW5lclxuICAgICk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIHByb2plY3RGb3JtLnZhbHVlICE9IFwiXCIpIHtcbiAgICAgIHNldHVwUHJvamVjdENvbnRhaW5lcihcbiAgICAgICAgcHJvamVjdEZvcm0udmFsdWUsXG4gICAgICAgIG1haW5Db250YWluZXIsXG4gICAgICAgIGFkZEZvcm1CdXR0b24sXG4gICAgICAgIHByb2plY3RGb3JtLFxuICAgICAgICBwbHVzU2lnbkJ1dHRvbixcbiAgICAgICAgZGluYW1pY0NvbnRhaW5lclxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cFByb2plY3RDb250YWluZXIoXG4gIHRpdGxlLFxuICBtYWluQ29udGFpbmVyLFxuICBhZGRGb3JtQnV0dG9uLFxuICBwcm9qZWN0Rm9ybSxcbiAgcGx1c1NpZ25CdXR0b24sXG4gIGRpbmFtaWNDb250YWluZXJcbikge1xuICBpZiAocHJvamVjdEZvcm0udmFsdWUgIT0gXCJcIikge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cywgcmVmUmVwbGFjZXIoKSkpO1xuICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoYWRkRm9ybUJ1dHRvbik7XG4gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbHVzU2lnbkJ1dHRvbik7XG4gICAgcHJvamVjdEZvcm0udmFsdWUgPSBcIlwiO1xuICAgIHByaW50UHJvamVjdChuZXdQcm9qZWN0LCBkaW5hbWljQ29udGFpbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFByb2plY3QocHJvamVjdCwgZGluYW1pY0NvbnRhaW5lcikge1xuICBsZXQgbmV3UHJvamVjdExpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1saW5lXCIsIFwiXCIsIFwiXCIpO1xuICBkaW5hbWljQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMaW5lKTtcbiAgbmV3UHJvamVjdExpbmUuYXBwZW5kQ2hpbGQobG9hZEltYWdlKHByb2plY3RJbWFnZSwgXCJwcm9qZWN0LWltYWdlXCIpKTtcbiAgbGV0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBcInByb2plY3QtdGl0bGUtYmFyXCIsXG4gICAgXCJcIixcbiAgICBwcm9qZWN0LnRpdGxlXG4gICk7XG4gIG5ld1Byb2plY3RMaW5lLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgbmV3UHJvamVjdExpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjcmVhdGVQcm9qZWN0UGFnZShtYWluQ29udGVudCwgcHJvamVjdCwgdGFza3NEaW5hbWljQ29udGFpbmVyKTtcbiAgfSk7XG5cbiAgbGV0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJyZW1vdmUtYnV0dG9uXCIsIFwiXCIsIFwieFwiKTtcbiAgbmV3UHJvamVjdExpbmUuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgbmV3UHJvamVjdExpbmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgIGhpZ2hsaWdodCh0cnVlLCBuZXdQcm9qZWN0TGluZSwgcmVtb3ZlQnV0dG9uKTtcbiAgfSk7XG4gIG5ld1Byb2plY3RMaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICBoaWdobGlnaHQoZmFsc2UsIG5ld1Byb2plY3RMaW5lLCByZW1vdmVCdXR0b24pO1xuICB9KTtcbiAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGluYW1pY0NvbnRhaW5lci5yZW1vdmVDaGlsZChuZXdQcm9qZWN0TGluZSk7XG4gICAgcHJvamVjdC5kZWxldGVQcm9qZWN0KCk7XG4gICAgY3JlYXRlUHJvamVjdFBhZ2UobWFpbkNvbnRlbnQsIGluYm94U3RhdGljLCB0YXNrc0RpbmFtaWNDb250YWluZXIpO1xuICAgIHByb2plY3QudGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGFsbFRhc2tzU3RhdGljLnRhc2tzTGlzdCA9IGFsbFRhc2tzU3RhdGljLnRhc2tzTGlzdC5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIHJldHVybiBlbCAhPSB0YXNrO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcHJvamVjdC50YXNrc0xpc3QgPSBbXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodChhZGQsIGxpbmUsIHJlbW92ZUJ1dHRvbikge1xuICBpZiAoYWRkKSB7XG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG4gICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCYXIobG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIHBsdXNTaWduQnV0dG9uKSB7XG4gIGNyZWF0ZUFkZFByb2plY3RCdXR0b24obG9jYXRpb24sIGRpbmFtaWNDb250YWluZXIsIHBsdXNTaWduQnV0dG9uKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gXCJJbmJveFwiKSB7XG4gICAgfSBlbHNlIHByaW50UHJvamVjdChwcm9qZWN0LCBkaW5hbWljQ29udGFpbmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RCYXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==