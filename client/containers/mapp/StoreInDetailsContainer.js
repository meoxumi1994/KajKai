import { connect } from 'react-redux'
import StoreInDetails from '~/components/mapp/StoreInDetails'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const StoreInDetailsContainerContainer = connect(
  mapStateToProps, mapDispatchToProps
)(StoreInDetails)

export default StoreInDetailsContainerContainer
