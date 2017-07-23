import { connect } from 'react-redux'
import { get } from '~/config/allString'

import LikeShareComment from '~/components/entity/row/LikeShareComment'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const LikeShareCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(LikeShareComment)

export default LikeShareCommentContainer
