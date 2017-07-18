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
      userId: state.user.id
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMessages: (mesId, multiChat) => {
        dispatch(getMessages(mesId, Date.now(), multiChat))
    },
    setUserId: (id) => {
        dispatch(setUserId(id))
    }
})

const ChatListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatList)

export default ChatListContainer
