import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Post from '~/components/entity/post/Post'

const mapStateToProps = (state, { sellpostid }) => {
    const g = (lang) => get(state.user.language, lang)
    const sellpost = state.inst.entity.post.post[sellpostid]
    return({
        sellpost: sellpost,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const PostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Post)

export default PostContainer
