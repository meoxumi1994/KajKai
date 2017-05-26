import { connect } from 'react-redux'
import allString from '~/config/allString'

import { logOut } from '~/actions/asyn/user-login-register/login'
import { loadChat } from '~/actions/asyn/chat/loadChat'

import Bar from '~/components/Bar'


const demoChatLog = [
  {
    "user": "Nguyen Van A",
    "chatlog": [
      {
        "user": "Nguyen Van A",
        "text": "hello"
      },
      {
        "user": "Admin",
        "text": "hi"
      }
    ]
  },
  {
    "user": "Nguyen Van B",
    "chatlog": [
      {
        "user": "Nguyen Van B",
        "text": "nice to meet u"
      },
      {
        "user": "Admin",
        "text": "nice to meet u too"
      }
    ]
  },
  {
    "user": "Nguyen Van C",
    "chatlog": [
      {
        "user": "Nguyen Van C",
        "text": "Hi there"
      },
      {
        "user": "Admin",
        "text": "Say something"
      }
    ]
  },
  {
    "user": "Nguyen Van D",
    "chatlog": [
      {
        "user": "Nguyen Van D",
        "text": "Hi there"
      },
      {
        "user": "Admin",
        "text": "Say something"
      }
    ]
  },
  {
    "user": "Nguyen Van E",
    "chatlog": [
      {
        "user": "Nguyen Van E",
        "text": "Hi there"
      },
      {
        "user": "Admin",
        "text": "Say something"
      }
    ]
  }
]

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    isusername: state.user.username,
    avatarUrl: state.user.avatarUrl,
    isloading: (state.auth == 'WHO_ING' || state.auth == 'LOGIN_ING'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogoutClick: () => {
        dispatch(logOut())
    },
    onLoadChatClick: () => {
        dispatch({ type: 'LOAD_CHAT', chatlog: demoChatLog})
    }
})

const BarContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Bar)

export default BarContainer
