"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/esm/index.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            Main: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#eaefc8\", \"#301934\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: \"#88ccca\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsSUFBTUUsTUFBTSxHQUFHO0lBQ1BDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2xCQyxJQUFJLEVBQUU7Z0JBQ05DLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUNwQztTQUNKO0tBQUM7Q0FDTDtBQUVELElBQU1HLFVBQVUsR0FBRztJQUNmQyxPQUFPLEVBQUU7UUFDTEMsUUFBUSxFQUFFO1lBQ04sZUFBZSxFQUFHO2dCQUNkQyxjQUFjLEVBQUUsV0FBVztnQkFDM0JDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QkMsbUJBQW1CLEVBQUUsU0FBUztnQkFDOUJDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFCQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsWUFBWSxFQUFFLENBQUM7YUFDbEI7U0FDSjtLQUNKO0lBQ0RDLElBQUksRUFBRTtRQUNGQyxTQUFTLEVBQUVkLFNBQUFBLEtBQUs7bUJBQUs7Z0JBQ2pCZSxLQUFLLEVBQUVsQiw0REFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ0csS0FBSyxDQUFDO2dCQUN4Q1EsbUJBQW1CLEVBQUUsQ0FBQzthQUN6QjtTQUFDO0tBQ0w7Q0FDSjtBQUVELElBQU1RLEtBQUssR0FBRztJQUNWQyxPQUFPLEVBQUUscUJBQXFCO0NBQ2pDO0FBRUQsSUFBTUMsTUFBTSxHQUFHO0lBQ1hDLFNBQVMsRUFBRSxTQUFTO0NBQ3ZCO0FBRUQsSUFBTUMsTUFBTSxHQUFHO0lBQ1hDLGdCQUFnQixFQUFFLE1BQU07SUFDeEJDLGtCQUFrQixFQUFFLElBQUk7Q0FDM0I7QUFFRCxJQUFNQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDO0lBQUN3QixNQUFNLEVBQU5BLE1BQU07SUFBRXRCLE1BQU0sRUFBTkEsTUFBTTtJQUFFSyxVQUFVLEVBQVZBLFVBQVU7SUFBRWEsS0FBSyxFQUFMQSxLQUFLO0lBQUVFLE1BQU0sRUFBTkEsTUFBTTtDQUFDLENBQUM7QUFDdEUsK0RBQWVLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICAgICAgTWFpbjoge1xyXG4gICAgICAgIGJnOiBtb2RlKCcjZWFlZmM4JywgJyMzMDE5MzQnKShwcm9wcykgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIEhlYWRpbmc6IHtcclxuICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAnc2VjdGlvbi10aXRsZScgOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcclxufVxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7Y29uZmlnLCBzdHlsZXMsIGNvbXBvbmVudHMsIGZvbnRzLCBjb2xvcnN9KVxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsIk1haW4iLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdsYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});