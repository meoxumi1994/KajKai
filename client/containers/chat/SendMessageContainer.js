import {connect} from 'react-redux'
import SendMessage from '~/components/chat/SendMessage'
import {sendMessage} from '~/actions/asyn/chat/chatSocket'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      sender: state.user.id,
      receiver: state.inst.chat.center.currentUser.id
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSendMessageSubmit: (chat) => {
    dispatch(sendMessage(chat));
  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
