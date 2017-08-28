import { connect } from 'react-redux'
import ChatBottom from '~/components/chat/bottom'
import { sendMessage, sendMessageStore } from '~/actions/asyn/chat/socket'
import { changeDisplay } from '~/actions/asyn/chat/actions'
import { get } from '~/config/allString'

const mapStateToProps = (state, ownProps) => {
  const g = (lang) => get(state.user.language, lang)
  const { chatListMap } = state.inst.chat.left
  return (
    {
      userId: state.user.id,
      mesId: ownProps.mesId,
      chatListMap,
      ENTER_MESSAGE: g('ENTER_MESSAGE'),
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendMessage: (mesId, id, text, url, type, storeId) => {
        console.log('DEBUG id', id);
        if (mesId == 0) {
            mesId = null
        }
        if (storeId == undefined) {
              dispatch(sendMessage(mesId, id, text, url, 'message'))
        } else {
              dispatch(sendMessageStore(mesId, id, text, url, 'message', storeId))
        }
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
