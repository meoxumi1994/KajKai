import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { uploadImage } from '~/actions/asyn/profile/middle'
import ModalUploadAvatar from '~/components/profile/middle/ModalUploadAvatar'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { open } = state.inst.profile.middle.modaluploadavatar
    return({
        open : open,
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    close: () => {
        dispatch({ type: 'PROFILE_MIDDLE_MODAL_UPLOAD_AVATAR_CLOSE' })
    },
    handleImageChange: (e) => {
        const file = e.target.files[0]
        dispatch(uploadImage('avatarUrl', file))
    }
})

const ModalUploadAvatarContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ModalUploadAvatar)

export default ModalUploadAvatarContainer
