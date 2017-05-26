webpackJsonp([4],{855:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_maps__ = __webpack_require__(329);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(34);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__(323);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StoreInMap__ = __webpack_require__(324);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar GettingStartedGoogleMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__["withGoogleMap"])(function (props) {\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__["GoogleMap"], {\n        defaultZoom: 14,\n        defaultCenter: { lat: 21.0135539, lng: 105.5258113 } });\n});\n\nvar Map = function (_React$Component) {\n    _inherits(Map, _React$Component);\n\n    function Map(props) {\n        _classCallCheck(this, Map);\n\n        var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));\n\n        _this.state = {\n            isList: true\n        };\n        return _this;\n    }\n\n    _createClass(Map, [{\n        key: \'changeScreenLeft\',\n        value: function changeScreenLeft() {\n            this.setState({\n                isList: !this.state.isList\n            });\n        }\n    }, {\n        key: \'render\',\n        value: function render() {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \'div\',\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \'div\',\n                    { style: { width: 300, float: \'left\', backgroundColor: \'white\', height: window.innerHeight - 46, overflow: \'scroll\' } },\n                    this.state.isList ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */], { changeScreenLeft: this.changeScreenLeft.bind(this) }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__StoreInMap__["a" /* default */], { changeScreenLeft: this.changeScreenLeft.bind(this) })\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \'div\',\n                    { style: { marginLeft: 300 } },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GettingStartedGoogleMap, {\n                        containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\'div\', { style: { height: window.innerHeight - 46 } }),\n                        mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\'div\', { style: { height: window.innerHeight - 46 } })\n                    })\n                )\n            );\n        }\n    }]);\n\n    return Map;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__["default"] = (Map);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{"presets":[["es2015",{"modules":false}],"react"],"plugins":["babel-plugin-root-import","transform-object-rest-spread"]}!./components/mapp/Map.js\n// module id = 855\n// module chunks = 4\n\n//# sourceURL=webpack:///./components/mapp/Map.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22transform-object-rest-spread%22%5D%7D')}});