import { connect } from 'react-redux'

import { changeLanguage } from '../../actions/language'
import UserLoginRegister from '../../components/user-login-register'

const mapStateToProps = (state, ownProps) => ({
    language: state.language
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLanguageClick: (language) => dispatch(changeLanguage(language))
})

const UserLoginRegisterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserLoginRegister)

export default UserLoginRegisterContainer
