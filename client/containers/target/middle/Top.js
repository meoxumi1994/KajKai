import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Top from '~/components/target/middle/Top'


const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { username, storename, avatarUrl, coverUrl } = ownProps
    return({
        name: username || storename,
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
