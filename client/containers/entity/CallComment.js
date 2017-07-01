import { connect } from 'react-redux'
import { get } from '~/config/allString'

import CallComment from '~/components/entity/CallComment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const callcomment = state.inst.entity.callcomment
    const { content } = callcomment[id] || callcomment.default
    return({
        WRITE_COMMENT_OR_ORDER: g('WRITE_COMMENT_OR_ORDER'),
        content: content,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    handleChange: (e) => {
        dispatch({ type: 'INST_ENTITY_CALLCOMMENT', id: id, value: e.target.value })
    }
})

const CallCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(CallComment)

export default CallCommentContainer
