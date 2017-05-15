import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ModalUploadImage from '~/components/store/middle/ModalUploadImage'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { open } = state.inst.store.middle.open
    return({
        open : open,
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'STORE_MIDDLE_MODAL_UPLOAD_IMAGE_CLOSE' })
    },
    handleImageChange: (e) => {
        const file = e.target.files[0]
        dispatch(uploadImage('avatarUrl', file))
    }
})

const ModalUploadImageContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadImage)

export default ModalUploadImageContainer
