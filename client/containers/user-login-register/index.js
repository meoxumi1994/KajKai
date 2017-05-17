import { connect } from 'react-redux'
import allString from '~/config/allString'

import { changeLanguage } from '~/actions/asyn/user-login-register'
import UserLoginRegister from '~/components/user-login-register'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    iswhoing: state.auth == 'WHO_ING' || state.auth == 'WAIT',
    isusername: state.user.username,
    isregistersuccess: (state.auth == 'REGISTER_SUCCESS'),
    isloading: (state.auth == 'REGISTER_ING' || state.auth == 'LOGIN_ING'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeLanguage: (language) => {
        dispatch(changeLanguage(language))
    }
})

const UserLoginRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLoginRegister)

export default UserLoginRegisterContainer
