import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Product from '~/components/entity/post/Product'

const mapStateToProps = (state, { id, canEdit }) => {
    const g = (lang) => get(state.user.language, lang)
    const product = canEdit ? state.inst.entity.editproduct[id] : state.inst.entity.product[id]
    return({
        ...product
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange : (key, value) => {
        if(ownProps.canEdit){
            dispatch({ type: 'INST_ENTITY_PRODUCT_CHANGE', id: ownProps.id, key: key, value: value })
        }
    },
    addProduct: (product) => {
        if(!ownProps.canEdit){
            dispatch({ type: 'INST_ENTITY_PRODUCT_CLICK_ADD', product: product, sellpostId: ownProps.sellpostId })
        }
    },
    onRemoveProduct: () => {
        if(!ownProps.canEdit){
            dispatch({ type: 'INST_ENTITY_PRODUCT_CLICK_REMOVE',
                sellpostId: ownProps.sellpostId, index: ownProps.index })
        }
    }
})

const mergerProps = (stateProps, dispatchProps, ownProps) => {
    const {...anotherState } = stateProps
    const { addProduct, ...anotherDispatch } = dispatchProps
    return({
        onAddProduct: () => {
            addProduct({
                id: stateProps.id,
                content: stateProps.content,
                imageUrl: stateProps.imageUrl,
                list: stateProps.list,
                num: 1,
            })
        },
        ...ownProps,
        ...anotherState,
        ...anotherDispatch,
    })
}


const ProductContainer = connect(
    mapStateToProps, mapDispatchToProps, mergerProps
)(Product)

export default ProductContainer
