import { connect } from 'react-redux'
import { get } from '~/config/allString'

import UploadImage from '~/components/entity/modal/UploadImage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { open } = state.inst.entity.modal.uploadimage
    return({
        open : open,
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'ENTITY_MODAL_UPLOAD_IMAGE_CLOSE' })
    },
    handleImageChange: (type, e) => {
        const file = e.target.files[0]
        dispatch(uploadImage([type], file))
    }
})

const UploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UploadImage)

export default UploadImageContainer
