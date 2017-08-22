import { connect } from 'react-redux'
import { get } from '~/config/allString'

import LikeShareComment from '~/components/entity/LikeShareComment'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        LIKE: g('LIKE'),
        COMMENT: g('COMMENT'),
        SHARE: g('SHARE'),
        OPEN: g('OPEN'),
        CLOSE: g('CLOSE'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const LikeShareCommentContainer = connect(
    mapStateToProps, mapDispatchToProps
)(LikeShareComment)

export default LikeShareCommentContainer
