import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { uploadImage } from '~/actions/asyn/entity/modal/uploadimage'
import { updateUploadImageVisibility, uploadingImages } from '~/actions/asyn/chat/actions'

import ModalUploadImage from '~/components/chat/bottom/ModalUploadImage'
import { sendMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
    console.log('state ',state);
    return ({
      visibility: state.inst.chat.visibility.buttom.uploadImage,
      imageList: state.inst.chat.buttom.url.imageList,
      mesId: state.inst.chat.center.mesId,
      isLoading: state.inst.chat.buttom.url.isLoading
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
    sendImage: (mesId, imageList) => {
        for (var i=0; i< imageList.length; i++) {
            dispatch(sendMessage({mesId: mesId, text: imageList[i].urlreal}))
        }
        dispatch(updateUploadImageVisibility(false))
    }
})

const ModalUploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadImage)

export default ModalUploadImageContainer
