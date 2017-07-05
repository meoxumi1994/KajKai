import { connect } from 'react-redux'
import Chat from '~/components/chat/left/Chat'

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
      chatListMap: state.inst.chat.left.chatListMap,
      currentChat:  state.inst.chat.left.currentChat.mesId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Chat)

export default ChatContainer
