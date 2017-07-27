import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ProductModal from '~/components/entity/modal/ProductModal'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const productmodal = state.inst.entity.modal.productmodal
    return({
        ...productmodal,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ProductModalContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ProductModal)

export default ProductModalContainer
