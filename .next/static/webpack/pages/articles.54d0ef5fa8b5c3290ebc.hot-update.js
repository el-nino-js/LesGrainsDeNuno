"use strict";
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./components/grid-item.js":
/*!*********************************!*\
  !*** ./components/grid-item.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridItem": function() { return /* binding */ GridItem; },
/* harmony export */   "ArticleGridItem": function() { return /* binding */ ArticleGridItem; },
/* harmony export */   "GridItemStyle": function() { return /* binding */ GridItemStyle; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\components\\grid-item.js",
    _this = undefined;






var GridItem = function GridItem(_ref) {
  var children = _ref.children,
      href = _ref.href,
      title = _ref.title,
      thumbnail = _ref.thumbnail;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    w: "100%",
    align: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkBox, {
      cursor: "pointer",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: thumbnail,
        alt: title,
        className: "grid-item-thumbnail",
        placeholder: "blur",
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkOverlay, {
        href: href,
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
          mt: 2,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
        fontSize: 14,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};
_c = GridItem;
var ArticleGridItem = function ArticleGridItem(_ref2) {
  var children = _ref2.children,
      id = _ref2.id,
      title = _ref2.title,
      thumbnail = _ref2.thumbnail;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    w: "100%",
    align: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/articles/".concat(id),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkBox, {
        cursor: "pointer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: thumbnail,
          alt: title,
          className: "grid-item-thumbnail",
          placeholder: "blur"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkOverlay, {
          href: "/articles/".concat(id),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
            mt: 2,
            fontSize: 20,
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
          fontSize: 14,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};
_c2 = ArticleGridItem;
var GridItemStyle = function GridItemStyle() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {
    styles: "\n        .grid-item-thumbnail {\n            border-radius: 12px;\n        }\n    "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};
_c3 = GridItemStyle;

var _c, _c2, _c3;

$RefreshReg$(_c, "GridItem");
$RefreshReg$(_c2, "ArticleGridItem");
$RefreshReg$(_c3, "GridItemStyle");

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

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/grid-item */ "./components/grid-item.js");
/* harmony import */ var _public_images_2021_jacob_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/2021/jacob.jpg */ "./public/images/2021/jacob.jpg");
/* harmony import */ var _public_images_2021_camille_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/2021/camille.jpg */ "./public/images/2021/camille.jpg");
/* harmony import */ var _public_images_2021_baby_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/2021/baby.jpg */ "./public/images/2021/baby.jpg");
/* harmony import */ var _public_images_2021_lena_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/2021/lena.png */ "./public/images/2021/lena.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\pages\\articles.js",
    _this = undefined;










