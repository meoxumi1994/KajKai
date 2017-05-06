import { connect } from 'react-redux'

import { register } from '../../actions/asyn/user-login-register/register'
import UserRegister from '../../components/user-login-register/Register'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    user: state.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRegisterClick: (username, loginId, password) => {
        dispatch(register(username, loginId, password))
    },
    onCloseAlready: () => {
        dispatch({ type: 'REGISTER_ALREADY_CLOSE' })
    },
})

const UserRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserRegister)

export default UserRegisterContainer
