import { connect } from 'react-redux'
import ChatLeft from '~/components/chat/left'

const mapStateToProps = (state, ownProps) => {
  const { chatListKey } = state.inst.chat.left
  // console.log('---STATE', state.inst.chat);
  return {
      chatListKey
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ChatLeftContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatLeft)

export default ChatLeftContainer
