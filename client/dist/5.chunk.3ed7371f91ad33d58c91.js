webpackJsonp([5],{878:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_allString__ = __webpack_require__(22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_sync_auth__ = __webpack_require__(191);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_store__ = __webpack_require__(922);\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    var g = function g(lang) {\n        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config_allString__["a" /* get */])(state.user.language, lang);\n    };\n    return {\n        isloading: state.auth == \'REGISTER_STORE_ING\',\n        iswhoing: state.auth == \'WHO_ING\' || state.auth == \'WAIT\',\n        isusername: state.user.username,\n        registerStoreOK: state.auth == \'REGISTER_STORE_SUCCESS\'\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {};\n};\n\nvar RegisterstoreContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__components_register_store__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["default"] = (RegisterstoreContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{"presets":[["es2015",{"modules":false}],"react"],"plugins":["babel-plugin-root-import","transform-object-rest-spread"]}!./containers/register-store/index.js\n// module id = 878\n// module chunks = 5\n\n//# sourceURL=webpack:///./containers/register-store/index.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22transform-object-rest-spread%22%5D%7D')},887:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sync_auth__ = __webpack_require__(191);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__support__ = __webpack_require__(47);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return registerStore; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\n\nvar registerStore = function registerStore(newindex, store) {\n    return function (dispatch) {\n        dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_auth__[\"a\" /* authAction */])('REGISTER_STORE_ING'));\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__support__[\"a\" /* flet */])('/registerstore', _extends({}, store, {\n            longitude: 1,\n            latitude: 1\n        }), {\n            status: 'success|error'\n        }).then(function (_ref) {\n            var status = _ref.status,\n                store = _ref.store;\n\n            if (status == 'success') dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_auth__[\"b\" /* authData */])('REGISTER_STORE_SUCCESS', { newindex: newindex, store: store }));else if (status == 'error') dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sync_auth__[\"a\" /* authAction */])('REGISTER_STORE_FAILED'));\n        });\n    };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./actions/asyn/register-store/index.js\n// module id = 887\n// module chunks = 5\n\n//# sourceURL=webpack:///./actions/asyn/register-store/index.js?")},920:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\nvar Left = function Left(_ref) {\n    var STORE = _ref.STORE;\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        "div",\n        { className: "text-center" },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            "h3",\n            null,\n            "KajKai ",\n            STORE\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "./images/market.png", style: { width: \'320\' } })\n    );\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Left);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/register-store/Left.js\n// module id = 920\n// module chunks = 5\n\n//# sourceURL=webpack:///./components/register-store/Left.js?')},921:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Right = function (_React$Component) {\n    _inherits(Right, _React$Component);\n\n    function Right(props) {\n        _classCallCheck(this, Right);\n\n        return _possibleConstructorReturn(this, (Right.__proto__ || Object.getPrototypeOf(Right)).call(this, props));\n    }\n\n    _createClass(Right, [{\n        key: "render",\n        value: function render() {\n            var _props = this.props,\n                STORE = _props.STORE,\n                ENTER_STORE = _props.ENTER_STORE,\n                ENTER_ADDRESS = _props.ENTER_ADDRESS,\n                PHONE_STORE = _props.PHONE_STORE,\n                ADDRESS_WARNING = _props.ADDRESS_WARNING,\n                PHONE_WARNING = _props.PHONE_WARNING,\n                STORE_NAME_WARNING = _props.STORE_NAME_WARNING,\n                CATEGORY_WARNING = _props.CATEGORY_WARNING,\n                ENTER_CATEGORY = _props.ENTER_CATEGORY,\n                handleChange = _props.handleChange,\n                storename = _props.storename,\n                address = _props.address,\n                phone = _props.phone,\n                warningstorename = _props.warningstorename,\n                newindex = _props.newindex,\n                warningcategory = _props.warningcategory,\n                warningaddress = _props.warningaddress,\n                warningphone = _props.warningphone,\n                category = _props.category,\n                onRegisterClick = _props.onRegisterClick;\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                "div",\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    "h3",\n                    null,\n                    "Register ",\n                    STORE\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    "div",\n                    { className: "form-group" + (warningstorename ? " has-error" : "") },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control input-md",\n                        value: storename, placeholder: ENTER_STORE,\n                        onChange: function onChange(e) {\n                            return handleChange(\'storename\', e.target.value);\n                        }\n                    }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        "div",\n                        { className: "help-block" },\n                        warningstorename && STORE_NAME_WARNING\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    "div",\n                    { className: "form-group" + (warningcategory ? " has-error" : "") },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control input-md",\n                        value: category, placeholder: ENTER_CATEGORY,\n                        onChange: function onChange(e) {\n                            return handleChange(\'category\', e.target.value);\n                        }\n                    }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        "div",\n                        { className: "help-block" },\n                        warningcategory && CATEGORY_WARNING\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    "div",\n                    { className: "form-group" + (warningaddress ? " has-error" : "") },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control input-md",\n                        value: address, placeholder: ENTER_ADDRESS,\n                        onChange: function onChange(e) {\n                            return handleChange(\'address\', e.target.value);\n                        }\n                    }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        "div",\n                        { className: "help-block" },\n                        warningaddress && ADDRESS_WARNING\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    "div",\n                    { className: "form-group" + (warningphone ? " has-error" : "") },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control input-md",\n                        value: phone, placeholder: PHONE_STORE,\n                        onChange: function onChange(e) {\n                            return handleChange(\'phone\', e.target.value);\n                        }\n                    }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        "div",\n                        { className: "help-block" },\n                        warningphone && PHONE_WARNING\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    "div",\n                    { className: "btn btn-default btn-md",\n                        onClick: function onClick() {\n                            return onRegisterClick(newindex, storename, address, phone, category);\n                        } },\n                    "REGISTER STORE"\n                )\n            );\n        }\n    }]);\n\n    return Right;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__["a"] = (Right);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/register-store/Right.js\n// module id = 921\n// module chunks = 5\n\n//# sourceURL=webpack:///./components/register-store/Right.js?')},922:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(87);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_register_store_Left__ = __webpack_require__(943);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_register_store_Right__ = __webpack_require__(944);\n\n\n\n\n\n\nvar RegisterStore = function RegisterStore(_ref) {\n    var STORE = _ref.STORE,\n        isusername = _ref.isusername,\n        iswhoing = _ref.iswhoing,\n        onOpenStore = _ref.onOpenStore,\n        registerStoreOK = _ref.registerStoreOK;\n\n    if (iswhoing) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null);\n    if (!isusername) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__[\"c\" /* Redirect */], { to: '/register' });\n    if (registerStoreOK) {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__[\"c\" /* Redirect */], { to: '/store' });\n    }\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        { className: 'container-fluid' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { className: 'row' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'col-xs-6',\n                    style: { minHeight: 700 - 146, height: window.innerHeight - 146, minwidth: 460, backgroundColor: 'white' } },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_register_store_Left__[\"a\" /* default */], null)\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'col-xs-6',\n                    style: { minHeight: 700 - 146, height: window.innerHeight - 146, minwidth: 460 } },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_register_store_Right__[\"a\" /* default */], null)\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RegisterStore);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/register-store/index.js\n// module id = 922\n// module chunks = 5\n\n//# sourceURL=webpack:///./components/register-store/index.js?")},943:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_allString__ = __webpack_require__(22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_store_Left__ = __webpack_require__(920);\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    var g = function g(lang) {\n        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config_allString__["a" /* get */])(state.user.language, lang);\n    };\n    return {\n        STORE: g(\'STORE\')\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {};\n};\n\nvar LeftContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_register_store_Left__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["a"] = (LeftContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/register-store/Left.js\n// module id = 943\n// module chunks = 5\n\n//# sourceURL=webpack:///./containers/register-store/Left.js?')},944:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_allString__ = __webpack_require__(22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_register_store__ = __webpack_require__(887);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support__ = __webpack_require__(340);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_store_Right__ = __webpack_require__(921);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    var g = function g(lang) {\n        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config_allString__[\"a\" /* get */])(state.user.language, lang);\n    };\n    var _state$inst$registers = state.inst.registerstore.right,\n        isclick = _state$inst$registers.isclick,\n        storename = _state$inst$registers.storename,\n        address = _state$inst$registers.address,\n        phone = _state$inst$registers.phone,\n        category = _state$inst$registers.category;\n\n    return {\n        STORE: g('STORE'),\n        ENTER_STORE: g('ENTER_STORE'),\n        STORE_NAME_WARNING: g('STORE_NAME_WARNING'),\n        ENTER_ADDRESS: g('ENTER_ADDRESS'),\n        ADDRESS_WARNING: g('ADDRESS_WARNING'),\n        PHONE_STORE: g('PHONE_STORE'),\n        PHONE_WARNING: g('PHONE_WARNING'),\n        ENTER_CATEGORY: g('ENTER_CATEGORY'),\n        CATEGORY_WARNING: g('CATEGORY_WARNING'),\n        storename: storename,\n        address: address,\n        phone: phone,\n        category: category,\n        warningstorename: isclick && !storename,\n        warningaddress: isclick && !address,\n        warningphone: isclick && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__support__[\"a\" /* checkPhone */])(phone),\n        warningcategory: isclick && !category,\n        newindex: state.user.storeList.length\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {\n        handleChange: function handleChange(type, value) {\n            dispatch({ type: 'REGISTER_STORE_RIGHT_HANDLE_CHANGE', value: _defineProperty({}, type, value) });\n        },\n        onRegisterClick: function onRegisterClick(newindex, storename, address, phone, category) {\n            if (storename && address && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__support__[\"a\" /* checkPhone */])(phone) && category) {\n                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_register_store__[\"a\" /* registerStore */])(newindex, {\n                    storename: storename,\n                    address: address,\n                    phone: phone,\n                    category: category\n                }));\n            } else {\n                dispatch({ type: 'REGISTER_STORE_RIGHT_CLICK_REGISTER' });\n            }\n        }\n    };\n};\n\nvar RightContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__components_register_store_Right__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RightContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/register-store/Right.js\n// module id = 944\n// module chunks = 5\n\n//# sourceURL=webpack:///./containers/register-store/Right.js?")}});