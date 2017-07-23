import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { changeLanguage } from '~/actions/asyn/user-login-register'
import UserLoginRegister from '~/components/user-login-register'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        KAJKAI_THANK: g('KAJKAI_THANK'),
        id: state.user.id,
        iswhoing: state.auth == 'WHO_ING' || state.auth == 'WAIT',
        isusername: state.user.username,
        isregistersuccess: (state.auth == 'REGISTER_SUCCESS'),
        isloading: (state.auth == 'REGISTER_ING' || state.auth == 'LOGIN_ING'),
    })
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    changeLanguage: (language) => {
        dispatch(changeLanguage(language))
    }
})

const UserLoginRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLoginRegister)

export default UserLoginRegisterContainer
