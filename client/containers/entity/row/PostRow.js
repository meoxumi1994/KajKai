import { connect } from 'react-redux'
import { get } from '~/config/allString'

import PostRow from '~/components/entity/row/PostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const postrow = state.inst.entity.row.postrow
    const data = postrow[id] || postrow.default
    return({
        id: id,
        data: data,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({

})

const PostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(PostRow)

export default PostRowContainer
