import { connect } from 'react-redux'
import allString from '~/config/allString'

import { logOut } from '~/actions/asyn/user-login-register/login'
import Bar from '~/components/Bar'

const mapStateToProps = (state, ownProps) => ({
    g : (lang) => allString.get(state.user.language, lang),
    isusername: state.user.username,
    avatarUrl: state.user.avatarUrl,
    isloading: (state.auth == 'WHO_ING' || state.auth == 'LOGIN_ING'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogoutClick: () => {
        dispatch(logOut())
    },
    setMultiChat: (value) => {
        dispatch({type: 'MULTIPLE_CHAT', data: value})
    }
})

const BarContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Bar)

export default BarContainer
