import { connect } from 'react-redux'

import { changeLanguage } from '../../actions/language'
import { registerResult } from '../../actions/user-login-register/register'
import UserLoginRegister from '../../components/user-login-register'

const mapStateToProps = (state, ownProps) => ({
    language: state.language,
    registerResult: state.registerResult
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLanguageClick: (language) => dispatch(changeLanguage(language))
})

const UserLoginRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLoginRegister)

export default UserLoginRegisterContainer
