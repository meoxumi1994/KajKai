import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comment from '~/components/entity/row/Comment'
import { getTime } from '~/containers/support'

const mapStateToProps = (state, { id, avatarsize }) => {
    const g = (lang) => get(state.user.language, lang)
    const comment = state.inst.entity.row.comment
    const data = comment[id] || comment.default
    const time = getTime(data.time, state.user.language)
    return({
        ...data,
        time: time,
        avatarsize: avatarsize,
    })
}

const mapDispatchToProps = (dispatch, { id, replydispatch }) => ({
    onLikeClick: () => {
        console.log('onLikeClick', id)
    },
    onReplyClick: (name) => {
        if(replydispatch == 'server/JOIN_COMMENTS'){
            dispatch({ type: replydispatch, data: { id: id } })
        }else{
            dispatch({ type: replydispatch, name: name, id: id })
        }
    }
})

const mergerProps = (stateProps, dispatchProps, { id }) => {
    const { name, ...anotherState } = stateProps
    const { onLikeClick, onReplyClick, ...anotherDispatch } = dispatchProps
    return({
        ...anotherState,
        ...anotherDispatch,
        name,
        onReplyClick: () => onReplyClick(name),
    })
}

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Comment)

export default CommentContainer
