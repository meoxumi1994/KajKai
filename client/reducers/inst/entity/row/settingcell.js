const settingcell = (state = {
    openModalPhone: false
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_ROW_SETTING_CELL':
            console.log(action)
            return {...state,
                [action.key] : action.value
            }
        case 'VERIFY_PHONE_SUCCESS':
            return {...state, openModalPhone: false }
        default:
            return state
    }
}

export default settingcell
