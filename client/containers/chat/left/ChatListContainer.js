import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, unreadChat, currentChat } = state.inst.chat.left
  const { catagory, currentThemes} = state.inst.chat.display.themes
  const themes = catagory[currentThemes]
  console.log('--- state: ', state.inst.chat);
  return (
    {
      chatListMap,
      chatListKey,
      currentChat: currentChat.mesId,
      unreadChat: unreadChat.messages,
      themes,
      multiChat: location.pathname == '/chat'? false: true
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadChat: (mesId, status) => {
        dispatch(getMessages(mesId, Date.now(), 10, false, status))
        dispatch({type: 'ADD_MEMBER_VISIBILITY', display: 'none'})
    },
    getChatList: () => {
        dispatch(getChatList(Date.now(), 10))
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
