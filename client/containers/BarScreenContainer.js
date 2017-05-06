import { connect } from 'react-redux'

import { logOut } from '../actions/asyn/user-login-register/login'
import BarScreen from '../components/BarScreen'

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    user: state.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogoutClick: () => {
        dispatch(logOut())
    }
})

const BarScreenContainer = connect(
    mapStateToProps, mapDispatchToProps
)(BarScreen)

export default BarScreenContainer
