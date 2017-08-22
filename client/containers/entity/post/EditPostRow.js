import { connect } from 'react-redux'
import { get } from '~/config/allString'

import EditPostRow from '~/components/entity/post/EditPostRow'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const editpostrow = state.inst.entity.editpostrow[id]
    return({
        ...editpostrow,
        ADD: g('ADD'),
        ADD_PRODUCT: g('ADD_PRODUCT'),
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
    },
    onRemoveProductEdit: (products_order, pid) => {
        let newProducts_order = products_order
        products_order.map((item,index) => {
            if(item == pid){
                newProducts_order = [
                    ...products_order.slice(0,index),
                    ...products_order.slice(index+1, products_order.length)
                ]
            }
        })
        dispatch({
            type: 'INST_ENTITY_POST_EDIT_SELL_POST_CHANGE_POST_ROW',
            item: id, key: 'products_order',
            value: newProducts_order
        })
        if(newProducts_order.length == 0){
            dispatch({ type: 'INST_ENTITY_POST_EDIT_SELL_POST_REMOVE_POST_ROW', id })
        }
    }
})

const EditPostRowContainer = connect(
    mapStateToProps, mapDispatchToProps
)(EditPostRow)

export default EditPostRowContainer
