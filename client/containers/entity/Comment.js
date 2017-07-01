import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comment from '~/components/entity/Comment'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        RECEIVE: g('RECEIVE'),
        LIKE: g('LIKE'),
        REPLY: g('REPLY'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const CommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Comment)

export default CommentContainer
