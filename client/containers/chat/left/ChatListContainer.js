import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/visibility'
import { getMessage } from '~/actions/asyn/chat/'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey } = state.inst.chat.left
  const { user } = state
  console.log('STATE ', state.inst.chat)
  return (
    {
      chatListMap,
      chatListKey,
      user
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewChat: () => {
      // dispatch(updateMessageListVisibility(true))
      // dispatch(updateCreateChatVisibility(true))
  },
  loadChat: (mesId) => {
      dispatch(getMessage(mesId))
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
