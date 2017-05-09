import { connect } from 'react-redux'
import allString from '~/config/allString'

import { register } from '~/actions/asyn/user-login-register/register'
import { checkUserName, checkPassword, checkEmail} from '~/containers/support'
import UserRegister from '~/components/user-login-register/Register'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    isloading: (state.auth == 'REGISTER_ING'),
    isshowmodalused: (state.auth == 'REGISTER_ALREADY_OPEN'),
    auth: state.auth,
    user: state.user,
    checkUserName: checkUserName,
    checkPassword: checkPassword,
    checkEmail: checkEmail,
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
