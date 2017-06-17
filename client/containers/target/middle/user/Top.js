import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Top from '~/components/target/middle/user/Top'


const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { id, avatarUrl, coverUrl, username } = state.inst.target.index
    return({
        id : id,
        name: username,
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUploadImage : (typeUrl, e) => {
        dispatch({ type: 'ENTITY_MODAL_UPLOAD_IMAGE_OPEN', typeUrl: typeUrl})
    }
})

const TopContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Top)

export default TopContainer
