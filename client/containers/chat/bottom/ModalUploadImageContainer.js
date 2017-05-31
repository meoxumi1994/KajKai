import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { uploadImage } from '~/actions/asyn/entity/modal/uploadimage'
import { updateUploadImageVisibility, uploadingImages } from '~/actions/asyn/chat/actions'

import ModalUploadImage from '~/components/chat/bottom/ModalUploadImage'
import { sendMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
    // console.log('state ',state.inst.chat.center.url.uploadingImgs);
    return ({
      visibility: state.inst.chat.visibility.buttom.uploadImage,
      uploadingImgs: state.inst.chat.center.url.uploadingImgs,
      mesId: state.inst.chat.center.mesId
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch(updateUploadImageVisibility(false))
        dispatch(uploadingImages([]))
    },
    handleImageChange: (e) => {
        const file = e.target.files[0]
        dispatch(uploadImage('sendImage', file))
    },
    sendImage: (mesId, uploadingImgs) => {
        for (var i=0; i< uploadingImgs.length; i++) {
            dispatch(sendMessage({mesId: mesId, text: uploadingImgs[i]}))
        }
        dispatch(updateUploadImageVisibility(false))
    }
})

const ModalUploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadImage)

export default ModalUploadImageContainer
