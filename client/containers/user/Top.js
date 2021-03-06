import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { updateUser } from '~/actions/asyn/user'

import Top from '~/components/user/Top'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id, avatarUrl, coverUrl, username } = state.inst.user.index
    const user = state.user
    return({
        ...state.inst.user.index,
        yourid: state.user.id,
        INTEREST: g('INTEREST'),
        ABOUT: g('ABOUT'),
        PHOTOS: g('PHOTOS'),
        SETTING: g('SETTING'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUploadImage : (typeUrl, e) => {
        dispatch({ type: 'ENTITY_MODAL_UPLOAD_IMAGE_OPEN', typeUrl: typeUrl})
    },
    onUpdateUser: (key, value) => {
        dispatch(updateUser({ [key] : value }))
    }
})

const TopContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Top)

export default TopContainer
