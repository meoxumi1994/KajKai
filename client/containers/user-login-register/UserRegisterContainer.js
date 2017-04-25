import { connect } from 'react-redux'

import { register } from '../../actions/auth'
import UserRegister from '../../components/user-login-register/UserRegister'

const mapStateToProps = (state, ownProps) => ({
    language: state.language
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
