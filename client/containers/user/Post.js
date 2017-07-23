import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Post from '~/components/user/Post'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const PostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Post)

export default PostContainer
