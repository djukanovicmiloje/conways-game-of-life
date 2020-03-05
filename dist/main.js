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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./model/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controller/start.js":
/*!*****************************!*\
  !*** ./controller/start.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/draw */ \"./view/draw.js\");\n/* harmony import */ var _model_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/init */ \"./model/init.js\");\n\n\n\nconst initButtons = () => {\n  const onStartClick = () => {\n    const interval = Object(_model_init__WEBPACK_IMPORTED_MODULE_1__[\"gameLoop\"])();\n    const onStopClick = () => {\n      clearInterval(interval);\n    };\n    Object(_view_draw__WEBPACK_IMPORTED_MODULE_0__[\"getStopButton\"])().addEventListener(\"click\", () => onStopClick());\n  };\n\n  Object(_view_draw__WEBPACK_IMPORTED_MODULE_0__[\"getStartButton\"])().addEventListener(\"click\", () => onStartClick());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initButtons);\n\n\n//# sourceURL=webpack:///./controller/start.js?");

/***/ }),

/***/ "./model/areNeighbors.js":
/*!*******************************!*\
  !*** ./model/areNeighbors.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst areNeighbors = (cell1, cell2) => {\n  if (\n    cell1.position.x === cell2.position.x - 1 &&\n    (cell1.position.y === cell2.position.y + 1 ||\n      cell1.position.y === cell2.position.y ||\n      cell1.position.y === cell2.position.y - 1)\n  ) {\n    return true;\n  }\n\n  if (\n    cell1.position.x === cell2.position.x &&\n    (cell1.position.y === cell2.position.y + 1 ||\n      cell1.position.y === cell2.position.y - 1)\n  ) {\n    return true;\n  }\n\n  if (\n    cell1.position.x === cell2.position.x + 1 &&\n    (cell1.position.y === cell2.position.y + 1 ||\n      cell1.position.y === cell2.position.y ||\n      cell1.position.y === cell2.position.y - 1)\n  ) {\n    return true;\n  }\n\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (areNeighbors);\n\n\n//# sourceURL=webpack:///./model/areNeighbors.js?");

/***/ }),

/***/ "./model/cell.js":
/*!***********************!*\
  !*** ./model/cell.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _areNeighbors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areNeighbors */ \"./model/areNeighbors.js\");\n\n\nclass Cell {\n  constructor(x, y) {\n    this.position = { x, y };\n    this.isAlive = false;\n    this.previousGenerationIsAlive = false;\n  }\n  setNeighbors(cells) {\n    const neighbors = [];\n    for (let i = 0; i < cells.length; i++) {\n      if (Object(_areNeighbors__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, cells[i])) {\n        neighbors.push(cells[i]);\n      }\n    }\n    this.neighbors = neighbors;\n  }\n  changeGeneration() {\n    this.previousGenerationIsAlive = this.isAlive;\n  }\n  nextGeneration() {\n    let aliveNeighbors = 0;\n    for (let i = 0; i < this.neighbors.length; i++) {\n      this.neighbors[i].previousGenerationIsAlive && aliveNeighbors++;\n    }\n    if (aliveNeighbors === 3 || aliveNeighbors === 2) {\n      this.isAlive = true;\n    } else {\n      this.isAlive = false;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\n\n//# sourceURL=webpack:///./model/cell.js?");

/***/ }),

/***/ "./model/constants.js":
/*!****************************!*\
  !*** ./model/constants.js ***!
  \****************************/
/*! exports provided: NUM_CELLS_X, NUM_CELLS_Y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUM_CELLS_X\", function() { return NUM_CELLS_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUM_CELLS_Y\", function() { return NUM_CELLS_Y; });\nconst NUM_CELLS_X = 10;\nconst NUM_CELLS_Y = 10;\n\n\n//# sourceURL=webpack:///./model/constants.js?");

/***/ }),

