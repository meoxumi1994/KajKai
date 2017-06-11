import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { } from '~/actions/asyn/chat'
import { } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey } = state.inst.chat.left
  const { user } = state
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
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
