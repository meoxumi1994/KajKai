import {connect} from 'react-redux'
import SendMessage from '~/components/chat/SendMessage'
import {sendMessage} from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      mesId: state.inst.chat.center.currentChat.mesId
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
