import { connect } from 'react-redux'
import Chat from '~/components/chat'
import { findName } from '../support'
import { getChatList } from '~/actions/asyn/chat/restful'
import { getSingleChat } from '~/components/chat/chatStyles'

const mapStateToProps = (state, ownProps) => {
  const { singleKey, messagesMap } = state.inst.chat.center
  return (
    {
      messagesKey: singleKey,
      messagesMap,
      styles,
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChat: (mesId) => {
      dispatch({type: 'SET_CURRENT_CHAT', mesId})
  },
  getChatList: (id) => {
      dispatch(getChatList(Date.now(), 10))
  }
})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

const styles = {
      type: 'singleChat',
      top: {
          currentMainDiv: {
              backgroundColor: 'white',
              height: '7.5%',
              width: '100%',
          },
          mainDiv: {
              backgroundColor: 'white',
              height: '7.5%',
              width: '100%',
          },
          iconImg: {
              width: 35,
              height: 35,
              borderRadius: 50,
              marginRight: 10,
              marginTop: 15
          },
          hiddenImg: {
              display: 'none'
          },
          button: {
              backgroundColor: 'white',
          },
          hiddenButton: {
              display: 'none'
          },
          iconGroupDiv: {
              position: 'absolute',
              right: 10,
              top: 6,
              backgroundColor: 'white',
          },
          spliterHr: {
              marginTop: 18
          },
          displayLabel: {
            fontSize: 18,
            marginLeft: 20,
            marginTop: 22,
          },
          addMemberDiv: {
            position: 'relative',
            width: '100%'
          }
      },
      center: {
          mainDiv: {
            overflowY: 'scroll',
            height: '74%',
            backgroundColor: 'white',

          },
          rightMsg: {
              imgDiv: {
                  float: 'right',
                  marginRight: 20
              },
              imgIcon: {
                  borderRadius: 50,
                  borderWidth: 1,
                  width: 40,
                  height: 40,
              },
              text: {
                  marginRight: 40,
                  marginTop: 10,
                  textAlign: 'left',
              },
              bounds: {
                  backgroundColor: '#cc3333',
                  color: 'white',
                  width: 300,
                  paddingTop: 10,
                  paddingRight: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                  marginLeft: '68%'
              },
              senderDiv: {
                  color: 'grey',
                  display: 'none'
              }
          },
          leftMsg: {
              imgDiv: {
                  float: 'left',
                  marginLeft: 20,
              },
              imgIcon: {
                  borderRadius: 50,
                  borderWidth: 1,
                  width: 40,
                  height: 40
              },
              text: {
                  marginLeft: 40,
                  marginTop: 10,
              },
              bounds: {
                  backgroundColor: '#e9ebee',
                  width: 300,
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
          position: 'fixed',
          backgroundColor: 'white',
          bottom: 0,
          width: '60%',
        },
        formControl: {
          height: 50,
        },
        iconButton: {
          height: 40,
          width: 80
        }
      }
}

export default ChatContainer
