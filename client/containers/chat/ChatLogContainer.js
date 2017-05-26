import { connect } from 'react-redux'
import ChatLog from '~/components/chat/ChatLog'
import { findName } from '../support'

const mapStateToProps = (state, ownProps) => {
  const { chatLog, currentUser } = state.inst.chat.center
  const { username, id, avatarUrl } = state.user
  console.log('currentUser ',currentUser);
  return (
    {
      id,
      username,
      chatLog,
      avatarUrl,
      currentUser
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatLogContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatLog)

export default ChatLogContainer
