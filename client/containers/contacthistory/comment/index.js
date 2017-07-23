import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comment from '~/components/contacthistory/comment'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Comment)

export default CommentContainer
