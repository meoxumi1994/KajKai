import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditPostRow from '~/components/entity/post/EditPostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const editpostrow = state.inst.entity.editpostrow[id]
    return({
        ...editpostrow,
        ADD: g('ADD'),
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onChange: (key,value) => {
        dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE_POST_ROW', item: id, key: key, value: value })
    },
    onAddProduct: (products_order) => {
        const time = (new Date()).getTime()
        dispatch({
            type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE_POST_ROW',
            item: id, key: 'products_order',
            value: [...products_order, time]
        })
        dispatch({
            type: 'INST_ENTITY_POST_EDIT_SELL_POST_ADD_PRODUCT',
            id: time,
        })
    }
})

const EditPostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EditPostRow)

export default EditPostRowContainer
