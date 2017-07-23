import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { checkloginId, checkPassword } from '~/containers/support'
import { logIn, logInFaceBook, logInGoogle, forgotPassword } from '~/actions/asyn/user-login-register/login'
import Login from '~/components/user-login-register/Login'

const mapStateToProps = (state, ownProps) => {
    const { loginid, password, isclick } = state.inst.userloginregister.login
    const g = (lang) => get(state.user.language, lang)
    return ({
        LOG_IN : g('LOG_IN'),
        EMAIL_WARNING : g('EMAIL_WARNING'),
        EMAIL_OR_PHONE_NUMBER : g('EMAIL_OR_PHONE_NUMBER'),
        PASSWORD : g('PASSWORD'),
        PASSWORD_WARNING : g('PASSWORD_WARNING'),
        FORGOT_PASSWORD : g('FORGOT_PASSWORD'),
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
    },
    forgotPassword: () => {
        dispatch(forgotPassword())
    }
})

const LoginContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Login)

export default LoginContainer
