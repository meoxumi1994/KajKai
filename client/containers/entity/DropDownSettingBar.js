import { connect } from 'react-redux'
import { get } from '~/config/allString'

import DropDownSettingBar from '~/components/entity/DropDownSettingBar'
import { logOut } from '~/actions/asyn/user-login-register/login'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    return({
        ...state.user,
        CREATE_STORE: g('CREATE_STORE'),
        HOME: g('HOME'),
        SETTING: g('SETTING'),
        LOG_OUT: g('LOG_OUT'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLogoutClick: () => {
        console.log('onLogoutClick')
        dispatch(logOut())
    },
})

const DropDownSettingBarContainer = connect(
    mapStateToProps, mapDispatchToProps
)(DropDownSettingBar)

export default DropDownSettingBarContainer
