import {connect} from 'react-redux'
import SendMessage from '~/components/chat/SendMessage'
<<<<<<< HEAD
import {sendMessage} from '~/actions/asyn/chat/chatSocket'
=======
import {sendMessage} from '~/actions/asyn/chat'
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff

const mapStateToProps = (state, ownProps) => {
  return (
    {
<<<<<<< HEAD
      sender: state.user.id,
      receiver: state.inst.chat.center.currentUser.id
=======
      mesId: state.inst.chat.center.currentChat.mesId
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
<<<<<<< HEAD
  onSendMessageSubmit: (chat) => {
    dispatch(sendMessage(chat));
=======
  onSendMessageSubmit: (msg) => {
    dispatch(sendMessage(msg));
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff
  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
