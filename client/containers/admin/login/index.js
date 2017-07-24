import { connect } from 'react-redux'
import AdminLogin from '~/components/admin/login'
import { loginAdmin } from '~/actions/asyn/admin/login/restful'

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (admin, password) => {
        dispatch(loginAdmin(admin, password))
    }
})

const AdminLoginContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AdminLogin)

export default AdminLoginContainer
