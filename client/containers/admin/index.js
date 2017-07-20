import { connect } from 'react-redux'
import Admin from '~/components/admin'

const mapStateToProps = (state, ownProps) => {
    // console.log('---STATE', state.inst.admin);
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const AdminContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Admin)

export default AdminContainer
