import { connect } from 'react-redux'
import ChatCenter from '~/components/chat/center'
import { getMessage } from '~/actions/asyn/chat'

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

const ChatCenterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatCenter)

export default ChatCenterContainer
