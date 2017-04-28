import { connect } from 'react-redux'

import { registerResult } from '../../actions/user-login-register'
import UserVerify from '../../components/user-login-register/Verify'

const mapStateToProps = (state, ownProps) => ({
    language: state.language,
    registerResult: state.registerResult
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onBackRegisterClick: () => {
      dispatch(registerResult('REGISTER_WAIT'))
    }
})

const UserVerifyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserVerify)

export default UserVerifyContainer
