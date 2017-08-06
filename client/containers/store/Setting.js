import { connect } from 'react-redux'
import { get } from '~/config/allString'

import Setting from '~/components/store/Setting'

const mapStateToProps = (state, ownProps) => {
    const g = (lang) => get(state.user.language, lang)
    const store = state.inst.store.index
    return({
        ...store,
        STORE_NAME: g('STORE_NAME'),
        ENTER_STORE: g('ENTER_STORE'),
        STORE_NAME_FAILED: g('STORE_NAME_FAILED'),
        ENTER_CATEGORY: g('ENTER_CATEGORY'),
        CREATE_STORE_DESCRIPTION_4: g('CREATE_STORE_DESCRIPTION_4'),
        CATEGORY_FAILED: g('CATEGORY_FAILED'),
        ENTER_YOUR_ADDRESS: g('ENTER_YOUR_ADDRESS'),
        ADDRESS_DESCRIPTION: g('ADDRESS_DESCRIPTION'),
        ADDRESS_FAILED: g('ADDRESS_FAILED'),
        PHONE: g('PHONE'),
        POSITION_IN_MAP: g('POSITION_IN_MAP'),
        POSITION_FAILED: g('POSITION_FAILED'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const SettingContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Setting)

export default SettingContainer
