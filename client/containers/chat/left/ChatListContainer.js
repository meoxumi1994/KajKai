import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, addMessage, getMessage, getChatId, getTarget } from '~/actions/asyn/chat'
import { joinChat } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      chatList: state.inst.chat.left.chatList,
      lazyLoad: state.inst.chat.center.lazyLoad
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getChat: (chat) => {
      dispatch(joinChat(chat))
      // visibility
      dispatch(updateMessageListVisibility(true))
      dispatch(updateCreateChatVisibility(false))
  },
  getChatList: () => {
      dispatch(getChatList());
  },
  createNewChat: () => {
      // visibility
      dispatch(updateMessageListVisibility(false))
      dispatch(updateCreateChatVisibility(true))
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
