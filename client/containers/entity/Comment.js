import { connect } from 'react-redux'
import { get } from '~/config/allString'
import { getTime } from '~/containers/support'

import Comment from '~/components/entity/Comment'

const mapStateToProps = (state, {id}) => {
    const g = (lang) => get(state.user.language, lang)
    const comment = state.inst.entity.comment[id]
    let isyour = true
    
    return({
        ...comment,
        time: getTime(comment.time),
        RECEIVE: g('RECEIVE'),
        LIKE: g('LIKE'),
        REPLY: g('REPLY'),
    })
}

const mapDispatchToProps = (dispatch, {id}) => ({
    onChange : (key, value) => {
        dispatch({ type: 'INST_ENTITY_COMMENT_CHANGE', id: id, key: key, value: value })
    }
})

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Comment)

export default CommentContainer
