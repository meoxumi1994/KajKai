import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'
import { readChat } from '~/actions/asyn/chat/socket'


const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, unreadChat } = state.inst.chat.left
  const { user } = state
  const { currentChat } = state.inst.chat.center
  const { catagory, currentThemes} = state.inst.chat.display.themes
  const themes = catagory[currentThemes]
  return (
    {
      chatListMap,
      chatListKey,
      user,
      currentChat,
      unreadChat: unreadChat.messages,
      themes,
      multiChat: location.pathname == '/chat'? false: true
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadChat: (mesId, multiChat) => {
      dispatch(getMessages(mesId, Date.now(), 10, multiChat))
      dispatch(readChat(mesId))
  },
  getChatList: () => {
      dispatch(getChatList(Date.now(), 10))
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
