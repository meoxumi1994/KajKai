import { connect } from 'react-redux'
import Chat from '~/components/chat'
import { findName } from '../support'

const mapStateToProps = (state, ownProps) => {
  const { user } = state
  const { chatListKey, chatListMap } = state.inst.chat.left
  const { messagesKey, messagesMap, currentChat, multipleChatWindow } = state.inst.chat.center
  return (
    {
      user,
      chatListKey,
      chatListMap,
      messagesKey,
      messagesMap,
      currentChat,
      multipleChatWindow
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChat: (mesId) => {
      dispatch({type: 'SET_CURRENT_CHAT', mesId})
  }
})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
