"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var styles = {
  global: function global(props) {
    return {
      body: {
        bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)
      }
    };
  }
};
var components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: function baseStyle(props) {
      return {
        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
      };
    }
  }
};
var fonts = {
  heading: "'M PLUS Rounded 1c'"
};
var colors = {
  glassTeal: '#88ccca'
};
var config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};
var theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
  config: config,
  styles: styles,
  components: components,
  fonts: fonts,
  colors: colors
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNzljYzI5YWYwMTg3NmNhYjhiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUUsTUFBTSxHQUFHO0FBQ1BDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsS0FBSztBQUFBLFdBQUs7QUFDbEJDLE1BQUFBLElBQUksRUFBRTtBQUNOQyxRQUFBQSxFQUFFLEVBQUVMLDREQUFJLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBSixDQUEyQkcsS0FBM0I7QUFERTtBQURZLEtBQUw7QUFBQTtBQUROLENBQWY7QUFRQSxJQUFNRyxVQUFVLEdBQUc7QUFDZkMsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLFFBQVEsRUFBRTtBQUNOLHVCQUFrQjtBQUNkQyxRQUFBQSxjQUFjLEVBQUUsV0FERjtBQUVkQyxRQUFBQSxRQUFRLEVBQUUsRUFGSTtBQUdkQyxRQUFBQSxtQkFBbUIsRUFBRSxDQUhQO0FBSWRDLFFBQUFBLG1CQUFtQixFQUFFLFNBSlA7QUFLZEMsUUFBQUEsdUJBQXVCLEVBQUUsQ0FMWDtBQU1kQyxRQUFBQSxTQUFTLEVBQUUsQ0FORztBQU9kQyxRQUFBQSxZQUFZLEVBQUU7QUFQQTtBQURaO0FBREwsR0FETTtBQWNmQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsU0FBUyxFQUFFLG1CQUFBZCxLQUFLO0FBQUEsYUFBSztBQUNqQmUsUUFBQUEsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxTQUFELEVBQVksU0FBWixDQUFKLENBQTJCRyxLQUEzQixDQURVO0FBRWpCUSxRQUFBQSxtQkFBbUIsRUFBRTtBQUZKLE9BQUw7QUFBQTtBQURkO0FBZFMsQ0FBbkI7QUFzQkEsSUFBTVEsS0FBSyxHQUFHO0FBQ1ZDLEVBQUFBLE9BQU8sRUFBRTtBQURDLENBQWQ7QUFJQSxJQUFNQyxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsU0FBUyxFQUFFO0FBREEsQ0FBZjtBQUlBLElBQU1DLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxnQkFBZ0IsRUFBRSxNQURQO0FBRVhDLEVBQUFBLGtCQUFrQixFQUFFO0FBRlQsQ0FBZjtBQUtBLElBQU1DLEtBQUssR0FBRzNCLDZEQUFXLENBQUM7QUFBQ3dCLEVBQUFBLE1BQU0sRUFBTkEsTUFBRDtBQUFTdEIsRUFBQUEsTUFBTSxFQUFOQSxNQUFUO0FBQWlCSyxFQUFBQSxVQUFVLEVBQVZBLFVBQWpCO0FBQTZCYSxFQUFBQSxLQUFLLEVBQUxBLEtBQTdCO0FBQW9DRSxFQUFBQSxNQUFNLEVBQU5BO0FBQXBDLENBQUQsQ0FBekI7QUFDQSwrREFBZUssS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcykgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIEhlYWRpbmc6IHtcclxuICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAnc2VjdGlvbi10aXRsZScgOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcclxufVxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7Y29uZmlnLCBzdHlsZXMsIGNvbXBvbmVudHMsIGZvbnRzLCBjb2xvcnN9KVxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdsYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=