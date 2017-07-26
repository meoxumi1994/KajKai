import { connect } from 'react-redux'
import Admin from '~/components/admin/'
import { auth } from '~/actions/asyn/admin/login/restful'

const mapStateToProps = (state, ownProps) => {
    const { auth } = state.inst.admin
    console.log('state', state.inst.admin.auth);
    return {
        auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    checkAuth: () => {
        dispatch(auth())
    }
})

const AdminContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Admin)

export default AdminContainer
