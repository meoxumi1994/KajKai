import { connect } from 'react-redux'
import MessageList from '~/components/chat/MessageList'
import { findName } from '../support'

const mapStateToProps = (state, ownProps) => {
  const { chatLog, currentChat } = state.inst.chat.center
  const user = state.user
  const visibility = state.inst.chat.visibility.messageList
  return (
    {
      chatLog,
      currentChat,
      user,
      visibility
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const MessageListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(MessageList)

export default MessageListContainer
