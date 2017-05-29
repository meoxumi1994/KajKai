import {connect} from 'react-redux'
import SendMessage from '~/components/chat/SendMessage'
import {sendMessage} from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  const chat = state.inst.chat
  return (
    {
      mesId: chat.center.currentChat.mesId,
      visibility: chat.visibility.sendMessage
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSendMessageSubmit: (msg) => {
    dispatch(sendMessage(msg));
  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
