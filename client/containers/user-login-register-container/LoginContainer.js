import { connect } from 'react-redux'

import { logIn, logInFaceBook, logInGoogle } from '../../actions/asyn/user-login-register/login'
import UserLogin from '../../components/user-login-register/Login'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    auth: state.auth,
    user: state.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLoginClick : (loginId, password) => {
        dispatch(logIn(loginId, password))
    },
    onlogInFaceBookClick: (tokenId) => {
        dispatch(logInFaceBook(tokenId))
    },
    onlogInGoogleClick: (tokenId) => {
        dispatch(logInGoogle(tokenId))
    },
})

const UserLoginContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLogin)

export default UserLoginContainer
