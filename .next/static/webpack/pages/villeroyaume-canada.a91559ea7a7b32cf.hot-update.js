"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/villeroyaume-canada",{

/***/ "./pages/villeroyaume-canada.js":
/*!**************************************!*\
  !*** ./pages/villeroyaume-canada.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_nunos_Documents_GitHub_LesGrainsDeNuno_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_nunos_Documents_GitHub_LesGrainsDeNuno_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nunos_Documents_GitHub_LesGrainsDeNuno_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/bio */ \"./components/bio.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n// pages/weather.js\n\nvar _s = $RefreshSig$();\nvar Page = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null), /*#__PURE__*/ weatherData = ref[0], setWeatherData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null), randomNumber = ref1[0], setRandomNumber = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function() {\n        // Generate a random number between 1 and 5 based on the current date\n        var getStoredRandomNumber = function() {\n            var storedNumber = localStorage.getItem(\"weatherRandomNumber\");\n            if (storedNumber) {\n                setRandomNumber(parseInt(storedNumber, 10));\n            } else {\n                generateRandomNumber();\n            }\n        };\n        var generateRandomNumber = function() {\n            var currentDate = new Date();\n            var currentTime = currentDate.getTime();\n            var uniqueIdentifier = getUniqueIdentifier(); // Function to get a unique identifier (can use user ID if available)\n            var combinedSeed = \"\".concat(currentDate.toISOString().split(\"T\")[0], \"-\").concat(currentTime, \"-\").concat(uniqueIdentifier);\n            var randomValue = parseInt(combinedSeed.split(\"-\").join(\"\"), 10) % 5 + 1;\n            setRandomNumber(randomValue);\n            localStorage.setItem(\"weatherRandomNumber\", randomValue.toString());\n        };\n        var getUniqueIdentifier = function() {\n            // Implement logic to get a unique identifier for the user (e.g., user ID, session ID, etc.)\n            // You might use a library or authentication system for this purpose\n            // For simplicity, you can use a random number as a placeholder for now\n            return Math.floor(Math.random() * 100000).toString();\n        };\n        getStoredRandomNumber();\n        var fetchWeatherData = function() {\n            var _ref = _asyncToGenerator(C_Users_nunos_Documents_GitHub_LesGrainsDeNuno_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var apiKey, apiUrl, response;\n                return C_Users_nunos_Documents_GitHub_LesGrainsDeNuno_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            apiKey = \"665e91eea190260c754947e46ff00fad\";\n                            apiUrl = \"https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=\".concat(apiKey, \"&units=metric\");\n                            _ctx.next = 5;\n                            return axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(apiUrl);\n                        case 5:\n                            response = _ctx.sent;\n                            setWeatherData(response.data);\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Error fetching weather data:\", _ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function fetchWeatherData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchWeatherData();\n    }, []);\n    var isSunny = function() {\n        if (!weatherData) return false;\n        var weatherCondition = weatherData.weather[0].main.toLowerCase();\n        var isClearSky = weatherCondition === \"clear\" && weatherData.clouds.all < 20;\n        return isClearSky;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-9c573d0f533667a5\" + \" \" + \"weather-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"jsx-9c573d0f533667a5\" + \" \" + \"weather-header\",\n                children: \"\\uD83C\\uDFF0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            weatherData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"jsx-9c573d0f533667a5\" + \" \" + \"weather-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"jsx-9c573d0f533667a5\" + \" \" + \"temperature\",\n                        children: [\n                            \"Temp\\xe9rature: \",\n                            weatherData.main.temp,\n                            \"\\xb0C\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"jsx-9c573d0f533667a5\" + \" \" + \"temperature\",\n                        children: [\n                            \"T.Res: \",\n                            weatherData.main.feels_like,\n                            \"\\xb0C\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this),\n                    isSunny() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"jsx-9c573d0f533667a5\" + \" \" + \"sunny-message\",\n                        children: \"Le ciel brille sur le Villeroyaume!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"jsx-9c573d0f533667a5\" + \" \" + \"not-sunny-message\",\n                        children: \"Les nuages obscurcissent le Villeroyaume!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, _this),\n                    isSunny() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-9c573d0f533667a5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"/images/villeroyaume/canada/sunny/\".concat(randomNumber, \".jpg\"),\n                            alt: \"Sun Image\",\n                            className: \"jsx-9c573d0f533667a5\" + \" \" + \"weather-image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                            lineNumber: 95,\n                            columnNumber: 18\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"jsx-9c573d0f533667a5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"/images/villeroyaume/canada/unsunny/\".concat(randomNumber, \".jpg\"),\n                            alt: \"Nosun Image\",\n                            className: \"jsx-9c573d0f533667a5\" + \" \" + \"weather-image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                            lineNumber: 97,\n                            columnNumber: 18\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"9c573d0f533667a5\",\n                children: \".weather-container.jsx-9c573d0f533667a5{text-align:center;margin:50px auto;padding:20px;border:1px solid#ccc;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;max-width:400px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);-moz-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1)}.weather-header.jsx-9c573d0f533667a5{font-size:24px;margin-bottom:15px}.weather-info.jsx-9c573d0f533667a5{font-size:18px}.temperature.jsx-9c573d0f533667a5{margin-bottom:10px}.sunny-message.jsx-9c573d0f533667a5{color:#f90;font-weight:bold}.not-sunny-message.jsx-9c573d0f533667a5{color:#6a0dad;font-weight:bold}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nunos\\\\Documents\\\\GitHub\\\\LesGrainsDeNuno\\\\pages\\\\villeroyaume-canada.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzRCQUFFK0MsR0FBRyxFQUFDLFdBQVc7c0VBQVcsZUFBZTs7Ozs7aUNBQUc7Ozs7OzZCQUFNLGlCQUUxSCw4REFBQ1AsS0FBRzs7a0NBQUMsNEVBQUNLLEtBQUc7NEJBQUNDLEdBQUcsRUFBRSxzQ0FBcUMsQ0FBZSxNQUFJLENBQWpCOUMsWUFBWSxFQUFDLE1BQUksQ0FBQzs0QkFBRStDLEdBQUcsRUFBQyxhQUFhO3NFQUFXLGVBQWU7Ozs7O2lDQUFHOzs7Ozs2QkFBTTs7Ozs7O3FCQUc1SDs7Ozs7Ozs7OzthQXdDSixDQUNOO0NBRUg7R0EzSEtsRCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE2SFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWxsZXJveWF1bWUtY2FuYWRhLmpzP2NkNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIENoYWtyYVByb3ZpZGVyLCBCb3gsIFRleHQsIFVub3JkZXJlZExpc3QsIEhlYWRpbmcsIEltYWdlLCBMaW5rLCBMaXN0LCBMaXN0SXRlbSwgdXNlQ29sb3JNb2RlVmFsdWUsIFNpbXBsZUdyaWQsIEljb24sIEljb25CdXR0b24sIEF1ZGlvIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nXHJcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXHJcbmltcG9ydCB7IEJpb1NlY3Rpb24sIEJpb1llYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2JpbydcclxuXHJcbmltcG9ydCB7IENoZXZyb25SaWdodEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgTGF5b3V0LCB7IGFydGljbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZSdcclxuaW1wb3J0IHsgSW9Mb2dvVHdpdHRlciwgSW9Mb2dvSW5zdGFncmFtLCBJb0xvZ29HaXRodWIsIElvTG9nb1Z1ZSwgSW9Mb2dvU25hcGNoYXQgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnXHJcblxyXG5cclxuXHJcblxyXG4vLyBwYWdlcy93ZWF0aGVyLmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyYW5kb21OdW1iZXIsIHNldFJhbmRvbU51bWJlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEgYW5kIDUgYmFzZWQgb24gdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgY29uc3QgZ2V0U3RvcmVkUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWROdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlclJhbmRvbU51bWJlcicpO1xyXG4gICAgICBpZiAoc3RvcmVkTnVtYmVyKSB7XHJcbiAgICAgICAgc2V0UmFuZG9tTnVtYmVyKHBhcnNlSW50KHN0b3JlZE51bWJlciwgMTApKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tTnVtYmVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gY3VycmVudERhdGUuZ2V0VGltZSgpO1xyXG4gICAgICBjb25zdCB1bmlxdWVJZGVudGlmaWVyID0gZ2V0VW5pcXVlSWRlbnRpZmllcigpOyAvLyBGdW5jdGlvbiB0byBnZXQgYSB1bmlxdWUgaWRlbnRpZmllciAoY2FuIHVzZSB1c2VyIElEIGlmIGF2YWlsYWJsZSlcclxuXHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkU2VlZCA9IGAke2N1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXX0tJHtjdXJyZW50VGltZX0tJHt1bmlxdWVJZGVudGlmaWVyfWA7XHJcbiAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gcGFyc2VJbnQoY29tYmluZWRTZWVkLnNwbGl0KCctJykuam9pbignJyksIDEwKSAlIDUgKyAxO1xyXG4gICAgICBzZXRSYW5kb21OdW1iZXIocmFuZG9tVmFsdWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlclJhbmRvbU51bWJlcicsIHJhbmRvbVZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfTtcclxuICAgICBcclxuICAgIGNvbnN0IGdldFVuaXF1ZUlkZW50aWZpZXIgPSAoKSA9PiB7XHJcbiAgICAgIC8vIEltcGxlbWVudCBsb2dpYyB0byBnZXQgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHVzZXIgKGUuZy4sIHVzZXIgSUQsIHNlc3Npb24gSUQsIGV0Yy4pXHJcbiAgICAgIC8vIFlvdSBtaWdodCB1c2UgYSBsaWJyYXJ5IG9yIGF1dGhlbnRpY2F0aW9uIHN5c3RlbSBmb3IgdGhpcyBwdXJwb3NlXHJcbiAgICAgIC8vIEZvciBzaW1wbGljaXR5LCB5b3UgY2FuIHVzZSBhIHJhbmRvbSBudW1iZXIgYXMgYSBwbGFjZWhvbGRlciBmb3Igbm93XHJcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApLnRvU3RyaW5nKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFN0b3JlZFJhbmRvbU51bWJlcigpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZmV0Y2hXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhcGlLZXkgPSAnNjY1ZTkxZWVhMTkwMjYwYzc1NDk0N2U0NmZmMDBmYWQnO1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPU1vbnRyZWFsJmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1tZXRyaWNgO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChhcGlVcmwpO1xyXG4gICAgICAgIHNldFdlYXRoZXJEYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHdlYXRoZXIgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hXZWF0aGVyRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaXNTdW5ueSA9ICgpID0+IHtcclxuICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBpc0NsZWFyU2t5ID0gd2VhdGhlckNvbmRpdGlvbiA9PT0gJ2NsZWFyJyAmJiB3ZWF0aGVyRGF0YS5jbG91ZHMuYWxsIDwgMjA7XHJcblxyXG4gICAgcmV0dXJuIGlzQ2xlYXJTa3k7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWF0aGVyLWhlYWRlclwiPvCfj7A8L2gxPlxyXG4gICAgICB7d2VhdGhlckRhdGEgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1pbmZvXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPlRlbXDDqXJhdHVyZToge3dlYXRoZXJEYXRhLm1haW4udGVtcH3CsEM8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPlQuUmVzOiB7d2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlfcKwQzwvcD5cclxuICAgICAgICAgIHtpc1N1bm55KCkgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1bm55LW1lc3NhZ2VcIj5MZSBjaWVsIGJyaWxsZSBzdXIgbGUgVmlsbGVyb3lhdW1lITwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdC1zdW5ueS1tZXNzYWdlXCI+TGVzIG51YWdlcyBvYnNjdXJjaXNzZW50IGxlIFZpbGxlcm95YXVtZSE8L3A+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICApfSBcclxuICAgICAgICAgIHtpc1N1bm55KCkgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9e2AvaW1hZ2VzL3ZpbGxlcm95YXVtZS9jYW5hZGEvc3VubnkvJHtyYW5kb21OdW1iZXJ9LmpwZ2B9IGFsdD1cIlN1biBJbWFnZVwiIGNsYXNzTmFtZT1cIndlYXRoZXItaW1hZ2VcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj48aW1nIHNyYz17YC9pbWFnZXMvdmlsbGVyb3lhdW1lL2NhbmFkYS91bnN1bm55LyR7cmFuZG9tTnVtYmVyfS5qcGdgfSBhbHQ9XCJOb3N1biBJbWFnZVwiIGNsYXNzTmFtZT1cIndlYXRoZXItaW1hZ2VcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgKX0gXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLndlYXRoZXItY29udGFpbmVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndlYXRoZXItaGVhZGVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2VhdGhlci1pbmZvIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZW1wZXJhdHVyZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1bm55LW1lc3NhZ2Uge1xyXG4gICAgICAgICAgY29sb3I6ICNmZjk5MDA7IC8qIE9yYW5nZSBjb2xvciBmb3Igc3VubnkgbWVzc2FnZSAqL1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm90LXN1bm55LW1lc3NhZ2Uge1xyXG4gICAgICAgICAgY29sb3I6ICM2YTBkYWQ7IC8qIERhcmsgcHVycGxlIGNvbG9yIGZvciBub3Qgc3VubnkgbWVzc2FnZSAqL1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJOZXh0TGluayIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkNoYWtyYVByb3ZpZGVyIiwiQm94IiwiVGV4dCIsIlVub3JkZXJlZExpc3QiLCJIZWFkaW5nIiwiSW1hZ2UiLCJMaW5rIiwiTGlzdCIsIkxpc3RJdGVtIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTaW1wbGVHcmlkIiwiSWNvbiIsIkljb25CdXR0b24iLCJBdWRpbyIsIlNlY3Rpb24iLCJQYXJhZ3JhcGgiLCJCaW9TZWN0aW9uIiwiQmlvWWVhciIsIkNoZXZyb25SaWdodEljb24iLCJheGlvcyIsIkxheW91dCIsImFydGljbGUiLCJJb0xvZ29Ud2l0dGVyIiwiSW9Mb2dvSW5zdGFncmFtIiwiSW9Mb2dvR2l0aHViIiwiSW9Mb2dvVnVlIiwiSW9Mb2dvU25hcGNoYXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBhZ2UiLCJ3ZWF0aGVyRGF0YSIsInNldFdlYXRoZXJEYXRhIiwicmFuZG9tTnVtYmVyIiwic2V0UmFuZG9tTnVtYmVyIiwiZ2V0U3RvcmVkUmFuZG9tTnVtYmVyIiwic3RvcmVkTnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjdXJyZW50VGltZSIsImdldFRpbWUiLCJ1bmlxdWVJZGVudGlmaWVyIiwiZ2V0VW5pcXVlSWRlbnRpZmllciIsImNvbWJpbmVkU2VlZCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJyYW5kb21WYWx1ZSIsImpvaW4iLCJzZXRJdGVtIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmZXRjaFdlYXRoZXJEYXRhIiwiYXBpS2V5IiwiYXBpVXJsIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiaXNTdW5ueSIsIndlYXRoZXJDb25kaXRpb24iLCJ3ZWF0aGVyIiwibWFpbiIsInRvTG93ZXJDYXNlIiwiaXNDbGVhclNreSIsImNsb3VkcyIsImFsbCIsImRpdiIsImgxIiwicCIsInRlbXAiLCJmZWVsc19saWtlIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/villeroyaume-canada.js\n");

/***/ })

});