import { connect } from 'react-redux'
import { get } from '~/config/allString'

import CallComment from '~/components/entity/CallComment'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        WRITE_COMMENT_OR_ORDER: g('WRITE_COMMENT_OR_ORDER'),
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
})

const CallCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(CallComment)

export default CallCommentContainer
