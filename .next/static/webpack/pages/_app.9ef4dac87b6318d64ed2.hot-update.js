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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
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
                lineNumber: 83,
                columnNumber: 23
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
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
                  lineNumber: 89,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/portfolio",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "Portfolio"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/posts",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZWY0ZGFjODdiNjMxOGQ2NGVkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtBQUNBOzs7QUFFQSxJQUFNZ0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUMxQyxNQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBeEI7QUFDQSxNQUFNSSxhQUFhLEdBQUdSLG1FQUFpQixDQUFDLFNBQUQsRUFBWSxnQkFBWixDQUF2QztBQUNBLHNCQUNJLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFSSxJQUFoQjtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQ0ksT0FBQyxFQUFFLENBRFA7QUFFSSxRQUFFLEVBQUVHLE1BQU0sR0FBRyxXQUFILEdBQWlCRSxTQUYvQjtBQUdJLFdBQUssRUFBRUYsTUFBTSxHQUFHLFNBQUgsR0FBZUMsYUFIaEM7QUFBQSxnQkFLS0Y7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0FkRDs7R0FBTUg7VUFFb0JIOzs7S0FGcEJHOztBQWdCTixJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDcEIsTUFBUU4sSUFBUixHQUFpQk0sS0FBakIsQ0FBUU4sSUFBUjtBQUVBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQ0EsWUFBUSxFQUFDLE9BRFQ7QUFFQSxNQUFFLEVBQUMsS0FGSDtBQUdBLEtBQUMsRUFBQyxNQUhGO0FBSUEsTUFBRSxFQUFFTCxtRUFBaUIsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUpyQjtBQUtBLFNBQUssRUFB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dUJBSkYsZUFPRSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUMsUUFBZjtBQUF3Qix3QkFBUSxNQUFoQztBQUFBLHVDQUNFLDhEQUFDLHNEQUFEO0FBQVUsb0JBQUUsRUFBRUEsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrRUgsQ0FyRUQ7O0lBQU1tQjtVQVFNVjs7O01BUk5VO0FBdUVOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9uYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi4vbG9nbydcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEJveCxcclxuICAgIExpbmssXHJcbiAgICBTdGFjayxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGbGV4LFxyXG4gICAgTWVudSxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgTWVudUxpc3QsXHJcbiAgICBNZW51QnV0dG9uLFxyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXHJcbn0gICBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuaW1wb3J0IFRoZW1lVG9nZ2xlQnV0dG9uIGZyb20gJy4uL3RoZW1lLXRvZ2dsZS1idXR0b24nXHJcblxyXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIGNoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxyXG4gICAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgcD17Mn1cclxuICAgICAgICAgICAgICAgIGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX1cclxuICAgICAgICBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOidibHVyKDEwcHgnfX1cclxuICAgICAgICB6SW5kZXg9ezF9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgcD17Mn1cclxuICAgICAgICAgICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxyXG4gICAgICAgICAgICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbiA9IFwiY2VudGVyXCIgbXI9ezV9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cclxuICAgICAgICAgICAgICAgIDxMb2dvIC8+ICBcclxuICAgICAgICAgICAgPC9IZWFkaW5nPiBcclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBmbGV4R3Jvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcG9ydGZvbGlvXCIgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wb3N0c1wiIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8VGhlbWVUb2dnbGVCdXR0b24gLz5cclxuICAgICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17e2Jhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVCdXR0b25cclxuICAgICAgICAgICAgICAgIGFzPXtJY29uQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5BYm91dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+UG9ydGZvbGlvPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9wb3N0c1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PlBvc3RzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwidW5kZWZpbmVkIiwiTmF2YmFyIiwicHJvcHMiLCJiYWNrZHJvcEZpbHRlciIsImJhc2UiLCJtZCJdLCJzb3VyY2VSb290IjoiIn0=