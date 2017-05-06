import { connect } from 'react-redux'

import UserVerify from '../../components/user-login-register/Verify'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    user: state.user,
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
