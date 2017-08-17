import { connect } from 'react-redux'
import { get } from '~/config/allString'

import { unBlockUser } from '~/actions/asyn/user'
import Setting from '~/components/user/Setting'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const user = state.user
    // const Setting = state.inst.containers.user.setting
    return({
        ...user,
        USER_NAME: g('USER_NAME'),
        ENTER_STORE: g('ENTER_STORE'),
        STORE_NAME_FAILED: g('STORE_NAME_FAILED'),
        ENTER_CATEGORY: g('ENTER_CATEGORY'),
        CREATE_STORE_DESCRIPTION_4: g('CREATE_STORE_DESCRIPTION_4'),
        CATEGORY_FAILED: g('CATEGORY_FAILED'),
        ENTER_YOUR_ADDRESS: g('ENTER_YOUR_ADDRESS'),
        ADDRESS_DESCRIPTION: g('ADDRESS_DESCRIPTION'),
        ADDRESS_FAILED: g('ADDRESS_FAILED'),
        PHONE: g('PHONE'),
        ENTER_YOUR_PHONE: g('ENTER_YOUR_PHONE'),
        AGE: g('AGE'),
        ENTER_AGE: g('ENTER_AGE'),
        NOTE_AGE: g('NOTE_AGE'),
        POSITION_IN_MAP: g('POSITION_IN_MAP'),
        POSITION_FAILED: g('POSITION_FAILED'),
        BLOCK: g('BLOCK'),
        UNBLOCK: g('UNBLOCK'),
        GENERAL: g('GENERAL'),
        SECURITY: g('SECURITY'),
        PASSWORD: g('PASSWORD'),
        NOTE_VERIFY_PASSWORD: g('NOTE_VERIFY_PASSWORD'),
        NOTE_PASSWORD: g('NOTE_PASSWORD'),
        BLOCK_DESCRIPTION: g('BLOCK_DESCRIPTION'),
        BLOCK_USER: g('BLOCK_USER'),
        SEARCH_BY_NAME: g('SEARCH_BY_NAME')
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    unBlock : (id) => {
        dispatch(unBlockUser(id))
    }
})

const SettingContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Setting)

export default SettingContainer
