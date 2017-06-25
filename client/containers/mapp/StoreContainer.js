import { connect } from 'react-redux'
import Store from '~/components/mapp/Store'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  openStoreModal: () => {
    console.log('openStoreModal');
  }
})

const StoreContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Store)

export default StoreContainer
