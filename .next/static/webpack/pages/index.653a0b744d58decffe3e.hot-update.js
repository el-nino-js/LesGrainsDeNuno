"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\components\\section.js",
    _this = undefined;




var StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
});
_c = StyledDiv;

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {
    children: ["initial=", {
      y: 10,
      opacity: 0
    }, "animate=", {
      y: 0,
      opacity: 1
    }, "transition=", {
      duration: 0.8,
      delay: delay
    }, "mb=", 6]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c2 = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c, _c2;

$RefreshReg$(_c, "StyledDiv");
$RefreshReg$(_c2, "Section");

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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var Page = function Page() {
  _s();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      borderRadius: "lg",
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
      p: 3,
      align: "center",
      children: "Hello, I'm a full-stack developper kawaii based in Montreal UwU"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      display: {
        md: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
          as: "h2",
          variant: "page-title",
          children: "Nuno Silva-Pinto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Analog Photographer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        flexShrink: 0,
        mt: {
          base: 4,
          md: 0
        },
        ml: {
          md: 6
        },
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          borderColor: "whiteAlpha.800",
          borderWidth: 2,
          borderStyle: "solid",
          maxWidth: "100px",
          display: "inline-block",
          borderRadius: "full",
          src: "/images/nuno.jpg",
          alt: "Profile Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Travail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "Paragraph"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_s(Page, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue];
});

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjUzYTBiNzQ0ZDU4ZGVjZmZlM2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1HLFNBQVMsR0FBR0Ysd0RBQU0sQ0FBQ0QscURBQUQsRUFBYTtBQUNqQ0UsRUFBQUEsaUJBQWlCLEVBQUUsMkJBQUFHLElBQUksRUFBSTtBQUN2QixXQUFPSCxtRUFBaUIsQ0FBQ0csSUFBRCxDQUFqQixJQUEyQkEsSUFBSSxLQUFLLFlBQTNDO0FBQ0g7QUFIZ0MsQ0FBYixDQUF4QjtLQUFNRjs7QUFNTixJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLHdCQUFhQyxLQUFiO0FBQUEsTUFBYUEsS0FBYiwyQkFBcUIsQ0FBckI7QUFBQSxzQkFDWiw4REFBQyxTQUFEO0FBQUEsMkJBQ2E7QUFBQ0MsTUFBQUEsQ0FBQyxFQUFFLEVBQUo7QUFBUUMsTUFBQUEsT0FBTyxFQUFFO0FBQWpCLEtBRGIsY0FFYTtBQUFDRCxNQUFBQSxDQUFDLEVBQUUsQ0FBSjtBQUFPQyxNQUFBQSxPQUFPLEVBQUU7QUFBaEIsS0FGYixpQkFHZ0I7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFLEdBQVg7QUFBZ0JILE1BQUFBLEtBQUssRUFBTEE7QUFBaEIsS0FIaEIsU0FJUSxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBaEI7O01BQU1GO0FBU04sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7QUFDQSxJQUFNVyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2Ysc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFDSSw4REFBQyxpREFBRDtBQUFLLGtCQUFZLEVBQUMsSUFBbEI7QUFBdUIsUUFBRSxFQUFFRCxtRUFBaUIsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsQ0FBNUM7QUFBa0YsT0FBQyxFQUFFLENBQXJGO0FBQXdGLFdBQUssRUFBQyxRQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0ksOERBQUMsaURBQUQ7QUFBSyxhQUFPLEVBQUU7QUFBQ0UsUUFBQUEsRUFBRSxFQUFFO0FBQUwsT0FBZDtBQUFBLDhCQUNJLDhEQUFDLGlEQUFEO0FBQUssZ0JBQVEsRUFBRSxDQUFmO0FBQUEsZ0NBQ0ksOERBQUMscURBQUQ7QUFBUyxZQUFFLEVBQUMsSUFBWjtBQUFpQixpQkFBTyxFQUFDLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSSw4REFBQyxpREFBRDtBQUFLLGtCQUFVLEVBQUUsQ0FBakI7QUFDSSxVQUFFLEVBQUU7QUFBRUMsVUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0QsVUFBQUEsRUFBRSxFQUFFO0FBQWYsU0FEUjtBQUVJLFVBQUUsRUFBRTtBQUFFQSxVQUFBQSxFQUFFLEVBQUU7QUFBTixTQUZSO0FBR0ksaUJBQVMsRUFBQyxRQUhkO0FBQUEsK0JBSUEsOERBQUMsbURBQUQ7QUFDSSxxQkFBVyxFQUFDLGdCQURoQjtBQUVJLHFCQUFXLEVBQUUsQ0FGakI7QUFHSSxxQkFBVyxFQUFDLE9BSGhCO0FBSUksa0JBQVEsRUFBQyxPQUpiO0FBS0ksaUJBQU8sRUFBQyxjQUxaO0FBTUksc0JBQVksRUFBQyxNQU5qQjtBQU9JLGFBQUcsRUFBQyxrQkFQUjtBQVFJLGFBQUcsRUFBQztBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUE0QkEsOERBQUMsd0RBQUQ7QUFBUyxXQUFLLEVBQUUsR0FBaEI7QUFBQSw4QkFDQSw4REFBQyxxREFBRDtBQUFTLFVBQUUsRUFBQyxJQUFaO0FBQWlCLGVBQU8sRUFBQyxlQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0F0Q0Q7O0dBQU1EO1VBR2lDRDs7O0tBSGpDQztBQXdDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgY2hha3JhLCBzaG91bGRGb3J3YXJkUHJvcCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcbmNvbnN0IFN0eWxlZERpdiA9IGNoYWtyYShtb3Rpb24uZGl2LCB7XHJcbiAgICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZEZvcndhcmRQcm9wKHByb3ApIHx8IHByb3AgPT09ICd0cmFuc2l0aW9uJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBkZWxheSA9IDB9KSA9PiAoXHJcbiAgICA8U3R5bGVkRGl2PlxyXG4gICAgICAgIGluaXRpYWw9e3t5OiAxMCwgb3BhY2l0eTogMH19XHJcbiAgICAgICAgYW5pbWF0ZT17e3k6IDAsIG9wYWNpdHk6IDF9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC44LCBkZWxheX19XHJcbiAgICAgICAgbWI9ezZ9XHJcbiAgICA8L1N0eWxlZERpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbiIsImltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBJbWFnZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25cIlxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Qm94IGJvcmRlclJhZGl1cz1cImxnXCIgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZUFscGhhLjUwMCcsICd3aGl0ZUFscGhhLjIwMCcpfSBwPXszfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSGVsbG8sIEkmYXBvczttIGEgZnVsbC1zdGFjayBkZXZlbG9wcGVyIGthd2FpaSBiYXNlZCBpbiBNb250cmVhbCBVd1VcclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9e3ttZDogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGZsZXhHcm93PXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdmFyaWFudD1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVubyBTaWx2YS1QaW50b1xyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPHA+QW5hbG9nIFBob3RvZ3JhcGhlcjwvcD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWw9e3sgbWQ6IDYgfX1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuODAwXCJcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL251bm8uanBnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIEltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHZhcmlhbnQ9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgVHJhdmFpbFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8cD5QYXJhZ3JhcGg8L3A+ICAgXHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlIl0sIm5hbWVzIjpbIm1vdGlvbiIsImNoYWtyYSIsInNob3VsZEZvcndhcmRQcm9wIiwiU3R5bGVkRGl2IiwiZGl2IiwicHJvcCIsIlNlY3Rpb24iLCJjaGlsZHJlbiIsImRlbGF5IiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsIkNvbnRhaW5lciIsIkJveCIsIkhlYWRpbmciLCJJbWFnZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiUGFnZSIsIm1kIiwiYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=