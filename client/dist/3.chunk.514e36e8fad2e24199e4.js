webpackJsonp([3],{646:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_chat__ = __webpack_require__(741);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(657);\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return state;\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {};\n};\n\nvar ChatContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_chat__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["default"] = (ChatContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib?{"presets":[["es2015",{"modules":false}],"react"],"plugins":["babel-plugin-root-import","transform-object-rest-spread"]}!./containers/chat/index.js\n// module id = 646\n// module chunks = 3\n\n//# sourceURL=webpack:///./containers/chat/index.js?./~/babel-loader/lib?%7B%22presets%22:%5B%5B%22es2015%22,%7B%22modules%22:false%7D%5D,%22react%22%5D,%22plugins%22:%5B%22babel-plugin-root-import%22,%22transform-object-rest-spread%22%5D%7D')},657:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_allString__ = __webpack_require__(23);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return checkUserName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return checkEmail; });\n/* unused harmony export checkBasicPhone */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return checkPhone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return checkPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return checkloginId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return checkAge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return FilteringPhoneDefaultVietName; });\n\n\nvar g = function g(lang) {\n    return __WEBPACK_IMPORTED_MODULE_0__config_allString__[\"b\" /* default */].get(state.user.language, lang);\n};\n\nvar verifyCharacterVietname = function verifyCharacterVietname(username) {\n    username = username.toUpperCase();\n    var VIETNAMESE_DIACRITIC_CHARACTERS = \"ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ\";\n\n    var numspace = 0;\n    var curdisspace = 0;\n    var minspace = 10;\n    for (var i = 0; i < username.length; i++) {\n        var ok = false;\n        if (username[i] == \" \") {\n            numspace++;\n            if (minspace > curdisspace) minspace = curdisspace;\n            curdisspace = 0;\n            continue;\n        }\n        curdisspace++;\n        if (/^[A-Za-z]+$/.test(username[i])) continue;\n        for (var j = 0; j < VIETNAMESE_DIACRITIC_CHARACTERS.length; j++) {\n            if (username[i] == VIETNAMESE_DIACRITIC_CHARACTERS[j]) {\n                ok = true;\n                break;\n            }\n        }\n        if (!ok) return false;\n    }\n    var isTwoSpace = username.search(\"  \") != -1;\n    if (isTwoSpace || numspace > 5 || minspace < 2) return false;\n    return true;\n};\n\nvar positiveNumber = function positiveNumber(value) {\n    if (!value) return false;\n    for (var i = 0; i < value.length; i++) {\n        if (value[i] < '0' || '9' < value[i]) return false;\n    }\n    return true;\n};\n\nvar checkUserName = function checkUserName(username) {\n    if (!username) return 'error';\n    var length = username.length;\n    if (length > 45 || length < 5 || length > 0 && !verifyCharacterVietname(username)) return 'error';\n    return null;\n};\n\nvar checkEmail = function checkEmail(email) {\n    if (!email) return 'error';\n    var ismail = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email);\n    if (!ismail) return 'error';\n    return null;\n};\n\nvar checkBasicPhone = function checkBasicPhone(phone) {\n    if (!phone) return 'error';\n    for (var i = 0; i < phone.length; i++) {\n        if (phone[i] != '+' || phone[i] < '0' || '9' < phone[i]) return 'error';\n    }\n    return null;\n};\n\nvar checkPhone = function checkPhone(phone) {\n    if (!phone) return 'error';\n    var isphone = /^\\+?\\d{1,3}?[- .]?\\(?(?:\\d{2,3})\\)?[- .]?\\d\\d\\d[- .]?\\d\\d\\d\\d$/.test(phone);\n    if (!isphone) return 'error';\n    return null;\n};\n\nvar checkPassword = function checkPassword(password) {\n    if (!password) return 'error';\n    var length = password.length;\n    if (0 <= length && length < 5) return 'error';\n    return null;\n};\n\nvar checkloginId = function checkloginId(loginId) {\n    if (!loginId) return 'error';\n    var length = loginId.length;\n    var isphone = /^\\+?\\d{1,3}?[- .]?\\(?(?:\\d{2,3})\\)?[- .]?\\d\\d\\d[- .]?\\d\\d\\d\\d$/.test(loginId);\n    var ismail = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(loginId);\n    if (!ismail && !isphone) return 'error';\n    return null;\n};\n\nvar checkAge = function checkAge(age) {\n    if (!positiveNumber(age)) return 'error';\n    if (age > 100) return 'error';\n    return null;\n};\n\nvar FilteringPhoneDefaultVietName = function FilteringPhoneDefaultVietName(phone) {\n    var newphone = void 0;\n    if (phone[0] == '0') newphone = '+84' + phone.substring(1);else if (phone[0] != '+') newphone = '+' + phone;else newphone = phone;\n    return newphone;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/support.js\n// module id = 657\n// module chunks = 1 3 5 6\n\n//# sourceURL=webpack:///./containers/support.js?")},662:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__support__ = __webpack_require__(59);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(677);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getChatList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return joinChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMessage; });\n/* unused harmony export getTarget */\n/* unused harmony export getChatId */\n\n\n\n// Get list of recented chats\nvar getChatList = function getChatList(offset, length) {\n    return function (dispatch) {\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__support__["a" /* flet */])(\'/getchatlist\', {\n            offset: 0,\n            length: 10\n        }, {\n            chatList: [{\n                id: "",\n                avatarUrl: "",\n                name: ""\n            }]\n        }).then(function (response) {\n            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions__["a" /* loadChatList */])(response.chatList));\n        });\n    };\n};\n\n// [socket.io] Join chat\nvar joinChat = function joinChat(chat) {\n    return function (dispatch) {\n        dispatch({\n            type: "server/JOIN_CHAT",\n            data: {\n                person: chat.id\n            }\n        });\n    };\n};\n\n// [socket.io] Send message\nvar sendMessage = function sendMessage(msg) {\n    return function (dispatch) {\n        dispatch({\n            type: "server/ADD_MESSAGE",\n            data: {\n                mesId: msg.mesId,\n                message: msg.text,\n                time: Date.now()\n            }\n        });\n    };\n};\n\n// Get message\nvar getMessage = function getMessage(chat) {\n    return function (dispatch) {\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__support__["a" /* flet */])(\'/getmessage\', {\n            id: chat.id,\n            offset: chat.offset,\n            length: 10\n        }, {\n            messages: []\n        }).then(function (response) {\n            dispatch({ type: \'LOAD_MORE_MESSAGE\', messages: response.messages });\n        });\n    };\n};\n\nvar getTarget = function getTarget(chat) {\n    return function (dispatch) {\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__support__["a" /* flet */])(\'/gettarget\', {\n            id: chat.id\n        }, {\n            user: {\n                username: "",\n                listUrls: [],\n                storeList: null,\n                avatarUrl: "",\n                id: ""\n            }\n        }).then(function (response) {\n            // console.log(\'response /gettarget\', response);\n            dispatch(joinChat(response.user));\n        });\n    };\n};\n\nvar getChatId = function getChatId(chat, lazyLoad) {\n    return function (dispatch) {\n        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__support__["a" /* flet */])(\'/getchatid\', {\n            person: chat.id\n        }, {\n            id: ""\n        }).then(function (response) {\n            var castChatObj = {\n                id: chat.id,\n                username: chat.name == undefined ? chat.username : chat.name,\n                avatarUrl: chat.avatarUrl,\n                mesId: response.id\n            };\n            dispatch(getMessage(castChatObj, lazyLoad));\n        });\n    };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./actions/asyn/chat/index.js\n// module id = 662\n// module chunks = 3\n\n//# sourceURL=webpack:///./actions/asyn/chat/index.js?')},677:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return updateMessageListVisibility; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return updateCreateChatVisibility; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return loadChatList; });\n/* unused harmony export loadChat */\nvar updateMessageListVisibility = function updateMessageListVisibility(display) {\n    return {\n        type: 'UPDATE_MESSAGELIST_VISIBILITY',\n        display: display\n    };\n};\n\nvar updateCreateChatVisibility = function updateCreateChatVisibility(display) {\n    return {\n        type: 'UPDATE_CREATECHAT_VISIBILITY',\n        display: display\n    };\n};\n\nvar loadChatList = function loadChatList(chatList) {\n    return {\n        type: 'LOAD_CHAT_LIST',\n        chatList: chatList\n    };\n};\n\nvar loadChat = function loadChat(messages, chat) {\n    return {\n        type: 'LOAD_CHAT',\n        messages: messages,\n        chat: chat\n    };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./actions/asyn/chat/actions.js\n// module id = 677\n// module chunks = 3\n\n//# sourceURL=webpack:///./actions/asyn/chat/actions.js?")},738:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(255);\n\n\n\nvar SendMessage = function SendMessage(_ref) {\n  var mesId = _ref.mesId,\n      sendMessage = _ref.sendMessage,\n      visibility = _ref.visibility;\n\n  var msg = void 0;\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    'div',\n    { style: { padding: 10, display: visibility } },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'form',\n      { style: { position: 'relative' }, onSubmit: function onSubmit(e) {\n          e.preventDefault();\n          if (msg.value.trim()) {\n            sendMessage({ mesId: mesId, text: msg.value });\n            msg.value = '';\n          }\n        } },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        { className: 'input-group' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__[\"f\" /* FormControl */], {\n          style: { width: 750 },\n          inputRef: function inputRef(ref) {\n            msg = ref;\n          },\n          placeholder: 'Enter message'\n        }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__[\"b\" /* Button */],\n          { type: 'submit', style: { marginLeft: 10 } },\n          'Send'\n        )\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SendMessage);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/chat/bottom/SendMessage.js\n// module id = 738\n// module chunks = 3\n\n//# sourceURL=webpack:///./components/chat/bottom/SendMessage.js?")},739:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\nvar Message = function Message(_ref) {\n    var message = _ref.message,\n        time = _ref.time,\n        user = _ref.user,\n        style = _ref.style;\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        "div",\n        { key: time },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            "div",\n            { className: "btn btn-transparent btn-xs", style: style.img },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: user.avatarUrl, width: "33", height: "33" })\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            "div",\n            { style: style.text },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                "div",\n                null,\n                message\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                "small",\n                { className: "text-muted" },\n                user.username\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Message);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/chat/center/Message.js\n// module id = 739\n// module chunks = 3\n\n//# sourceURL=webpack:///./components/chat/center/Message.js?')},740:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(255);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Message__ = __webpack_require__(739);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar style = {\n  alignRight: {\n    img: {\n      float: 'right',\n      marginRight: 20\n    },\n    text: {\n      marginRight: 40,\n      textAlign: 'right'\n    }\n  },\n  alignLeft: {\n    img: {\n      float: 'left',\n      marginLeft: 20\n    },\n    text: {\n      marginLeft: 40\n    }\n  },\n  messageListDiv: {\n    width: 900,\n    height: 600,\n    overflow: 'scroll'\n  }\n};\n\nvar MessageList = function (_React$Component) {\n  _inherits(MessageList, _React$Component);\n\n  function MessageList(props) {\n    _classCallCheck(this, MessageList);\n\n    return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));\n  }\n\n  _createClass(MessageList, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          myInfo = _props.myInfo,\n          partnerInfo = _props.partnerInfo,\n          messages = _props.messages,\n          visibility = _props.visibility,\n          lazyLoad = _props.lazyLoad;\n\n      if (messages.length > 0) {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'div',\n          { style: { display: visibility } },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'h3',\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'i',\n              null,\n              partnerInfo.username\n            )\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            { style: style.messageListDiv },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'div',\n              {\n                onClick: function onClick() {\n                  return _this2.props.showMore({\n                    id: partnerInfo.id,\n                    offset: lazyLoad.offset + 10\n                  });\n                },\n                style: { textAlign: 'center' } },\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'i',\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                  'a',\n                  null,\n                  '(Show more)'\n                )\n              )\n            ),\n            messages.reverse().map(function (message) {\n              return myInfo.id === JSON.parse(message).id ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Message__[\"a\" /* default */], _extends({\n                key: JSON.parse(message).time\n              }, JSON.parse(message), {\n                user: myInfo,\n                style: style.alignRight\n              })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Message__[\"a\" /* default */], _extends({\n                key: JSON.parse(message).time\n              }, JSON.parse(message), {\n                user: partnerInfo,\n                style: style.alignLeft\n              }));\n            })\n          )\n        );\n      } else {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'div',\n          { style: { display: visibility } },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'h3',\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'i',\n              null,\n              partnerInfo.username\n            )\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: style.messageListDiv })\n        );\n      }\n    }\n  }]);\n\n  return MessageList;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (MessageList);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/chat/center/MessageList.js\n// module id = 740\n// module chunks = 3\n\n//# sourceURL=webpack:///./components/chat/center/MessageList.js?")},741:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(255);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_chat_left_ChatListContainer__ = __webpack_require__(790);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_chat_bottom_SendMessageContainer__ = __webpack_require__(788);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_chat_center_MessageListContainer__ = __webpack_require__(789);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_chat_top_NewChatContainer__ = __webpack_require__(791);\n\n\n\n\n\n\n\nvar Chat = function Chat() {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    \'div\',\n    { style: { paddingTop: 10 } },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* Grid */],\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],\n        { lg: 3, lgPull: 1 },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* Row */],\n          { style: { float: \'left\' } },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_chat_left_ChatListContainer__["a" /* default */], null)\n        )\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],\n        { lg: 14, lgOffset: 3 },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_chat_top_NewChatContainer__["a" /* default */], null),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_chat_center_MessageListContainer__["a" /* default */], null),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_chat_bottom_SendMessageContainer__["a" /* default */], null)\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Chat);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/chat/index.js\n// module id = 741\n// module chunks = 3\n\n//# sourceURL=webpack:///./components/chat/index.js?')},742:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(255);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\nvar ChatList = function (_React$Component) {\n    _inherits(ChatList, _React$Component);\n\n    function ChatList(props) {\n        _classCallCheck(this, ChatList);\n\n        return _possibleConstructorReturn(this, (ChatList.__proto__ || Object.getPrototypeOf(ChatList)).call(this, props));\n    }\n\n    _createClass(ChatList, [{\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                chatList = _props.chatList,\n                lazyLoad = _props.lazyLoad,\n                joinChat = _props.joinChat,\n                createNewChat = _props.createNewChat;\n\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                null,\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'h3',\n                    null,\n                    'Recent Chat',\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__[\"b\" /* Button */],\n                        { style: { marginLeft: 65, width: 50, height: 50 }, onClick: function onClick() {\n                                return createNewChat();\n                            } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: { width: 27, height: 27 }, src: './images/newMessage.png' })\n                    )\n                ),\n                this.props.chatList.map(function (chat) {\n                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__[\"b\" /* Button */],\n                        { style: { width: 250, marginBottom: 10 }, key: chat.id, onClick: function onClick() {\n                                return joinChat(chat);\n                            } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'btn btn-transparent btn-xs', style: { float: 'left' } },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: chat.avatarUrl, width: '38', height: '38' })\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { style: { marginLeft: 40 } },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'div',\n                                null,\n                                chat.name\n                            ),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'small',\n                                { className: 'text-muted' },\n                                'Online'\n                            )\n                        )\n                    );\n                })\n            );\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.getChatList();\n        }\n    }]);\n\n    return ChatList;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ChatList);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/chat/left/ChatList.js\n// module id = 742\n// module chunks = 3\n\n//# sourceURL=webpack:///./components/chat/left/ChatList.js?")},743:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(255);\n\n\n\nvar NewChat = function NewChat(_ref) {\n  var onNewChatSubmit = _ref.onNewChatSubmit,\n      visibility = _ref.visibility;\n\n  var msg = void 0;\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    'div',\n    { style: { display: visibility, marginRight: 1000 } },\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'form',\n      { style: { position: 'relative' }, onSubmit: function onSubmit(e) {\n          e.preventDefault();\n          if (msg.value.trim()) {\n            onNewChatSubmit({ id: msg.value });\n          }\n        } },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        { className: 'input-group' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__[\"f\" /* FormControl */], {\n          style: { width: 600 },\n          inputRef: function inputRef(ref) {\n            msg = ref;\n          },\n          placeholder: 'To'\n        }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__[\"b\" /* Button */],\n          { type: 'submit' },\n          'Send'\n        )\n      )\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NewChat);\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/chat/top/NewChat.js\n// module id = 743\n// module chunks = 3\n\n//# sourceURL=webpack:///./components/chat/top/NewChat.js?")},788:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_chat_bottom_SendMessage__ = __webpack_require__(738);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__ = __webpack_require__(662);\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    mesId: state.inst.chat.center.mesId,\n    visibility: state.inst.chat.visibility.sendMessage\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    sendMessage: function sendMessage(msg) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__["a" /* sendMessage */])(msg));\n    }\n  };\n};\n\nvar SendMessageContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_chat_bottom_SendMessage__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["a"] = (SendMessageContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/chat/bottom/SendMessageContainer.js\n// module id = 788\n// module chunks = 3\n\n//# sourceURL=webpack:///./containers/chat/bottom/SendMessageContainer.js?')},789:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_chat_center_MessageList__ = __webpack_require__(740);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__ = __webpack_require__(662);\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  // console.log(\'state \',state);\n  return {\n    myInfo: state.user,\n    partnerInfo: state.inst.chat.center.user,\n    messages: state.inst.chat.center.messages,\n    visibility: state.inst.chat.visibility.messageList,\n    lazyLoad: state.inst.chat.center.lazyLoad\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    showMore: function showMore(chat) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__["b" /* getMessage */])(chat));\n    }\n  };\n};\n\nvar MessageListContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_chat_center_MessageList__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["a"] = (MessageListContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/chat/center/MessageListContainer.js\n// module id = 789\n// module chunks = 3\n\n//# sourceURL=webpack:///./containers/chat/center/MessageListContainer.js?')},790:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_chat_left_ChatList__ = __webpack_require__(742);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__ = __webpack_require__(662);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_asyn_chat_actions__ = __webpack_require__(677);\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    chatList: state.inst.chat.left.chatList,\n    lazyLoad: state.inst.chat.center.lazyLoad\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    joinChat: function joinChat(chat) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__["c" /* joinChat */])(chat));\n      // visibility\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_asyn_chat_actions__["b" /* updateMessageListVisibility */])(true));\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_asyn_chat_actions__["c" /* updateCreateChatVisibility */])(false));\n    },\n    getChatList: function getChatList() {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat__["d" /* getChatList */])());\n    },\n    createNewChat: function createNewChat() {\n      // visibility\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_asyn_chat_actions__["b" /* updateMessageListVisibility */])(false));\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_asyn_chat_actions__["c" /* updateCreateChatVisibility */])(true));\n    }\n  };\n};\n\nvar ChatListContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__components_chat_left_ChatList__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["a"] = (ChatListContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/chat/left/ChatListContainer.js\n// module id = 790\n// module chunks = 3\n\n//# sourceURL=webpack:///./containers/chat/left/ChatListContainer.js?')},791:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_asyn_chat__ = __webpack_require__(662);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat_actions__ = __webpack_require__(677);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_chat_top_NewChat__ = __webpack_require__(743);\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    visibility: state.inst.chat.visibility.newChat\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    onNewChatSubmit: function onNewChatSubmit(chat) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_asyn_chat__["c" /* joinChat */])(chat));\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat_actions__["b" /* updateMessageListVisibility */])(true));\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_asyn_chat_actions__["c" /* updateCreateChatVisibility */])(false));\n    }\n  };\n};\n\nvar NewChatContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__components_chat_top_NewChat__["a" /* default */]);\n\n/* harmony default export */ __webpack_exports__["a"] = (NewChatContainer);\n\n//////////////////\n// WEBPACK FOOTER\n// ./containers/chat/top/NewChatContainer.js\n// module id = 791\n// module chunks = 3\n\n//# sourceURL=webpack:///./containers/chat/top/NewChatContainer.js?')}});