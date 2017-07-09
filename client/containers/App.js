import { connect } from 'react-redux'
import chatStyles from '~/components/chat/chatStyles'
import App from '../components/App'
import { onWho } from '../actions/asyn/app'
import { getChatList } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
    const { width, height } = state.inst.app
    const { messagesKey, messagesMap } = state.inst.chat.center.multiChat
    return ({
        width: width,
        height: height,
        username: state.user.username,
        auth: state.auth,
        children: ownProps.children,
        messagesKey,
        messagesMap,
        styles,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onWho: () => {
        dispatch(onWho())
    },
    onScroll : (scrollTop) => {
        dispatch({ type: 'ON_SCROLL', scrollTop: scrollTop })
    },
    getChatList: (id) => {
        dispatch(getChatList(Date.now(), 10))
        dispatch({type: 'SET_USER_ID', data: {id: id}})
    }
})

const styles = {
  type: 'small',
  top: {
      currentMainDiv: {
          backgroundColor: '#cc3333',
          color: 'white',
          height: 30,
          width: 320
      },
      mainDiv: {
          backgroundColor: 'grey',
          color: 'white',
          height: 30,
          width: 320
      },
      iconImg: {
          width: 20,
          height: 20,
          borderRadius: 50,
          marginLeft: 5
      },
      iconGroupDiv: {
          position: 'absolute',
          right: 10,
          top: 6
      },
      spliterHr: {
        display: 'none',
      },
      displayLabel: {
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
      }
  },
  center: {
      mainDiv: {
        width: 320,
        height: 300,
        overflowY: 'scroll'
      },
      rightMsg: {
          imgDiv: {
              float: 'right',
          },
          imgIcon: {
              borderRadius: 50,
              borderWidth: 1,
              width: 40,
              height: 40
          },
          text: {
              marginRight: 40,
              marginTop: 10,
              textAlign: 'left',
          },
          bounds: {
              backgroundColor: '#cc3333',
              color: 'white',
              width: 200,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              borderRadius: 10,
              float: 'right',
          },
          senderDiv: {
              color: 'grey',
              display: 'none'
          }
      },
      leftMsg: {
          imgDiv: {
              float: 'left',
          },
          imgIcon: {
              borderRadius: 50,
              borderWidth: 1,
              width: 40,
              height: 40
          },
          text: {
              marginLeft: 15,
          },
          bounds: {
              backgroundColor: '#e0e0e0',
              width: 200,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              borderRadius: 10
          },
          senderDiv: {
            color: 'grey'
          }
      },
  },
  bottom: {
    inputForm: {
      width: 320
    },
    inputDiv: {
      width: '100%'
    },
    iconButton: {
      fontSize: 13
    }
  },
}

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
