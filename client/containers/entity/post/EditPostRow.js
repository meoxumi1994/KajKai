import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditPostRow from '~/components/entity/post/EditPostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const editpostrow = state.inst.entity.editpostrow[id]
    return({
        ...editpostrow,
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onChange: (key,value) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE_POST_ROW', item: id, key: key, value: value })
    },
})

const EditPostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EditPostRow)

export default EditPostRowContainer
