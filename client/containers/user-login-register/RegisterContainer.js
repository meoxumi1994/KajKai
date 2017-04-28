import { connect } from 'react-redux'

import { register } from '../../actions/user-login-register/register'
import UserRegister from '../../components/user-login-register/Register'

const mapStateToProps = (state, ownProps) => ({
    language: state.language,
    registerResult: state.registerResult
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRegisterClick: (username, loginID, password) => {
      dispatch(register(username, loginID, password))
    }
})

const UserRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserRegister)

export default UserRegisterContainer
