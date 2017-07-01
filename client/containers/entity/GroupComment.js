import { connect } from 'react-redux'
import { get } from '~/config/allString'

import GroupComment from '~/components/entity/GroupComment'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        WRITE_COMMENT_OR_ORDER: g('WRITE_COMMENT_OR_ORDER')
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const GroupCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GroupComment)

export default GroupCommentContainer
