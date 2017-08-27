import { connect } from 'react-redux'
import ChatBottom from '~/components/chat/bottom'
import { sendMessage } from '~/actions/asyn/chat/socket'
import { changeDisplay } from '~/actions/asyn/chat/actions'

const mapStateToProps = (state, ownProps) => {
  const { chatListMap } = state.inst.chat.left
  return (
    {
      userId: state.user.id,
      mesId: ownProps.mesId,
      chatListMap
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendMessage: (mesId, id, text, url, type) => {
        console.log('DEBUG id', id);
        if (mesId == 0) {
            mesId = null
        }
        dispatch(sendMessage(mesId, id, text, url, 'message'))
        dispatch({type: 'server/READ_CHAT', data: {mesId: mesId}})
    },
    displayImageModal: (mesId) => {
        dispatch(changeDisplay('IMAGE_MODAL', mesId, true))
        dispatch({type: 'CHAT/UPDATE', subType: 'RESET_IMAGES_URL', data: {mesId}})
    }
})

const ChatBottomContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ChatBottom)

export default ChatBottomContainer
