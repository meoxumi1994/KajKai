import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, addMessage, getMessage, getChatId, getTarget, chatWaiting } from '~/actions/asyn/chat'
import { joinChat } from '~/actions/asyn/chat'
import { updateMessageListVisibility, updateCreateChatVisibility } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  console.log('chatList ',state.inst.chat.left.chatList);
  return (
    {
      chatList: state.inst.chat.left.chatList,
      lazyLoad: state.inst.chat.center.lazyLoad
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  joinChat: (chat) => {
      dispatch(joinChat(chat))
      dispatch(updateMessageListVisibility(true))
      dispatch(updateCreateChatVisibility(false))
  },
  getChatList: () => {
      dispatch(getChatList())
      dispatch(chatWaiting())
  },
  createNewChat: () => {
      dispatch(updateMessageListVisibility(false))
      dispatch(updateCreateChatVisibility(true))
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
