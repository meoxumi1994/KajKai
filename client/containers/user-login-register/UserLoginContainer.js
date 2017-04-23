import { connect } from 'react-redux'

import { logIn } from '../../actions/auth'
import UserLogin from '../../components/user-login-register/UserLogin'

const mapDispatchToProps = (dispatch) => ({
    onLoginClick : (loginID, password) => {
      dispatch(logIn(loginID, password))
    }
})

const UserLoginContainer = connect(
    null, mapDispatchToProps
)(UserLogin)

export default UserLoginContainer
