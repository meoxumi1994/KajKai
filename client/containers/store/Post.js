import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Post from '~/components/store/Post'

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
