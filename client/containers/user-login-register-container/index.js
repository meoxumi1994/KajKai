import { connect } from 'react-redux'

import { changeLanguage } from '~/actions/asyn/user-login-register'
import UserLoginRegister from '../../components/user-login-register'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    user: state.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeLanguageClick: (language, user) => {
        dispatch(changeLanguage(language, user))
    }
})

const UserLoginRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLoginRegister)

export default UserLoginRegisterContainer
