import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getChatList, getMessages } from '~/actions/asyn/chat/restful'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, currentChat } = state.inst.chat.left
<<<<<<< Updated upstream
=======
  // console.log('[State] ', state);
>>>>>>> Stashed changes
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
    loadChat: (mesId, status, multiChat) => {
        dispatch(getMessages(mesId, Date.now(), 10, status, multiChat))
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
