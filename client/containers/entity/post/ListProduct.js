import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ListProduct from '~/components/entity/post/ListProduct'

const mapStateToProps = (state, { id }) => {
    const g = (lang) => get(state.user.language, lang)
    return({
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const ListProductContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ListProduct)

export default ListProductContainer
