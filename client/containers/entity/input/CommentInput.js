import { connect } from 'react-redux'
import { get } from '~/config/allString'

import CommentInput from '~/components/entity/input/CommentInput'

const mapStateToProps = (state, { id, margintopbot }) => {
    const g = (lang) => get(state.user.language, lang)
    const commentinput = state.inst.entity.input.commentinput
    let { content } = commentinput[id] || commentinput.default
    if(content == '\n') content = '' // BECAUSE onHandleKeyPress faster than onHandleChangeContent
    return({
        content,
        margintopbot
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onHandleChangeContent: (e) => {
        dispatch({ type: 'ENTITY_INPUT_COMMENTINPUT_CONTENT_HANDLE_CHANGE', id: id, content : e.target.value })
    },
    onHandleKeyPress: (e) => {
        if(e.charCode == 13 && !e.shiftKey){
            dispatch({ type: 'ENTITY_GROUP_COMMENTS_ADD', id: id })
        }
    }
})

const CommentInputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(CommentInput)

export default CommentInputContainer
