import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime, getBeLike } from '~/containers/support'

import Comment from '~/components/entity/Comment'

const mapStateToProps = (state, {id}) => {
    const g = (lang) => get(state.user.language, lang)
    const comment = state.inst.entity.comment[id]
    let isyour = true
    return({
        ...comment,
        time: getTime(comment.time),
        beLike: getBeLike(comment.likes, state.user.id),
        RECEIVE: g('RECEIVE'),
        LIKE: g('LIKE'),
        REPLY: g('REPLY'),
    })
}

const mapDispatchToProps = (dispatch, {id, isleader, leadercommentid }) => ({
    onChange : (key, value) => {
        dispatch({ type: 'INST_ENTITY_COMMENT_CHANGE', id: id, key: key, value: value })
    },
    onLike: () => {
        if(isleader){
            dispatch({ type: 'server/LIKE', data: {
                type: 'comment',
                status: 'like',
                leadercommentid: id,
            }})
        }else{
            dispatch({ type: 'server/LIKE', data: {
                type: 'comment',
                status: 'like',
                commentid: id,
                leadercommentid: leadercommentid,
            }})
        }
    }
})

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Comment)

export default CommentContainer
