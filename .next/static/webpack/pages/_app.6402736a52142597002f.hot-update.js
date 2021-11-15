"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/navbar.js":
/*!**************************************!*\
  !*** ./components/layouts/navbar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_nunos_Desktop_MyWebsite_LesGrainsDeNuno_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo */ "./components/logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme-toggle-button */ "./components/theme-toggle-button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\components\\layouts\\navbar.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_nunos_Desktop_MyWebsite_LesGrainsDeNuno_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var LinkItem = function LinkItem(_ref) {
  _s();

  var href = _ref.href,
      path = _ref.path,
      children = _ref.children;
  var active = path === href;
  var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)('gray200', 'whiteAlpha.900');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
      p: 2,
      bg: active ? 'glassTeal' : undefined,
      color: active ? '#202023' : inactiveColor,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(LinkItem, "dl0xx8ZlQuUn9JhHFu16yTlHTaE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];
});

_c = LinkItem;

var Navbar = function Navbar(props) {
  _s2();

  var path = props.path;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, _objectSpread(_objectSpread({
    position: "fixed",
    as: "nav",
    w: "100%",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)('#ffffff40', '#20202380'),
    style: {
      backdropFilter: 'blur(10px'
    },
    zIndex: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
      display: "flex",
      p: 2,
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
        align: "center",
        mr: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
          as: "h1",
          size: "lg",
          letterSpacing: 'tighter',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
        direction: {
          base: 'column',
          md: 'row'
        },
        display: {
          base: 'none',
          md: 'flex'
        },
        width: {
          base: 'full',
          md: 'auto'
        },
        alignItems: "center",
        flexGrow: 1,
        mt: {
          base: 4,
          md: 0
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {
          href: "/portfolio",
          path: path,
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        flex: 1,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
          ml: 2,
          display: {
            base: 'inline-block',
            md: 'none'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {
              as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.HamburgerIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 23
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/portfolio",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "Portfolio"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/posts",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);
};

_s2(Navbar, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];
});

_c2 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "LinkItem");
$RefreshReg$(_c2, "Navbar");

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

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\components\\theme-toggle-button.js",
    _this = undefined,
    _s = $RefreshSig$();





var ThemeToggleButton = function ThemeToggleButton() {
  _s();

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    "arial-label": "Toggle theme",
    colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),
    icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 47
    }, _this)),
    onClick: toggleColorMode
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_s(ThemeToggleButton, "z6iVz21kxQGTgymWp2190T2RIQw=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue];
});

_c = ThemeToggleButton;
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggleButton);

var _c;

$RefreshReg$(_c, "ThemeToggleButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NDAyNzM2YTUyMTQyNTk3MDAyZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtBQUNBOzs7QUFFQSxJQUFNZ0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUMxQyxNQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBeEI7QUFDQSxNQUFNSSxhQUFhLEdBQUdSLG1FQUFpQixDQUFDLFNBQUQsRUFBWSxnQkFBWixDQUF2QztBQUNBLHNCQUNJLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFSSxJQUFoQjtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQ0ksT0FBQyxFQUFFLENBRFA7QUFFSSxRQUFFLEVBQUVHLE1BQU0sR0FBRyxXQUFILEdBQWlCRSxTQUYvQjtBQUdJLFdBQUssRUFBRUYsTUFBTSxHQUFHLFNBQUgsR0FBZUMsYUFIaEM7QUFBQSxnQkFLS0Y7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0FkRDs7R0FBTUg7VUFFb0JIOzs7S0FGcEJHOztBQWdCTixJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDcEIsTUFBUU4sSUFBUixHQUFpQk0sS0FBakIsQ0FBUU4sSUFBUjtBQUVBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQ0EsWUFBUSxFQUFDLE9BRFQ7QUFFQSxNQUFFLEVBQUMsS0FGSDtBQUdBLEtBQUMsRUFBQyxNQUhGO0FBSUEsTUFBRSxFQUFFTCxtRUFBaUIsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUpyQjtBQUtBLFNBQUssRUFB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b3V0cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvJ1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgQm94LFxyXG4gICAgTGluayxcclxuICAgIFN0YWNrLFxyXG4gICAgSGVhZGluZyxcclxuICAgIEZsZXgsXHJcbiAgICBNZW51LFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBNZW51TGlzdCxcclxuICAgIE1lbnVCdXR0b24sXHJcbiAgICBJY29uQnV0dG9uLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWVcclxufSAgIGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVUb2dnbGVCdXR0b24gZnJvbSAnLi4vdGhlbWUtdG9nZ2xlLWJ1dHRvbidcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXHJcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBwPXsyfVxyXG4gICAgICAgICAgICAgICAgYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjM4MCcpfVxyXG4gICAgICAgIHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6J2JsdXIoMTBweCd9fVxyXG4gICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICBwPXsyfVxyXG4gICAgICAgICAgICAgICAgbWF4Vz1cImNvbnRhaW5lci5tZFwiXHJcbiAgICAgICAgICAgICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduID0gXCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz4gIFxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+IFxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdmbGV4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt7IGJhc2U6ICdmdWxsJywgbWQ6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wb3J0Zm9saW9cIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgICAgIFBvcnRmb2xpb1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL3Bvc3RzXCIgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgICAgICBQb3N0c1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3tiYXNlOiAnaW5saW5lLWJsb2NrJywgbWQ6J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGljb249ezxIYW1idXJnZXJJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+QWJvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3BvcnRmb2xpb1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PlBvcnRmb2xpbzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcG9zdHNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5Qb3N0czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQge1N1bkljb24sIE1vb25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuXHJcbmNvbnN0IFRoZW1lVG9nZ2xlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhbC1sYWJlbCA9XCJUb2dnbGUgdGhlbWVcIlxyXG4gICAgICAgIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfVxyXG4gICAgICAgIGljb249e3VzZUNvbG9yTW9kZVZhbHVlKDxNb29uSWNvbiAvPiwgPFN1bkljb24gLz4pfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cclxuICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbiJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhhbWJ1cmdlckljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJ1bmRlZmluZWQiLCJOYXZiYXIiLCJwcm9wcyIsImJhY2tkcm9wRmlsdGVyIiwiYmFzZSIsIm1kIiwidXNlQ29sb3JNb2RlIiwiU3VuSWNvbiIsIk1vb25JY29uIiwidG9nZ2xlQ29sb3JNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==