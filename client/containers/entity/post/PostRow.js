import { connect } from 'react-redux'
import { get } from '~/config/allString'

import PostRow from '~/components/entity/post/PostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const postrow = state.inst.entity.postrow[id]
    return({
        ...postrow,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({

})

const PostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PostRow)

export default PostRowContainer
