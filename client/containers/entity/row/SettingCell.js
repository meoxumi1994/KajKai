import { connect } from 'react-redux'
import { get } from '~/config/allString'

import SettingCell from '~/components/entity/row/SettingCell'
import { FilteringPhoneDefaultVietName } from '~/containers/support'
import { updatePhone } from '~/actions/asyn/register-store'

import { updateStore } from '~/actions/asyn/store'
import { updateUser, updatePassword } from '~/actions/asyn/user'


const mapStateToProps = (state, { kind, type, value }) => {
    const g = (lang) => get(state.user.language, lang)
    const store = state.inst.store.index
    const user = state.user
    const settingcell = state.inst.entity.row.settingcell
    return({
        EDIT: g('EDIT'),
        SAVE: g('SAVE'),
        CONFIRM: g('CONFIRM'),
        ADD: g('ADD'),
        EDIT_PASSWORD: g('EDIT_PASSWORD'),
        NEW_PASSWORD: g('NEW_PASSWORD'),
        OLD_PASSWORD: g('OLD_PASSWORD'),
        RE_PASSWORD: g('RE_PASSWORD'),
        GET_CURRENT_POSITION: g('GET_CURRENT_POSITION'),
        DONE: g('DONE'),
        value: (type=='store') ? store[kind] : user[kind],
        ...settingcell,
    })
}

const mapDispatchToProps = (dispatch, { id, kind, type }) => ({
    onUpdate: (value) => {
        if(kind == 'password'){
            dispatch(updatePassword(value.password, value.newpassword))
        }else
        if(type == 'store'){
            dispatch(updateStore(id, { [kind] : value }))
        }else{
            if(kind == 'yearOfBirth'){
                dispatch(updateUser({ [kind] : 1900 + (new Date()).getYear() - value }) )
            }else{
                dispatch(updateUser({ [kind] : value }))
            }
        }
    },
    updatePhone: (phone) => {
        dispatch(updatePhone(FilteringPhoneDefaultVietName(phone)))
    },
    onChange: (key, value) => {
        dispatch({ type: 'INST_ENTITY_ROW_SETTING_CELL', key: key, value: value })
    }
})

const SettingCellContainer = connect(
    mapStateToProps, mapDispatchToProps
)(SettingCell)

export default SettingCellContainer
