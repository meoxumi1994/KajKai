import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getMessages } from '~/actions/asyn/chat/restful'
import { setUserId } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, currentChat } = state.inst.chat.left
  return (
    {
      chatListMap,
      chatListKey,
      currentChat: currentChat.mesId,
      userId: state.user.id,
      unread: state.inst.chat.unread
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId) => {
        dispatch(getMessages(mesId, Date.now(), 'load'))
        dispatch({type: 'server/READ_CHAT', data: {mesId: mesId}})
    },
    setUserId: (id) => {
        dispatch(setUserId(id))
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
