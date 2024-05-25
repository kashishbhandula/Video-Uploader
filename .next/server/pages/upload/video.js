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
exports.id = "pages/upload/video";
exports.ids = ["pages/upload/video"];
exports.modules = {

/***/ "./components/upload/video/uploadVideo.js":
/*!************************************************!*\
  !*** ./components/upload/video/uploadVideo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UploadVideo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction UploadVideo() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleFileChange = (event)=>{\n        const selectedFile = event.target.files[0];\n        if (selectedFile) {\n            const videoUrl = URL.createObjectURL(selectedFile);\n            router.push({\n                pathname: `video/preview/${selectedFile.name}`,\n                query: {\n                    fileName: JSON.stringify(videoUrl)\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:pr-5 xl:pr-5 md:pl-0 xl:pl-0 pr-2 pl-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[85vh] relative mt-20 bg-spyne_blue-20 border-spyne_blue-200 p-4 border-dashed border rounded-xl text-center lg:pt-10 pt-10 md:p-3 flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"h-[10vh] w-full opacity-0\",\n                    type: \"file\",\n                    accept: \"video/*\",\n                    onChange: handleFileChange\n                }, void 0, false, {\n                    fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"uploadBoxContent pb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"m-auto mb-6\",\n                            src: \"https://prod-spyne-website.s3.amazonaws.com/ba4d9e53-62ef-46bb-a529-4f2a2dc67404\",\n                            alt: \"Upload\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"videoFile\",\n                            className: \"btn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"blue-btn m-auto w-52 cursor-pointer\",\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"opacity-0 h-0\",\n                            type: \"file\",\n                            id: \"videoFile\",\n                            accept: \"video/*\",\n                            onChange: handleFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-[-12px]\",\n                            children: \"Drop your video here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/components/upload/video/uploadVideo.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VwbG9hZC92aWRlby91cGxvYWRWaWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXpCLFNBQVNDLGNBQWM7SUFDcEMsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU1HLG1CQUFtQixDQUFDQyxRQUFVO1FBQ2xDLE1BQU1DLGVBQWVELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDMUMsSUFBSUYsY0FBYztZQUNoQixNQUFNRyxXQUFXQyxJQUFJQyxlQUFlLENBQUNMO1lBQ3JDSCxPQUFPUyxJQUFJLENBQUM7Z0JBQ1ZDLFVBQVUsQ0FBQyxjQUFjLEVBQUVQLGFBQWFRLElBQUksQ0FBQyxDQUFDO2dCQUM5Q0MsT0FBTztvQkFBRUMsVUFBVUMsS0FBS0MsU0FBUyxDQUFDVDtnQkFBVTtZQUM5QztRQUNGLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NELFdBQVU7b0JBQ1ZFLE1BQUs7b0JBQ0xDLFFBQU87b0JBQ1BDLFVBQVVwQjs7Ozs7OzhCQUVaLDhEQUFDZTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUNDTCxXQUFVOzRCQUNWTSxLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7c0NBRU4sOERBQUNDOzRCQUFNQyxTQUFROzRCQUFZVCxXQUFVO3NDQUNuQyw0RUFBQ1U7Z0NBQUVWLFdBQVU7MENBQXNDOzs7Ozs7Ozs7OztzQ0FFckQsOERBQUNDOzRCQUNDRCxXQUFVOzRCQUNWRSxNQUFLOzRCQUNMUyxJQUFHOzRCQUNIUixRQUFPOzRCQUNQQyxVQUFVcEI7Ozs7OztzQ0FFWiw4REFBQzBCOzRCQUFFVixXQUFVO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktdG9vbHMvLi9jb21wb25lbnRzL3VwbG9hZC92aWRlby91cGxvYWRWaWRlby5qcz85Y2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRWaWRlbygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgICAgY29uc3QgdmlkZW9VcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkRmlsZSk7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBgdmlkZW8vcHJldmlldy8ke3NlbGVjdGVkRmlsZS5uYW1lfWAsXG4gICAgICAgIHF1ZXJ5OiB7IGZpbGVOYW1lOiBKU09OLnN0cmluZ2lmeSh2aWRlb1VybCkgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6cHItNSB4bDpwci01IG1kOnBsLTAgeGw6cGwtMCBwci0yIHBsLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bODV2aF0gcmVsYXRpdmUgbXQtMjAgYmctc3B5bmVfYmx1ZS0yMCBib3JkZXItc3B5bmVfYmx1ZS0yMDAgcC00IGJvcmRlci1kYXNoZWQgYm9yZGVyIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgbGc6cHQtMTAgcHQtMTAgbWQ6cC0zIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzEwdmhdIHctZnVsbCBvcGFjaXR5LTBcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJ2aWRlby8qXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRCb3hDb250ZW50IHBiLTNcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtLWF1dG8gbWItNlwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3Byb2Qtc3B5bmUtd2Vic2l0ZS5zMy5hbWF6b25hd3MuY29tL2JhNGQ5ZTUzLTYyZWYtNDZiYi1hNTI5LTRmMmEyZGM2NzQwNFwiXG4gICAgICAgICAgICBhbHQ9XCJVcGxvYWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2aWRlb0ZpbGVcIiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsdWUtYnRuIG0tYXV0byB3LTUyIGN1cnNvci1wb2ludGVyXCI+VXBsb2FkPC9wPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTAgaC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwidmlkZW9GaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cInZpZGVvLypcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC1bLTEycHhdXCI+RHJvcCB5b3VyIHZpZGVvIGhlcmU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiVXBsb2FkVmlkZW8iLCJyb3V0ZXIiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJzZWxlY3RlZEZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInZpZGVvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHVzaCIsInBhdGhuYW1lIiwibmFtZSIsInF1ZXJ5IiwiZmlsZU5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJsYWJlbCIsImh0bWxGb3IiLCJwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/upload/video/uploadVideo.js\n");

/***/ }),

/***/ "./pages/upload/video/index.js":
/*!*************************************!*\
  !*** ./pages/upload/video/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_upload_video_uploadVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/upload/video/uploadVideo */ \"./components/upload/video/uploadVideo.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_upload_video_uploadVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/Kashish_work/Desktop/SDE-I-Frontend-Assignment/pages/upload/video/index.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQvdmlkZW8vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDdEM7QUFFWCxTQUFTRSxRQUFRO0lBQzlCLHFCQUFPLDhEQUFDRiw0RUFBV0E7Ozs7O0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS10b29scy8uL3BhZ2VzL3VwbG9hZC92aWRlby9pbmRleC5qcz81ZTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcGxvYWRWaWRlbyBmcm9tIFwiQC9jb21wb25lbnRzL3VwbG9hZC92aWRlby91cGxvYWRWaWRlb1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIDxVcGxvYWRWaWRlby8+O1xufVxuXG4iXSwibmFtZXMiOlsiVXBsb2FkVmlkZW8iLCJSZWFjdCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/upload/video/index.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/upload/video/index.js"));
module.exports = __webpack_exports__;

})();