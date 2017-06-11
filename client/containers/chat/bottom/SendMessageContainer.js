import { connect } from 'react-redux'
import SendMessage from '~/components/chat/bottom/SendMessage'
import { sendMessage } from '~/actions/asyn/chat/actions'
import { updateUploadImageVisibility, uploadingImages, waitingChat } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      mesId: state.inst.chat.center.mesId,
      visibility: state.inst.chat.visibility.buttom.sendMessage,
      user: state.user,
      mesId: state.inst.chat.center.mesId
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (mesId, id, text, url, type) => {
    dispatch(sendMessage(mesId, id, text, url, type))
  },
  uploadImage: () => {
    dispatch(updateUploadImageVisibility(true))
    dispatch(uploadingImages([]))
  }
})

const SendMessageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SendMessage)

export default SendMessageContainer
