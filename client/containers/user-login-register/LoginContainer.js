import { connect } from 'react-redux'

import { logIn } from '../../actions/user-login-register/login'
import UserLogin from '../../components/user-login-register/Login'

const mapStateToProps = (state, ownProps) => ({
    language: state.language
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoginClick : (loginID, password) => {
      dispatch(logIn(loginID, password))
    }
})

const UserLoginContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLogin)

export default UserLoginContainer
