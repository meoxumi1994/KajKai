import { connect } from 'react-redux'
import { get } from '~/config/allString'

import SettingCell from '~/components/entity/row/SettingCell'
import { FilteringPhoneDefaultVietName } from '~/containers/support'
import { updatePhone } from '~/actions/asyn/register-store'

import { updateStore } from '~/actions/asyn/store'
import { updateUser } from '~/actions/asyn/user'


const mapStateToProps = (state, { kind }) => {
    const g = (lang) => get(state.user.language, lang)
    const store = state.inst.store.index
    const user = state.inst.user.index
    const settingcell = state.inst.entity.row.settingcell
    return({
        EDIT: g('EDIT'),
        SAVE: g('SAVE'),
        CONFIRM: g('CONFIRM'),
        value: store[kind],
        ...settingcell,
    })
}

const mapDispatchToProps = (dispatch, { id, kind, type }) => ({
    onUpdate: (value) => {
        if(type == 'store'){
            dispatch(updateStore(id, { [kind] : value }))
        }else{
            dispatch(updateUser({ [kind] : value }))
        }
    },
    updatePhone: (phone) => {
        dispatch(updatePhone(FilteringPhoneDefaultVietName(phone)))
    },
    onChange: (key, value) => {
        console.log('onChange: (key, value)', key, value )
        dispatch({ type: 'INST_ENTITY_ROW_SETTING_CELL', key: key, value: value })
    }
})

const SettingCellContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SettingCell)

export default SettingCellContainer
