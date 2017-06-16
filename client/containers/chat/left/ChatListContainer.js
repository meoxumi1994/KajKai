import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/visibility'
import { getMessage } from '~/actions/asyn/chat/'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, unreadChat } = state.inst.chat.left
  const { user } = state
  const { currentChat } = state.inst.chat.center
  console.log('---STATE ', state);
  return (
    {
      chatListMap,
      chatListKey,
      user,
      currentChat,
      unreadChat
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadChat: (mesId) => {
      dispatch(getMessage(mesId))
      dispatch({type: 'READ_CHAT', mesId: mesId})
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
