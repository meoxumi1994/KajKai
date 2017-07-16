import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, currentChat } = state.inst.chat.left
  // console.log('[State] ', state.inst.chat);
  return (
    {
      chatListMap,
      chatListKey,
      currentChat: currentChat.mesId,
      userId: state.user.id
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId, multiChat) => {
        dispatch(getMessages(mesId, Date.now(), multiChat))
    },
    getChatList: () => {
        dispatch(getChatList(Date.now(), 10))
    },
    setUserId: (id) => {
        dispatch({type: 'SET_USER_ID', data: {id: id}})
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
