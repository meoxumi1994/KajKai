import { connect } from 'react-redux'
import ChatList from '~/components/chat/left/ChatList'
import { getMessages, getChatList } from '~/actions/asyn/chat/restful'
import { setUserId, changeDisplay } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap, chatListKey, currentChat, lazyLoad } = state.inst.chat.left
  return (
    {
      chatListMap,
      chatListKey,
      currentChat: currentChat.mesId,
      userId: state.user.id,
      unread: state.inst.chat.unread,
      lazyLoad
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId) => {
        dispatch(getMessages(mesId, Date.now(), 'init'))
        dispatch({type: 'server/READ_CHAT', data: {mesId: mesId}})
        dispatch(changeDisplay('ADD_MEMBER', mesId, false))
    },
    setUserId: (id) => {
        dispatch(setUserId(id))
    },
    getChat: (offset) => {
        dispatch(getChatList(offset))
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
