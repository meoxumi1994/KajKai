import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Product from '~/components/entity/post/Product'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    const product = state.inst.entity.product[id]
    return({
        ...product
    })
}

const mapDispatchToProps = (dispatch, { id }) => ({
    onChange : (key, value) => {
        dispatch({ type: 'INST_ENTITY_PRODUCT_CHANGE', id: id, key: key, value: value })
    }
})

const ProductContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Product)

export default ProductContainer
