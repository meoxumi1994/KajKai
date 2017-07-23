import { connect } from 'react-redux'
import allString from '~/config/allString'

import Verify from '~/components/user-login-register/Verify'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onBackRegisterClick: () => {
        dispatch({ type: 'WAIT' })
    }
})

const VerifyContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Verify)

export default VerifyContainer
