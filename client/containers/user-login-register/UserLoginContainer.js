import { connect } from 'react-redux'

import { logIn } from '../../actions/auth'
import { language } from '../../actions/language'
import UserLogin from '../../components/user-login-register/UserLogin'

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
