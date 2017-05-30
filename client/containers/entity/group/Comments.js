import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Comments from '~/components/Comments'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    
})

const CommentsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Comments)

export default CommentsContainer
