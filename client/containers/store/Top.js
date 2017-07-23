import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Top from '~/components/store/Top'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const { userid, id, avatarUrl, coverUrl, storename } = state.inst.store.index
    return({
        ...state.inst.store.index,
        id : id,
        name: storename,
        avatarUrl: avatarUrl,
        coverUrl: coverUrl,
        userid: userid,
        yourid: state.user.id,
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
