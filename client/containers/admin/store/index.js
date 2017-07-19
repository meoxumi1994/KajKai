import { connect } from 'react-redux'
import Store from '~/components/admin/Store'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const StoreContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
