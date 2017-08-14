import { connect } from 'react-redux'
import { get } from '~/config/allString'

import ForgotPassword from '~/components/user-login-register/ForgotPassword'
import { reset } from '~/actions/asyn/user-login-register'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const forgotpassword = state.inst.userloginregister.forgotpassword
    return({
        ...forgotpassword,
        EMAIL_NEED: g('EMAIL_NEED'),
        DONE: g('DONE'),
        FORGOT_PASSWORD: g('FORGOT_PASSWORD'),
        PLEASE_GO_EMAIL_TO_CHECK: g('PLEASE_GO_EMAIL_TO_CHECK'),
        EMAIL_WARNING: g('EMAIL_WARNING'),
        CLOSE: g('CLOSE')
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (key, value) => {
        dispatch({ type: 'INST_REGISTER_FORGOT_PASSWORD_CHANGE', key, value })
    },
    onReset: (email) => {
        dispatch(reset(email))
    }
})

const ForgotPasswordContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ForgotPassword)

export default ForgotPasswordContainer
