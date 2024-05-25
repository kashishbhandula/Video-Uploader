"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/image-enhancer/upload/video/[video]";
exports.ids = ["pages/image-enhancer/upload/video/[video]"];
exports.modules = {

/***/ "./components/vide-upload/videPreview.js":
/*!***********************************************!*\
  !*** ./components/vide-upload/videPreview.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoPreview)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction VideoPreview() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { fileName  } = router.query;\n    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!fileName) {\n            router.push(\"/image-enhancer/upload/video\");\n            return;\n        }\n        try {\n            const newFileName = JSON.parse(fileName);\n            setVideoUrl(newFileName);\n        } catch (error) {\n            console.error(\"Error parsing fileName:\", error);\n            router.push(\"/image-enhancer/upload/video\");\n        }\n    }, [\n        fileName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:pr-5 xl:pr-5 md:pl-0 xl:pl-0 pr-2 pl-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[85vh] relative mt-20 bg-spyne_blue-20 border-spyne_blue-200 p-4 border-dashed border rounded-xl text-center lg:pt-10 pt-10 md:p-3 flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4\",\n                    children: \"Video Preview\"\n                }, void 0, false, {\n                    fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/vide-upload/videPreview.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                videoUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    height: \"800px\",\n                    width: \"800px\",\n                    controls: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                            src: videoUrl,\n                            type: \"video/mp4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/vide-upload/videPreview.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this),\n                        \"Your browser does not support the video tag.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/vide-upload/videPreview.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/vide-upload/videPreview.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/vide-upload/videPreview.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/vide-upload/videPreview.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZGUtdXBsb2FkL3ZpZGVQcmV2aWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNJO0FBQ2xCO0FBQ1gsU0FBU0ksZUFBZTtJQUNyQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxTQUFRLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUNqQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNLLFVBQVU7WUFDYkQsT0FBT0ssSUFBSSxDQUFDO1lBQ1o7UUFDRixDQUFDO1FBQ0QsSUFBSTtZQUNGLE1BQU1DLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ1A7WUFDL0JHLFlBQVlFO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDVCxPQUFPSyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ0o7S0FBUztJQUViLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQU87Ozs7OztnQkFDcEJULHlCQUNDLDhEQUFDVztvQkFBTUMsUUFBTztvQkFBUUMsT0FBTTtvQkFBUUMsUUFBUTs7c0NBQzFDLDhEQUFDQzs0QkFBT0MsS0FBS2hCOzRCQUFVaUIsTUFBSzs7Ozs7O3dCQUFjOzs7Ozs7eUNBSTVDLDhEQUFDQzs4QkFBRTs7Ozs7d0JBQ0o7Ozs7Ozs7Ozs7OztBQUlULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS10b29scy8uL2NvbXBvbmVudHMvdmlkZS11cGxvYWQvdmlkZVByZXZpZXcuanM/MmE5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvUHJldmlldygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZmlsZU5hbWUpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2ltYWdlLWVuaGFuY2VyL3VwbG9hZC92aWRlb1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gSlNPTi5wYXJzZShmaWxlTmFtZSk7XG4gICAgICBzZXRWaWRlb1VybChuZXdGaWxlTmFtZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGZpbGVOYW1lOlwiLCBlcnJvcik7XG4gICAgICByb3V0ZXIucHVzaChcIi9pbWFnZS1lbmhhbmNlci91cGxvYWQvdmlkZW9cIik7XG4gICAgfVxuICB9LCBbZmlsZU5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cHItNSB4bDpwci01IG1kOnBsLTAgeGw6cGwtMCBwci0yIHBsLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bODV2aF0gcmVsYXRpdmUgbXQtMjAgYmctc3B5bmVfYmx1ZS0yMCBib3JkZXItc3B5bmVfYmx1ZS0yMDAgcC00IGJvcmRlci1kYXNoZWQgYm9yZGVyIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgbGc6cHQtMTAgcHQtMTAgbWQ6cC0zIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00XCI+VmlkZW8gUHJldmlldzwvaDE+XG4gICAgICAgIHt2aWRlb1VybCA/IChcbiAgICAgICAgICA8dmlkZW8gaGVpZ2h0PVwiODAwcHhcIiB3aWR0aD1cIjgwMHB4XCIgY29udHJvbHM+XG4gICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW9Vcmx9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiVmlkZW9QcmV2aWV3Iiwicm91dGVyIiwiZmlsZU5hbWUiLCJxdWVyeSIsInZpZGVvVXJsIiwic2V0VmlkZW9VcmwiLCJwdXNoIiwibmV3RmlsZU5hbWUiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInZpZGVvIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb250cm9scyIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/vide-upload/videPreview.js\n");

/***/ }),

/***/ "./pages/image-enhancer/upload/video/[video].js":
/*!******************************************************!*\
  !*** ./pages/image-enhancer/upload/video/[video].js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vide)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_vide_upload_videPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/vide-upload/videPreview */ \"./components/vide-upload/videPreview.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Vide() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vide_upload_videPreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/pages/image-enhancer/upload/video/[video].js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbWFnZS1lbmhhbmNlci91cGxvYWQvdmlkZW8vW3ZpZGVvXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFnRTtBQUN0QztBQUNYLFNBQVNFLE9BQU87SUFDN0IscUJBQU8sOERBQUNGLDJFQUFZQTs7Ozs7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLXRvb2xzLy4vcGFnZXMvaW1hZ2UtZW5oYW5jZXIvdXBsb2FkL3ZpZGVvL1t2aWRlb10uanM/NGYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW9QcmV2aWV3IGZyb20gXCJAL2NvbXBvbmVudHMvdmlkZS11cGxvYWQvdmlkZVByZXZpZXdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGUoKSB7XG4gIHJldHVybiA8VmlkZW9QcmV2aWV3IC8+O1xufVxuIl0sIm5hbWVzIjpbIlZpZGVvUHJldmlldyIsIlJlYWN0IiwiVmlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/image-enhancer/upload/video/[video].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/image-enhancer/upload/video/[video].js"));
module.exports = __webpack_exports__;

})();