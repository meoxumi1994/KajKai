import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comment from '~/components/entity/row/Comment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const comment = state.inst.entity.row.comment
    const {  content, numlikes, likes, avatar, name, time, } = comment[id] || comment.default
    return({
        content: content,
        numlikes: numlikes,
        likes: likes,
        avatar: avatar,
        name: name,
        time: time,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLikeClick: (id) => {
        console.log('onLikeClick', id)
    },
    onReplyClick: (name) => {
        console.log('onReplyClick', name)
    }
})

const mergerProps = (stateProps, dispatchProps, { id }) => {
    const { name, ...anotherState } = stateProps
    const { onLikeClick, onReplyClick, ...anotherDispatch } = dispatchProps
    return({
        ...anotherState,
        ...anotherDispatch,
        name,
        onLikeClick: () => onLikeClick(id),
        onReplyClick: () => onReplyClick(name),
    })
}

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Comment)

export default CommentContainer
