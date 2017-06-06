import { connect } from 'react-redux'
import SendMessage from '~/components/chat/bottom/SendMessage'
import { sendMessage } from '~/actions/asyn/chat'
import { updateUploadImageVisibility, uploadingImages } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  // console.log('state ',state);
  return (
    {
      mesId: state.inst.chat.center.mesId,
      visibility: state.inst.chat.visibility.buttom.sendMessage
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (msg) => {
    dispatch(sendMessage(msg));
  },
  uploadImage: () => {
    dispatch(updateUploadImageVisibility(true))
    dispatch(uploadingImages([]))
  },
  typingMessage: (e) => {
    console.log(e.key);
  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
