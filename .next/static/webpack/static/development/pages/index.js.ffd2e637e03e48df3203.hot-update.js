webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\lee\\JStargram\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 35
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
};

_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDM0IsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSw2QkFBU0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXBCLG1EQUFTLGVBQWVKLEVBQXhCO0FBQUEsR0FBRCxDQUF0QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUdELElBQUksQ0FBQ00sTUFBTCxDQUFZLENBQVosS0FBa0IsTUFBQyxtREFBRDtBQUFZLFlBQU0sRUFBRU4sSUFBSSxDQUFDTSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRDVCO0FBRUUsV0FBTyxFQUFFLENBQ1AsTUFBQyxpRUFBRDtBQUFpQixTQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURPLEVBRVAsTUFBQywrREFBRDtBQUFlLFNBQUcsRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRk8sRUFHUCxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSE8sRUFJUCxNQUFDLDRDQUFEO0FBQVMsU0FBRyxFQUFDLE1BQWI7QUFBb0IsYUFBTyxFQUN6QixNQUFDLDJDQUFELENBQVEsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dMLEVBQUUsSUFBSUQsSUFBSSxDQUFDTyxJQUFMLENBQVVOLEVBQVYsS0FBZUEsRUFBckIsR0FFQyxtRUFDQSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsRUFFQSxNQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGQSxDQUZELEdBUUQsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVRGLENBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpPLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXNCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFVBQU0sRUFBRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBU0QsSUFBSSxDQUFDTyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBVCxDQURWO0FBRUUsU0FBSyxFQUFFUixJQUFJLENBQUNPLElBQUwsQ0FBVUMsUUFGbkI7QUFHRSxlQUFXLEVBQUVSLElBQUksQ0FBQ1MsT0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQURGLENBREY7QUFpQ0QsQ0FwQ0Q7O0dBQU1WLFE7VUFDT0csdUQ7OztLQURQSCxRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmZkMmU2MzdlMDNlNDhkZjMyMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIFBvcG92ZXIsQnV0dG9uLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUmV0d2VldE91dGxpbmVkLEhlYXJ0T3V0bGluZWQsTWVzc2FnZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyLm1lPy5pZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyID17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIi8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIvPixcclxuICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZD09PWlkIFxyXG4gICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgKX0+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9