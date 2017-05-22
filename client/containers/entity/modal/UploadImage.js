import { connect } from 'react-redux'
import { get } from '~/config/allString'

import UploadImage from '~/components/entity/modal/UploadImage'
import { uploadImage } from '~/actions/asyn/entity/modal/uploadimage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { open, typeUrl} = state.inst.entity.modal.uploadimage
    console.log('mapStateToProps', open, typeUrl)
    return({
        open : open,
        typeUrl: typeUrl,
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'ENTITY_MODAL_UPLOAD_IMAGE_CLOSE' })
    },
    handleImageChange: (e, typeUrl) => {
        const file = e.target.files[0]
        dispatch(uploadImage(typeUrl, file))
    }
})

const UploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UploadImage)

export default UploadImageContainer
