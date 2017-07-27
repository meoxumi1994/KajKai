import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { changeDisplay } from '~/actions/asyn/chat/actions'
import { loadImage } from '~/actions/asyn/entity/loadImage'
import ModalUploadImage from '~/components/chat/bottom/ModalUploadImage'
import { sendMessage } from '~/actions/asyn/chat/socket'

const mapStateToProps = (state, ownProps) => {
    const { chatListMap } = state.inst.chat.left
    return {
        mapp: chatListMap[ownProps.mesId],
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: (mesId) => {
        dispatch(changeDisplay('IMAGE_MODAL', mesId, false))
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
