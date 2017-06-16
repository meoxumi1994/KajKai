import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { getMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  const { user } = state
  const { chatListKey, chatListMap } = state.inst.chat.left
  const { messagesKey, messagesMap, multipleChatWindow } = state.inst.chat.center
  return (
    {
      user,
      chatListKey,
      chatListMap,
      messagesKey,
      messagesMap,
      multipleChatWindow
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  showMore: (chat) => {
    // dispatch(getMessage(chat))
  }
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
