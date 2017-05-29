import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, addMessage, getMessage, getChatId, getTarget } from '~/actions/asyn/chat'
import { joinChat } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  const chat = state.inst.chat
  const { chatList } = chat.left
  const { lazyLoad } = chat.center

  return (
    {
      chatList,
      lazyLoad
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getChat: (chat, lazyLoad) => {
      dispatch(joinChat(chat, lazyLoad))
      // visibility
      dispatch(updateMessageListVisibility(true))
      dispatch(updateCreateChatVisibility(false))
  },
  getChatList: () => {
      dispatch(getChatList());
  },
  onNewChatClick: () => {
    // visibility
      dispatch(updateMessageListVisibility(false))
      dispatch(updateCreateChatVisibility(true))
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
