webpackJsonp([6],{880:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_target__ = __webpack_require__(344);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_target__ = __webpack_require__(342);\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n    return {\n        iswhoing: state.auth == \'WHO_ING\' || state.auth == \'WAIT\',\n        isusername: state.user.username,\n        id: props.id\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, props) {\n    return {\n        onGetTarget: function onGetTarget(id) {\n            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_target__["a" /* getTarget */])(id));\n        }\n    };\n};\n\nvar TargetContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_target__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["default"] = (TargetContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{"presets":[["es2015",{"modules":false}],"react"],"plugins":["babel-plugin-root-import","transform-object-rest-spread"]}!./containers/target/index.js\n// module id = 880\n// module chunks = 6\n\n//# sourceURL=webpack:///./containers/target/index.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22transform-object-rest-spread%22%5D%7D')}});