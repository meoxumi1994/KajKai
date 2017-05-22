webpackJsonp([3],{

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_profile__ = __webpack_require__(356);\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    return {\n        iswhoing: state.auth == 'WHO_ING' || state.auth == 'WAIT',\n        isusername: state.user.username\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {};\n};\n\nvar ProfileContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_profile__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{\"presets\":[[\"es2015\",{\"modules\":false}],\"react\"],\"plugins\":[\"babel-plugin-root-import\",\"syntax-dynamic-import\",\"transform-object-rest-spread\"]}!./containers/profile/index.js\n// module id = 942\n// module chunks = 3\n\n//# sourceURL=webpack:///./containers/profile/index.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22syntax-dynamic-import%22,%22transform-object-rest-spread%22%5D%7D");

/***/ })

});