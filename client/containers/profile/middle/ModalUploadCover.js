import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { uploadImage } from '~/actions/asyn/profile/middle'
import ModalUploadCover from '~/components/profile/middle/ModalUploadCover'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { open } = state.inst.profile.middle.modaluploadcover
    return({
        open : open,
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'PROFILE_MIDDLE_MODAL_UPLOAD_COVER_CLOSE' })
    },
    handleImageChange: (e) => {
        const file = e.target.files[0]
        dispatch(uploadImage('coverUrl', file))
    }
})

const ModalUploadCoverContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadCover)

export default ModalUploadCoverContainer
