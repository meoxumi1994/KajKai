import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comments from '~/components/entity/group/Comments'

const mapStateToProps = (state, { id, myavatar }) => {
    const g = (lang) => get(state.user.language, lang)
    const comments = state.inst.entity.group.comments
    const data = comments[id] || comments.default
    return({
        id: id,
        myavatar: myavatar,
        ...data,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onHandleChangeContent : (event) => {
        dispatch({ type: 'ENTITY_ROW_COMMENTS_CONTENT_HANDLE_CHANGE', id: id, content: event.target.value})
    }
})


const CommentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Comments)

export default CommentsContainer
