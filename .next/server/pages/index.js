"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\components\\section.js";



const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
  shouldForwardProp: prop => {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
});

const Section = ({
  children,
  delay = 0
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledDiv, {
  initial: {
    y: 10,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  },
  transition: {
    duration: 0.8,
    delay
  },
  mb: 6,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nunos\\Desktop\\MyWebsite\\LesGrainsDeNuno\\pages\\index.js";




const Page = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      borderRadius: "lg",
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
      p: 3,
      align: "center",
      children: "Hello, I'm a full-stack developper kawaii based in Montreal UwU"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      display: {
        md: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        flexGrow: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
          as: "h2",
          variant: "page-title",
          children: "Nuno Silva-Pinto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          children: "Analog Photographer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        flexShrink: 0,
        mt: {
          base: 4,
          md: 0
        },
        ml: {
          md: 6
        },
        textAlign: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Travail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Paragraph"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("framer-motion");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRyxTQUFTLEdBQUdGLHdEQUFNLENBQUNELHFEQUFELEVBQWE7QUFDakNFLEVBQUFBLGlCQUFpQixFQUFFRyxJQUFJLElBQUk7QUFDekIsV0FBT0gsbUVBQWlCLENBQUNHLElBQUQsQ0FBakIsSUFBMkJBLElBQUksS0FBSyxZQUEzQztBQUNEO0FBSGdDLENBQWIsQ0FBeEI7O0FBTUEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsUUFBRjtBQUFZQyxFQUFBQSxLQUFLLEdBQUc7QUFBcEIsQ0FBRCxrQkFDWiw4REFBQyxTQUFEO0FBQ0ksU0FBTyxFQUFFO0FBQUNDLElBQUFBLENBQUMsRUFBRSxFQUFKO0FBQVFDLElBQUFBLE9BQU8sRUFBRTtBQUFqQixHQURiO0FBRUksU0FBTyxFQUFFO0FBQUNELElBQUFBLENBQUMsRUFBRSxDQUFKO0FBQU9DLElBQUFBLE9BQU8sRUFBRTtBQUFoQixHQUZiO0FBR0ksWUFBVSxFQUFFO0FBQUNDLElBQUFBLFFBQVEsRUFBRSxHQUFYO0FBQWdCSCxJQUFBQTtBQUFoQixHQUhoQjtBQUlJLElBQUUsRUFBRSxDQUpSO0FBQUEsWUFNS0Q7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBV0EsaUVBQWVELE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUNBLE1BQU1XLElBQUksR0FBRyxNQUFNO0FBQ2Ysc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFDSSw4REFBQyxpREFBRDtBQUFLLGtCQUFZLEVBQUMsSUFBbEI7QUFBdUIsUUFBRSxFQUFFRCxtRUFBaUIsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsQ0FBNUM7QUFBa0YsT0FBQyxFQUFFLENBQXJGO0FBQXdGLFdBQUssRUFBQyxRQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJLDhEQUFDLGlEQUFEO0FBQUssYUFBTyxFQUFFO0FBQUNFLFFBQUFBLEVBQUUsRUFBRTtBQUFMLE9BQWQ7QUFBQSw4QkFDSSw4REFBQyxpREFBRDtBQUFLLGdCQUFRLEVBQUUsQ0FBZjtBQUFBLGdDQUNJLDhEQUFDLHFEQUFEO0FBQVMsWUFBRSxFQUFDLElBQVo7QUFBaUIsaUJBQU8sRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU9JLDhEQUFDLGlEQUFEO0FBQUssa0JBQVUsRUFBRSxDQUFqQjtBQUNJLFVBQUUsRUFBRTtBQUFFQyxVQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXRCxVQUFBQSxFQUFFLEVBQUU7QUFBZixTQURSO0FBRUksVUFBRSxFQUFFO0FBQUVBLFVBQUFBLEVBQUUsRUFBRTtBQUFOLFNBRlI7QUFHSSxpQkFBUyxFQUFDLFFBSGQ7QUFBQSwrQkFJQSw4REFBQyxtREFBRDtBQUNJLHFCQUFXLEVBQUMsZ0JBRGhCO0FBRUkscUJBQVcsRUFBRSxDQUZqQjtBQUdJLHFCQUFXLEVBQUMsT0FIaEI7QUFJSSxrQkFBUSxFQUFDLE9BSmI7QUFLSSxpQkFBTyxFQUFDLGNBTFo7QUFNSSxzQkFBWSxFQUFDLE1BTmpCO0FBT0ksYUFBRyxFQUFDLGtCQVBSO0FBUUksYUFBRyxFQUFDO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBNEJBLDhEQUFDLHdEQUFEO0FBQVMsV0FBSyxFQUFFLEdBQWhCO0FBQUEsOEJBQ0EsOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsSUFBWjtBQUFpQixlQUFPLEVBQUMsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcUNILENBdENEOztBQXdDQSxpRUFBZUQsSUFBZjs7Ozs7Ozs7OztBQzFDQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWx2YXJnZW50aXF1ZS1ob21lcGFnZS8uL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaWx2YXJnZW50aXF1ZS1ob21lcGFnZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NpbHZhcmdlbnRpcXVlLWhvbWVwYWdlL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3NpbHZhcmdlbnRpcXVlLWhvbWVwYWdlL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3NpbHZhcmdlbnRpcXVlLWhvbWVwYWdlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBjaGFrcmEsIHNob3VsZEZvcndhcmRQcm9wIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuY29uc3QgU3R5bGVkRGl2ID0gY2hha3JhKG1vdGlvbi5kaXYsIHtcclxuICAgIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IHtcclxuICAgICAgcmV0dXJuIHNob3VsZEZvcndhcmRQcm9wKHByb3ApIHx8IHByb3AgPT09ICd0cmFuc2l0aW9uJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBkZWxheSA9IDB9KSA9PiAoXHJcbiAgICA8U3R5bGVkRGl2XHJcbiAgICAgICAgaW5pdGlhbD17e3k6IDEwLCBvcGFjaXR5OiAwfX1cclxuICAgICAgICBhbmltYXRlPXt7eTogMCwgb3BhY2l0eTogMX19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjgsIGRlbGF5IH19XHJcbiAgICAgICAgbWI9ezZ9XHJcbiAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWREaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iLCJpbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgSW1hZ2UsIHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uXCJcclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9XCJsZ1wiIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGVBbHBoYS41MDAnLCAnd2hpdGVBbHBoYS4yMDAnKX0gcD17M30gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEhlbGxvLCBJJmFwb3M7bSBhIGZ1bGwtc3RhY2sgZGV2ZWxvcHBlciBrYXdhaWkgYmFzZWQgaW4gTW9udHJlYWwgVXdVXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7bWQ6ICdmbGV4J319PlxyXG4gICAgICAgICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHZhcmlhbnQ9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bm8gU2lsdmEtUGludG9cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxwPkFuYWxvZyBQaG90b2dyYXBoZXI8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH1cclxuICAgICAgICAgICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1sPXt7IG1kOiA2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ3aGl0ZUFscGhhLjgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9udW5vLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxTZWN0aW9uIGRlbGF5PXswLjF9PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiB2YXJpYW50PVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgIFRyYXZhaWxcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPHA+UGFyYWdyYXBoPC9wPiAgIFxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIm1vdGlvbiIsImNoYWtyYSIsInNob3VsZEZvcndhcmRQcm9wIiwiU3R5bGVkRGl2IiwiZGl2IiwicHJvcCIsIlNlY3Rpb24iLCJjaGlsZHJlbiIsImRlbGF5IiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsIkNvbnRhaW5lciIsIkJveCIsIkhlYWRpbmciLCJJbWFnZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiUGFnZSIsIm1kIiwiYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=