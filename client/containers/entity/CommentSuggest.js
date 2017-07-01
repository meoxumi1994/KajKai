import { connect } from 'react-redux'
import { get } from '~/config/allString'

import CommentSuggest from '~/components/entity/CommentSuggest'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const CommentSuggestContainer = connect(
    mapStateToProps, mapDispatchToProps
)(CommentSuggest)

export default CommentSuggestContainer
