import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { register } from '~/actions/asyn/user-login-register/register'
import { checkUserName, checkPassword, checkEmail} from '~/containers/support'
import UserRegister from '~/components/user-login-register/Register'

const mapStateToProps = (state, ownProps) => {
    const { username, email, password, isclick } = state.inst.userloginregister.register
    const g = (lang) => get(state.user.language, lang)
    return({
        CREATE_A_NEW_ACCOUNT: g('CREATE_A_NEW_ACCOUNT'),
        YOUR_NAME: g('YOUR_NAME'),
        USER_NAME_WARNING: g('USER_NAME_WARNING'),
        EMAIL_NEED: g('EMAIL_NEED'),
        EMAIL_WARNING: g('EMAIL_WARNING'),
        PASSWORD_WARNING: g('PASSWORD_WARNING'),
        PASSWORD: g('PASSWORD'),
        RULE: g('RULE'),
        CREATE_ACCOUNT: g('CREATE_ACCOUNT'),
        REGISTER_MODAL_HEADER_WARNING: g('REGISTER_MODAL_HEADER_WARNING'),
        REGISTER_MODAL_PHONE_WARNING: g('REGISTER_MODAL_PHONE_WARNING'),
        CLOSE: g('CLOSE'),
        isloading: (state.auth == 'REGISTER_ING'),
        isshowmodalused: (state.auth == 'REGISTER_ALREADY_OPEN'),
        username: username,
        email : email,
        password : password,
        warningusername: isclick && checkUserName(username),
        warningemail: isclick && checkEmail(email),
        warningpassword: isclick && checkPassword(password),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRegisterClick: (username, email, password) => {
        if(!checkUserName(username) && !checkEmail(email) && !checkPassword(password))
            dispatch(register(username, email, password))
        else
            dispatch({ type: 'USER_LOGIN_REGISTER_REGISTER_CLICK_REGISTER_BUTTON'})
    },
    onCloseAlready: () => {
        dispatch({ type: 'REGISTER_ALREADY_CLOSE' })
    },
    handleChange: (type, value) => {
        dispatch({ type: 'USER_LOGIN_REGISTER_REGISTER_INPUT_CHANGE', value: { [type] : value } })
    }
})

const UserRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserRegister)

export default UserRegisterContainer