var Articles = function Articles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {
      as: "h3",
      fontSize: 20,
      mb: 4,
      children: "Articles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {
      columns: [1, 1, 2],
      gap: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
        delay: 0.3,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_grid_item__WEBPACK_IMPORTED_MODULE_1__.ArticleGridItem, {
          id: "jacoblecoq",
          title: "JacobLeCoq",
          thumbnail: _public_images_2021_jacob_jpg__WEBPACK_IMPORTED_MODULE_2__.default,
          children: "Un vivifiante sortie avec Jacob le coq!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
        delay: 0.4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_grid_item__WEBPACK_IMPORTED_MODULE_1__.ArticleGridItem, {
          id: "santaclaus",
          title: "SantaClaus",
          thumbnail: _public_images_2021_camille_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          children: "Le monde secret du P\xE8re No\xEBl avec Cam et Gabriela"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
      delay: 0.2,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
        my: 6
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {
        as: "h3",
        fontSize: 20,
        mb: 4,
        children: "Collaborations"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {
      columns: [1, 1, 2],
      gap: 6,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_grid_item__WEBPACK_IMPORTED_MODULE_1__.ArticleGridItem, {
          id: "baby",
          title: "Baby",
          thumbnail: _public_images_2021_baby_jpg__WEBPACK_IMPORTED_MODULE_4__.default,
          children: "1001 astuces pour \xEAtre un kawaii baby (\u3065\uFF61\u25D5\u203F\u203F\u25D5\uFF61)\u3065"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_0__.default, {
        delay: 0.5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_grid_item__WEBPACK_IMPORTED_MODULE_1__.ArticleGridItem, {
          id: "lena",
          title: "Lena",
          thumbnail: _public_images_2021_lena_png__WEBPACK_IMPORTED_MODULE_5__.default,
          children: "Pourquoi Lena est tout simplement la meilleure waifu?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Articles;
/* harmony default export */ __webpack_exports__["default"] = (Articles);

var _c;

$RefreshReg$(_c, "Articles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZXMuNTRkMGVmNWZhOGI1YzMyOTBlYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLE1BQW1CQyxLQUFuQixRQUFtQkEsS0FBbkI7QUFBQSxNQUEwQkMsU0FBMUIsUUFBMEJBLFNBQTFCO0FBQUEsc0JBQ3BCLDhEQUFDLGlEQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBYyxTQUFLLEVBQUMsUUFBcEI7QUFBQSwyQkFDSSw4REFBQyxxREFBRDtBQUFTLFlBQU0sRUFBRSxTQUFqQjtBQUFBLDhCQUNJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFFQSxTQUFaO0FBQ0EsV0FBRyxFQUFFRCxLQURMO0FBRUEsaUJBQVMsRUFBQyxxQkFGVjtBQUdBLG1CQUFXLEVBQUMsTUFIWjtBQUlBLGVBQU8sRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9BLDhEQUFDLHlEQUFEO0FBQWEsWUFBSSxFQUFFRCxJQUFuQjtBQUF5QixjQUFNLEVBQUMsUUFBaEM7QUFBQSwrQkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUUsRUFBRSxDQUFWO0FBQUEsb0JBQWNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQQSxlQVVBLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQVEsRUFBRSxFQUFoQjtBQUFBLGtCQUFxQkY7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUFqQjtLQUFNRDtBQWlCTixJQUFNSyxlQUFl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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRVEsOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsSUFBWjtBQUFpQixnQkFBUSxFQUFFLEVBQTNCO0FBQStCLFVBQUUsRUFBRSxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSixlQXlCSSw4REFBQyx3REFBRDtBQUFZLGFBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFyQjtBQUFnQyxTQUFHLEVBQUUsQ0FBckM7QUFBQSw4QkFDSSw4REFBQyx3REFBRDtBQUFBLCtCQUNJLDhEQUFDLGtFQUFEO0FBQWlCLFlBQUUsRUFBQyxNQUFwQjtBQUEyQixlQUFLLEVBQUMsTUFBakM7QUFBd0MsbUJBQVMsRUFBRUMsaUVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBTUksOERBQUMsd0RBQUQ7QUFBUyxhQUFLLEVBQUUsR0FBaEI7QUFBQSwrQkFDSSw4REFBQyxrRUFBRDtBQUFpQixZQUFFLEVBQUMsTUFBcEI7QUFBMkIsZUFBSyxFQUFDLE1BQWpDO0FBQXdDLG1CQUFTLEVBQUVDLGlFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0MsQ0F6Q0Q7O0tBQU1DO0FBMkNOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC1pdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgQm94LCBUZXh0LCBMaW5rQm94LCBMaW5rT3ZlcmxheSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRJdGVtID0gKHsgY2hpbGRyZW4sIGhyZWYsIHRpdGxlLCB0aHVtYm5haWwgfSkgPT4gKFxyXG4gICAgPEJveCB3PVwiMTAwJVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmtCb3ggY3Vyc29yID1cInBvaW50ZXJcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcclxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDxMaW5rT3ZlcmxheSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPFRleHQgbXQ9ezJ9Pnt0aXRsZX08L1RleHQ+XHJcbiAgICAgICAgPC9MaW5rT3ZlcmxheT5cclxuICAgICAgICA8VGV4dCBmb250U2l6ZT17MTR9PntjaGlsZHJlbn08L1RleHQ+XHJcbiAgICAgICAgPC9MaW5rQm94PlxyXG4gICAgPC9Cb3g+XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlR3JpZEl0ZW0gPSAoe2NoaWxkcmVuLCBpZCwgdGl0bGUsIHRodW1ibmFpbH0pID0+IChcclxuICAgIDxCb3ggdz1cIjEwMCVcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtgL2FydGljbGVzLyR7aWR9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rQm94IGN1cnNvcj1cInBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbS10aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmtPdmVybGF5IGhyZWY9e2AvYXJ0aWNsZXMvJHtpZH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgIG10PXsyfSBmb250U2l6ZT17MjB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsxNH0+e2NoaWxkcmVufTwvVGV4dD5cclxuICAgICAgICAgICAgPC9MaW5rQm94PlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICA8L0JveD4gICAgXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkSXRlbVN0eWxlID0gKCkgPT4gKFxyXG4gICAgPEdsb2JhbCBzdHlsZXM9e2BcclxuICAgICAgICAuZ3JpZC1pdGVtLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgYH1cclxuICAgIC8+XHJcbikiLCJpbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIFNpbXBsZUdyaWQsIERpdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nXHJcbmltcG9ydCB7IEFydGljbGVHcmlkSXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ3JpZC1pdGVtJ1xyXG5cclxuaW1wb3J0IHRodW1iSmFjb2JMZUNvcSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzLzIwMjEvamFjb2IuanBnJ1xyXG5pbXBvcnQgdGh1bWJTYW50YUNsYXVzIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvMjAyMS9jYW1pbGxlLmpwZydcclxuaW1wb3J0IHRodW1iQmFieSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzLzIwMjEvYmFieS5qcGcnXHJcbmltcG9ydCB0aHVtYkxlbmEgZnJvbSAnLi4vcHVibGljL2ltYWdlcy8yMDIxL2xlbmEucG5nJ1xyXG5cclxuXHJcbmNvbnN0IEFydGljbGVzID0gKCkgPT4ge1xyXG5yZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgZm9udFNpemU9ezIwfSBtYj17NH0+XHJcbiAgICAgICAgICAgIEFydGljbGVzIFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsMSwyXX0gZ2FwPXs2fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuM30+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUdyaWRJdGVtIGlkPVwiamFjb2JsZWNvcVwiIHRpdGxlPVwiSmFjb2JMZUNvcVwiIHRodW1ibmFpbD17dGh1bWJKYWNvYkxlQ29xfT5cclxuICAgICAgICAgICAgICAgICAgICBVbiB2aXZpZmlhbnRlIHNvcnRpZSBhdmVjIEphY29iIGxlIGNvcSEgIFxyXG4gICAgICAgICAgICAgICAgPC9BcnRpY2xlR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuNH0+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUdyaWRJdGVtIGlkPVwic2FudGFjbGF1c1wiIHRpdGxlPVwiU2FudGFDbGF1c1wiIHRodW1ibmFpbD17dGh1bWJTYW50YUNsYXVzfT5cclxuICAgICAgICAgICAgICAgICAgICBMZSBtb25kZSBzZWNyZXQgZHUgUMOocmUgTm/Dq2wgYXZlYyBDYW0gZXQgR2FicmllbGFcclxuICAgICAgICAgICAgICAgIDwvQXJ0aWNsZUdyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG5cclxuICAgICAgICA8U2VjdGlvbiBkZWxheT17MC4yfT5cclxuICAgICAgICAgICAgPERpdmlkZXIgbXk9ezZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgZm9udFNpemU9ezIwfSBtYj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sbGFib3JhdGlvbnNcclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxLCAxLCAyXX0gZ2FwPXs2fT5cclxuICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUdyaWRJdGVtIGlkPVwiYmFieVwiIHRpdGxlPVwiQmFieVwiIHRodW1ibmFpbD17dGh1bWJCYWJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAxMDAxIGFzdHVjZXMgcG91ciDDqnRyZSB1biBrYXdhaWkgYmFieSAo44Gl772h4peV4oC/4oC/4peV772hKeOBpVxyXG4gICAgICAgICAgICAgICAgPC9BcnRpY2xlR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuNX0+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZUdyaWRJdGVtIGlkPVwibGVuYVwiIHRpdGxlPVwiTGVuYVwiIHRodW1ibmFpbD17dGh1bWJMZW5hfT5cclxuICAgICAgICAgICAgICAgICAgICBQb3VycXVvaSBMZW5hIGVzdCB0b3V0IHNpbXBsZW1lbnQgbGEgbWVpbGxldXJlIHdhaWZ1P1xyXG4gICAgICAgICAgICAgICAgPC9BcnRpY2xlR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj4gICAgXHJcbiAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiSW1hZ2UiLCJCb3giLCJUZXh0IiwiTGlua0JveCIsIkxpbmtPdmVybGF5IiwiR2xvYmFsIiwiR3JpZEl0ZW0iLCJjaGlsZHJlbiIsImhyZWYiLCJ0aXRsZSIsInRodW1ibmFpbCIsIkFydGljbGVHcmlkSXRlbSIsImlkIiwiR3JpZEl0ZW1TdHlsZSIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiRGl2aWRlciIsIlNlY3Rpb24iLCJ0aHVtYkphY29iTGVDb3EiLCJ0aHVtYlNhbnRhQ2xhdXMiLCJ0aHVtYkJhYnkiLCJ0aHVtYkxlbmEiLCJBcnRpY2xlcyJdLCJzb3VyY2VSb290IjoiIn0=