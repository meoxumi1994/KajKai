import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, unreadChat, currentChat } = state.inst.chat.left
  const { catagory, currentThemes} = state.inst.chat.display.themes
  const themes = catagory[currentThemes]
  console.log('--- state: ', state);
  return (
    {
      chatListMap,
      chatListKey,
      currentChat: currentChat.mesId,
      unreadChat: unreadChat.messages,
      themes,
      multiChat: location.pathname == '/chat'? false: true,
      auth: state.auth
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadChat: (mesId, status) => {
        dispatch(getMessages(mesId, Date.now(), 10, false, status))
    },
    getChatList: () => {
        dispatch(getChatList(Date.now(), 10))
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
