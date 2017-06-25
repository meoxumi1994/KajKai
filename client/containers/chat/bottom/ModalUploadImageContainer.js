import { connect } from 'react-redux'
import { get } from '~/config/allString'

// import { uploadImage } from '~/actions/asyn/entity/modal/uploadimage'
// import { updateUploadImageVisibility, uploadingImages } from '~/actions/asyn/chat/actions'

import ModalUploadImage from '~/components/chat/bottom/ModalUploadImage'
// import { sendMessage } from '~/actions/asyn/chat'

const mapStateToProps = (state, ownProps) => {
    return ({
      visibility: false,
      imageList: state.inst.chat.buttom.url.imageList,
      mesId: state.inst.chat.center.mesId,
      isLoading: state.inst.chat.buttom.url.isLoading,
      user: state.user
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        // dispatch(updateUploadImageVisibility(false))
        // dispatch(uploadingImages([]))
    },
    handleImageChange: (e) => {
        // const file = e.target.files[0]
        // dispatch(uploadImage('sendImage', file))
    },
    sendImage: (mesId, user, imageList) => {
        // for (var i=0; i< imageList.length; i++) {
        //     dispatch(sendMessage(mesId, user, imageList[i].urlreal))
        // }
        // dispatch(updateUploadImageVisibility(false))
    }
})

const ModalUploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadImage)

export default ModalUploadImageContainer
