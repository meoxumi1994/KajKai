import { connect } from 'react-redux'
import ChatList from '~/components/chat/ChatList'
import { getChatList, addMessage, getMessage, getChatId, getTarget } from '~/actions/asyn/chat'
import { joinChat } from '~/actions/asyn/chat'

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
  },
  getChatList: () => {
    dispatch(getChatList());
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
