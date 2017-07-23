import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditMinorPost from '~/components/entity/post/EditMinorPost'
import { postMinorPost } from '~/actions/asyn/entity/minorpost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const editminorpost = state.inst.entity.editminorpost
    const { avatarUrl, storename, id } = state.inst.store.index
    const { height } = state.inst.app
    return({
        ...editminorpost,
        height: height,
        avatarUrl: avatarUrl,
        storename: storename,
        id: id,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_MINOR_POST_CHANGE', key: key, value: value })
    },
    createMinorPost: (minorpost) => {
        dispatch(postMinorPost(minorpost))
    }
})

const mergerProp = (stateProps, dispatchProps, ownProps) => {
    const { id, ...anotherState } = stateProps
    const { createMinorPost, ...anotherDispatch } = dispatchProps
    return({
        onCreateMinorPost: () => {
            const minorpost = {
                ...stateProps,
                storeid: id,
            }
            createMinorPost(minorpost)
        },
        ...anotherState,
        ...anotherDispatch,
        ...ownProps,
    })
}


const EditMinorPostContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProp
)(EditMinorPost)

export default EditMinorPostContainer
