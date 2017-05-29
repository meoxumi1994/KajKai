import {connect} from 'react-redux'
import SendMessage from '~/components/chat/bottom/SendMessage'
import {sendMessage} from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      mesId: state.inst.chat.center.mesId,
      visibility: state.inst.chat.visibility.sendMessage
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (msg) => {
    dispatch(sendMessage(msg));
  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
