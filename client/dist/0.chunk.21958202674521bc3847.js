webpackJsonp([0],{970:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_allString__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_user_login_register__ = __webpack_require__(347);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_register__ = __webpack_require__(356);\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    return {\n        g: function g(lang) {\n            return __WEBPACK_IMPORTED_MODULE_1__config_allString__["b" /* default */].get(state.user.language, lang);\n        },\n        iswhoing: state.auth == \'WHO_ING\' || state.auth == \'WAIT\',\n        isusername: state.user.username,\n        isregistersuccess: state.auth == \'REGISTER_SUCCESS\',\n        isloading: state.auth == \'REGISTER_ING\' || state.auth == \'LOGIN_ING\'\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {\n        changeLanguage: function changeLanguage(language) {\n            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_user_login_register__["a" /* changeLanguage */])(language));\n        }\n    };\n};\n\nvar UserLoginRegisterContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__components_user_login_register__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["default"] = (UserLoginRegisterContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{"presets":[["es2015",{"modules":false}],"react"],"plugins":["babel-plugin-root-import","transform-object-rest-spread"]}!./containers/user-login-register/index.js\n// module id = 970\n// module chunks = 0\n\n//# sourceURL=webpack:///./containers/user-login-register/index.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22transform-object-rest-spread%22%5D%7D')}});