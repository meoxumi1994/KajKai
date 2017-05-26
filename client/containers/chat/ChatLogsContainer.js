import { connect } from 'react-redux'
import ChatLogs from '~/components/chat/ChatLogs'
import { findName } from '../support'

const mapStateToProps = (state, ownProps) => {
  const { chatLog, currentUser } = state.inst.chat.center
  const user = state.user
  return (
    {
      chatLog,
      currentUser,
      user
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatLogsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatLogs)

export default ChatLogsContainer
