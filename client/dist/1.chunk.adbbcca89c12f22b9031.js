webpackJsonp([1],{

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_allString__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_store__ = __webpack_require__(358);\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    var g = function g(lang) {\n        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config_allString__[\"a\" /* get */])(state.user.language, lang);\n    };\n    var index = state.inst.store.index.index;\n\n    return {\n        iswhoing: state.auth == 'WHO_ING' || state.auth == 'WAIT',\n        isusername: state.user.username,\n        index: index\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {};\n};\n\nvar StoreContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_store__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoreContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{\"presets\":[[\"es2015\",{\"modules\":false}],\"react\"],\"plugins\":[\"babel-plugin-root-import\",\"syntax-dynamic-import\",\"transform-object-rest-spread\"]}!./containers/store/index.js\n// module id = 944\n// module chunks = 1\n\n//# sourceURL=webpack:///./containers/store/index.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22syntax-dynamic-import%22,%22transform-object-rest-spread%22%5D%7D");

/***/ })

});