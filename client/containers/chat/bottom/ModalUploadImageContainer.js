import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { changeDisplay } from '~/actions/asyn/chat/actions'
import { loadImage } from '~/actions/asyn/entity/loadImage'
import ModalUploadImage from '~/components/chat/bottom/ModalUploadImage'
import { sendMessage } from '~/actions/asyn/chat/socket'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { chatListMap } = state.inst.chat.left
    return {
        mapp: chatListMap[ownProps.mesId],
        user: state.user,
        SEND_IMAGE: g('SEND_IMAGE'),
        SEND: g('SEND'),
        CLOSE_SEND_IMAGE: g('CLOSE_SEND_IMAGE'),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch(changeDisplay('IMAGE_MODAL', mesId, false))
        dispatch({type: 'CHAT/UPDATE', subType: 'RESET_IMAGES_URL', data: {mesId}})
    },
    handleImageChange: (e, mesId) => {
        const file = e.target.files[0]
        dispatch(loadImage({type: 'SEND_IMAGE', data: {mesId: mesId}}, file))
    },
    sendImage: (mesId, id, text, imagesUrl) => {
        if (mesId == 0) {
            mesId = null
        }
        for (let i in imagesUrl) {
            dispatch(sendMessage(mesId, id, text, imagesUrl[i], 'message'))
        }
        dispatch(changeDisplay('IMAGE_MODAL', mesId, false))
    }
})

const ModalUploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadImage)

export default ModalUploadImageContainer
