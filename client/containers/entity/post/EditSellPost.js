import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditSellPost from '~/components/entity/post/EditSellPost'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const editsellpost = state.inst.entity.editsellpost
    const { avatarUrl, storename } = state.inst.store.index
    const { height } = state.inst.app
    return({
        ...editsellpost,
        height: height,
        avatarUrl: avatarUrl,
        storename: storename,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addPostRow: (item, newid) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_POST_ROW', item: item, newid: newid})
    },
})

const EditSellPostContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EditSellPost)

export default EditSellPostContainer
