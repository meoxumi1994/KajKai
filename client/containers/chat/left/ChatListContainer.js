import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'
import { readChat } from '~/actions/asyn/chat/socket'


const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, unreadChat } = state.inst.chat.left
  const { currentChat } = state.inst.chat.center.currentChat
  const { catagory, currentThemes} = state.inst.chat.display.themes
  const themes = catagory[currentThemes]
  console.log('--- state: ', state.inst.chat);
  return (
    {
      chatListMap,
      chatListKey,
      currentChat,
      unreadChat: unreadChat.messages,
      themes,
      multiChat: location.pathname == '/chat'? false: true
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadChat: (mesId, multiChat) => {
      if (mesId == 0) {
          dispatch({type: 'NEW_CHAT'})
      } else {
          dispatch(getMessages(mesId, Date.now(), 10, multiChat))
          dispatch(readChat(mesId))
      }
  }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