/***/ "./model/generateCells.js":
/*!********************************!*\
  !*** ./model/generateCells.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./model/cell.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./model/constants.js\");\n\n\n\nconst generateCells = () => {\n  const cells = [];\n\n  for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUM_CELLS_X\"]; i++) {\n    for (let j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUM_CELLS_Y\"]; j++) {\n      cells.push(new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, j));\n    }\n  }\n\n  return cells;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateCells);\n\n\n//# sourceURL=webpack:///./model/generateCells.js?");

/***/ }),

/***/ "./model/init.js":
/*!***********************!*\
  !*** ./model/init.js ***!
  \***********************/
/*! exports provided: gameLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameLoop\", function() { return gameLoop; });\n/* harmony import */ var _generateCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateCells */ \"./model/generateCells.js\");\n/* harmony import */ var _nextGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextGeneration */ \"./model/nextGeneration.js\");\n/* harmony import */ var _view_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/draw */ \"./view/draw.js\");\n/* harmony import */ var _controller_start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/start */ \"./controller/start.js\");\n\n\n\n\n\nconst cells = Object(_generateCells__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfor (let i = 0; i < cells.length; i++) {\n  cells[i].setNeighbors(cells);\n}\n\n// cells[25].isAlive = true;\n// cells[24].isAlive = true;\n// cells[26].isAlive = true;\n\nconst gameLoop = () => {\n  return setInterval(() => {\n    Object(_view_draw__WEBPACK_IMPORTED_MODULE_2__[\"clearCanvas\"])();\n    console.log(\"ide\");\n    Object(_nextGeneration__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cells);\n  }, 1000);\n};\n\nObject(_controller_start__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack:///./model/init.js?");

/***/ }),

/***/ "./model/nextGeneration.js":
/*!*********************************!*\
  !*** ./model/nextGeneration.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/draw */ \"./view/draw.js\");\n\n\n//ova funkcija pomera za jednu generaciju\n\nconst nextGeneration = cells => {\n  for (let i = 0; i < cells.length; i++) {\n    cells[i].changeGeneration();\n  }\n  for (let i = 0; i < cells.length; i++) {\n    cells[i].nextGeneration();\n    Object(_view_draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cells[i]);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nextGeneration);\n\n\n//# sourceURL=webpack:///./model/nextGeneration.js?");

/***/ }),

/***/ "./view/draw.js":
/*!**********************!*\
  !*** ./view/draw.js ***!
  \**********************/
/*! exports provided: default, clearCanvas, getStartButton, getStopButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCanvas\", function() { return clearCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStartButton\", function() { return getStartButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStopButton\", function() { return getStopButton; });\nconst canvas = document.getElementById(\"gol\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst CELL_HEIGHT = 50;\n\nconst drawCell = cell => {\n  if (cell.isAlive) {\n    ctx.fillRect(\n      CELL_HEIGHT * cell.position.x,\n      CELL_HEIGHT * cell.position.y,\n      CELL_HEIGHT,\n      CELL_HEIGHT\n    );\n  } else {\n    ctx.fillRect(\n      CELL_HEIGHT * cell.position.x,\n      CELL_HEIGHT * cell.position.y,\n      CELL_HEIGHT,\n      CELL_HEIGHT / 20\n    );\n\n    ctx.fillRect(\n      CELL_HEIGHT * cell.position.x,\n      CELL_HEIGHT * cell.position.y,\n      CELL_HEIGHT / 20,\n      CELL_HEIGHT\n    );\n    ctx.fillRect(\n      CELL_HEIGHT * (cell.position.x + 19 / 20),\n      CELL_HEIGHT * cell.position.y,\n      CELL_HEIGHT / 20,\n      CELL_HEIGHT\n    );\n\n    ctx.fillRect(\n      CELL_HEIGHT * cell.position.x,\n      CELL_HEIGHT * (cell.position.y + 19 / 20),\n      CELL_HEIGHT,\n      CELL_HEIGHT / 20\n    );\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawCell);\n\nconst clearCanvas = () => {\n  canvas.width = canvas.width;\n};\n\nconst getStartButton = () => document.querySelector(\".start\");\n\nconst getStopButton = () => document.querySelector(\".stop\");\n\n\n//# sourceURL=webpack:///./view/draw.js?");

/***/ })

/******/ });