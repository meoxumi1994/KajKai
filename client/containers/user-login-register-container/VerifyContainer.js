import { connect } from 'react-redux'
import allString from '~/config/allString'

import UserVerify from '~/components/user-login-register/Verify'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    auth: state.auth,
    user: state.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onBackRegisterClick: () => {
        dispatch({ type: 'WAIT' })
    }
})

const UserVerifyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(UserVerify)

export default UserVerifyContainer
