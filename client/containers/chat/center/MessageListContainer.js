import { connect } from 'react-redux'
import MessageList from '~/components/chat/center/MessageList'
import { loadMoreMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  const { chatLog, currentChat } = state.inst.chat.center
  const user = state.user
  const visibility = state.inst.chat.visibility.messageList
  const lazyLoad = state.inst.chat.center.lazyLoad
  return (
    {
      chatLog,
      currentChat,
      user,
      visibility,
      lazyLoad
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onShowMoreClick: (id, lazyLoad) => {
      dispatch(loadMoreMessage(id, lazyLoad))
  }
})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
