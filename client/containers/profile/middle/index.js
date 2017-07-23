import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { changeLanguage } from '~/actions/asyn/profile/middle'
import Middle from '~/components/profile/middle'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        avatarUrl: state.user.avatarUrl,
        coverUrl: state.user.coverUrl,
        INFO: g('INFO'),
        PRIVACY: g('PRIVACY'),
        SECURITY: g('SECURITY'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeLanguage: (language) => {
        dispatch(changeLanguage(language))
    },
    onUpdateCover: () => {
        dispatch({ type: 'PROFILE_MIDDLE_MODAL_UPLOAD_COVER_OPEN'})
    },
    onUpdateAvatar: () => {
        dispatch({ type: 'PROFILE_MIDDLE_MODAL_UPLOAD_AVATAR_OPEN'})
    }
})

const MiddleContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Middle)

export default MiddleContainer
