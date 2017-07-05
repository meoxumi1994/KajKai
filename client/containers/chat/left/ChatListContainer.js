import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, currentChat } = state.inst.chat.left
  return (
    {
      chatListMap,
      chatListKey,
      currentChat: currentChat.mesId,
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadChat: (mesId, status) => {
        dispatch(getMessages(mesId, Date.now(), 10, status))
    },
    getChatList: () => {
        dispatch(getChatList(Date.now(), 10))
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
