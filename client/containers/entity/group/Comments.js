import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comments from '~/components/entity/group/Comments'

const mapStateToProps = (state, { id, myavatar }) => {
    const g = (lang) => get(state.user.language, lang)
    const comments = state.inst.entity.group.comments
    const data = comments[id] || comments.default
    return({
        id: id,
        ...data,
        myavatar: myavatar,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onHandleChangeContent : (event) => {
        dispatch({ type: 'ENTITY_ROW_COMMENTS_CONTENT_HANDLE_CHANGE', id: id, content: event.target.value})
    },
    onLikeClick: (id) => {
        console.log('onLikeClick', id)
    },
    onReplyClick: () => {
        dispatch({ type: 'ENTITY_ROW_COMMENTS_REPLY', id: id })
    }
})

const mergerProps = (stateProps, dispatchProps, { id }) => {
    const { ...anotherState } = stateProps
    const { onLikeClick, ...anotherDispatch } = dispatchProps
    return({
        ...anotherState,
        ...anotherDispatch,
        onLikeClick: () => onLikeClick(id)
    })
}

const CommentsContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Comments)

export default CommentsContainer
