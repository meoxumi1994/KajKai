import { connect } from 'react-redux'
import SendMessage from '~/components/chat/bottom/SendMessage'
import { sendMessage } from '~/actions/asyn/chat'
import { updateUploadImageVisibility, uploadingImages } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      mesId: state.inst.chat.center.mesId,
      visibility: state.inst.chat.visibility.buttom.sendMessage,
      id: state.user.id,
      mesId: state.inst.chat.center.mesId
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: (mesId, id, text) => {
    dispatch(sendMessage({mesId: mesId, text: text}))
    dispatch({type: 'client/CHAT_WAITING', data: {
      lastMessage: {
        mesId: mesId,
        id: id,
        message: text,
        time: Date.now()
      }
    }})
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
