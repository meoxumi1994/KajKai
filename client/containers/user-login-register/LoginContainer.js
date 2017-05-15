import { connect } from 'react-redux'
import allString from '~/config/allString'

import { checkloginId, checkPassword } from '~/containers/support'
import { logIn, logInFaceBook, logInGoogle } from '~/actions/asyn/user-login-register/login'
import Login from '~/components/user-login-register/Login'

const mapStateToProps = (state, ownProps) => {
    const { loginid, password, isclick } = state.inst.userloginregister.login
    return ({
        g : (lang) => allString.get(state.user.language, lang),
        loginid : loginid,
        password : password,
        warningloginId: isclick && checkloginId(loginid),
        warningPassword: isclick && checkPassword(password),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoginClick : (loginid, password) => {
        if(!checkloginId(loginid) && !checkPassword(password))
            dispatch(logIn(loginid, password))
        else
            dispatch({ type: 'USER_LOGIN_REGISTER_LOGIN_CLICK_LOGIN_BUTTON'})
    },
    logInFaceBook: (tokenId) => {
        dispatch(logInFaceBook(tokenId))
    },
    logInGoogle: (tokenId) => {
        dispatch(logInGoogle(tokenId))
    },
    handleChange: (type, value) => {
        dispatch({ type: 'USER_LOGIN_REGISTER_LOGIN_INPUT_CHANGE', value: { [type] : value } })
    }
})

const LoginContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Login)

export default LoginContainer
