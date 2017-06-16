import { connect } from 'react-redux'
import ChatBottom from '~/components/chat/bottom'
import { sendMessage } from '~/actions/asyn/chat'
import { updateUploadImageVisibility, uploadingImages, waitingChat } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userId: state.user.id,
      mesId: ownProps.mesId,
      visibility: sendMessage
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

const ChatBottomContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatBottom)

export default ChatBottomContainer
