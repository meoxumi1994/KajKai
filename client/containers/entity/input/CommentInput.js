import { connect } from 'react-redux'
import { get } from '~/config/allString'

import CommentInput from '~/components/entity/input/CommentInput'

const mapStateToProps = (state, { id, groupcommentsId, margintopbot }) => {
    const g = (lang) => get(state.user.language, lang)
    const commentinput = state.inst.entity.input.commentinput
    let { content } = commentinput[id] || commentinput.default
    if(content == '\n') content = ''
    const groupcomments = state.inst.entity.group.groupcomments
    const { storeId } = groupcomments[groupcommentsId] || groupcomments.default
    return({
        storeId,
        content,
        margintopbot
    })
}

const mapDispatchToProps = (dispatch, { id, request }) => ({
    onHandleChangeContent: (e) => {
        dispatch({ type: 'ENTITY_INPUT_COMMENTINPUT_CONTENT_HANDLE_CHANGE', id: id, content : e.target.value })
    },
    onHandleKeyPress: (e, content, storeId) => {
        if(e.charCode == 13 && !e.shiftKey){
            dispatch({ type: request, data: {
                id: id, products: [], storeId: storeId, content: content, time: (new Date()).getTime()
            }})
            dispatch({ type: 'ENTITY_GROUP_COMMENTS_ADD', id: id })
        }
    }
})

const mergerProp = (stateProps, dispatchProps, ownProps) => {
    const { storeId, content, ...anotherState } = stateProps
    const { onHandleKeyPress, ...anotherDispatch } = dispatchProps
    return({
        ...anotherState,
        ...anotherDispatch,
        ...ownProps,
        content: content,
        onHandleKeyPress: (e) => onHandleKeyPress(e, content, storeId)
    })
}

const CommentInputContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProp
)(CommentInput)

export default CommentInputContainer
