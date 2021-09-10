/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_picture1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/picture1.jpg */ \"./media/picture1.jpg\");\n/* harmony import */ var _media_picture2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/picture2.jpg */ \"./media/picture2.jpg\");\n/* harmony import */ var _media_picture3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/picture3.jpg */ \"./media/picture3.jpg\");\n/* harmony import */ var _media_picture4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/picture4.jpg */ \"./media/picture4.jpg\");\n/* harmony import */ var _media_picture5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/picture5.jpg */ \"./media/picture5.jpg\");\n/* harmony import */ var _media_picture6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/picture6.jpg */ \"./media/picture6.jpg\");\n/* harmony import */ var _media_music1_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/music1.mp3 */ \"./media/music1.mp3\");\n/* harmony import */ var _media_music2_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/music2.mp3 */ \"./media/music2.mp3\");\n/* harmony import */ var _media_video1_mp4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/video1.mp4 */ \"./media/video1.mp4\");\n/* harmony import */ var _media_video2_mp4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/video2.mp4 */ \"./media/video2.mp4\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/main.scss */ \"./css/main.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst picArray = [\r\n    { id: 1, src: _media_picture1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], text: \"Cat 1\"},\r\n    { id: 2, src: _media_picture2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], text: \"Cat 2\"},\r\n    { id: 3, src: _media_picture3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], text: \"Cat 3\"},\r\n    { id: 4, src: _media_picture4_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], text: \"Cat 4\"},\r\n    { id: 5, src: _media_picture5_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], text: \"Cat 5\"},\r\n    { id: 6, src: _media_picture6_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], text: \"Cat 6\"},\r\n];\r\n\r\nconst soundArray = [\r\n    { id: 1, src: _media_music1_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"], text: \"Sound 1\"},\r\n    { id: 2, src: _media_music2_mp3__WEBPACK_IMPORTED_MODULE_7__[\"default\"], text: \"Sound 2\"},\r\n];\r\n\r\nconst videoArray = [\r\n    { id: 1, src: _media_video1_mp4__WEBPACK_IMPORTED_MODULE_8__[\"default\"], text: \"Video 1\"},\r\n    { id: 2, src: _media_video2_mp4__WEBPACK_IMPORTED_MODULE_9__[\"default\"], text: \"Video 2\"},\r\n]\r\n\r\n\r\ngallery = document.getElementById('gallery');\r\n\r\npicArray.forEach((item) => {\r\n    let picDiv = `<div class=\"cats-pic\" id=\"catsPic${item.id}\"><h2>${item.text}</h2></div>`;\r\n    gallery.insertAdjacentHTML('beforeend', picDiv);\r\n\r\n    let thisItem = document.getElementById(`catsPic${item.id}`);\r\n\r\n    let pic = document.createElement('img');\r\n    pic.src = item.src;\r\n    pic.onload = () => {\r\n        thisItem.appendChild(pic);\r\n    };\r\n    \r\n});\r\n\r\nsoundArray.forEach((item) => {\r\n    let soundDiv = `<div class=\"sound-div\" id=\"soundPic${item.id}\"><h2>${item.text}</h2></div>`;\r\n    gallery.insertAdjacentHTML('beforeend', soundDiv);\r\n\r\n    let thisItem = document.getElementById(`soundPic${item.id}`);\r\n\r\n    let sound = document.createElement('audio');\r\n    sound.src = item.src;\r\n    sound.id = `audio-player${item.id}`;\r\n    sound.controls = 'controls';\r\n    thisItem.appendChild(sound);   \r\n});\r\n\r\nvideoArray.forEach((item) => {\r\n    let videoDiv = `<div class=\"video-div\" id=\"videoPic${item.id}\"><h2>${item.text}</h2></div>`;\r\n    gallery.insertAdjacentHTML('beforeend', videoDiv);\r\n\r\n    let thisItem = document.getElementById(`videoPic${item.id}`);\r\n\r\n    let movie = document.createElement('video');\r\n    movie.src = item.src;\r\n    movie.id = `video-player${item.id}`;\r\n    movie.controls = 'controls';\r\n    movie.width = '300';\r\n    thisItem.appendChild(movie);   \r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://lesson3/./js/main.js?");

/***/ }),

/***/ "./media/music1.mp3":
/*!**************************!*\
  !*** ./media/music1.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/music1.mp3\");\n\n//# sourceURL=webpack://lesson3/./media/music1.mp3?");

/***/ }),

/***/ "./media/music2.mp3":
/*!**************************!*\
  !*** ./media/music2.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/music2.mp3\");\n\n//# sourceURL=webpack://lesson3/./media/music2.mp3?");

/***/ }),

/***/ "./media/video1.mp4":
/*!**************************!*\
  !*** ./media/video1.mp4 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/video1.mp4\");\n\n//# sourceURL=webpack://lesson3/./media/video1.mp4?");

/***/ }),

/***/ "./media/video2.mp4":
/*!**************************!*\
  !*** ./media/video2.mp4 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/video2.mp4\");\n\n//# sourceURL=webpack://lesson3/./media/video2.mp4?");

/***/ }),

/***/ "./media/picture1.jpg":
/*!****************************!*\
  !*** ./media/picture1.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/picture1.jpeg\");\n\n//# sourceURL=webpack://lesson3/./media/picture1.jpg?");

/***/ }),

/***/ "./media/picture2.jpg":
/*!****************************!*\
  !*** ./media/picture2.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/picture2.jpeg\");\n\n//# sourceURL=webpack://lesson3/./media/picture2.jpg?");

/***/ }),

/***/ "./media/picture3.jpg":
/*!****************************!*\
  !*** ./media/picture3.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/picture3.jpeg\");\n\n//# sourceURL=webpack://lesson3/./media/picture3.jpg?");

/***/ }),

/***/ "./media/picture4.jpg":
/*!****************************!*\
  !*** ./media/picture4.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/picture4.jpeg\");\n\n//# sourceURL=webpack://lesson3/./media/picture4.jpg?");

/***/ }),

/***/ "./media/picture5.jpg":
/*!****************************!*\
  !*** ./media/picture5.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/picture5.jpeg\");\n\n//# sourceURL=webpack://lesson3/./media/picture5.jpg?");

/***/ }),

/***/ "./media/picture6.jpg":
/*!****************************!*\
  !*** ./media/picture6.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/picture6.jpeg\");\n\n//# sourceURL=webpack://lesson3/./media/picture6.jpg?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson3/./css/main.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;