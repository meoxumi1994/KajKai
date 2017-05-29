import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, addMessage, getMessage, getChatId, getTarget } from '~/actions/asyn/chat'
import { joinChat } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  const { chatList } = state.inst.chat.left
  return (
    {
      chatList
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChat: (chat) => {
    dispatch(joinChat(chat))
    dispatch(updateMessageListVisibility(true))
    dispatch(updateCreateChatVisibility(false))
  },
  getChatList: () => {
    dispatch(getChatList());
  },
  onNewChatClick: () => {
    dispatch(updateMessageListVisibility(false))
    dispatch(updateCreateChatVisibility(true))
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
