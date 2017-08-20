const popupupdate = (state = {
    popuptime: 0,
    kind: '',
    type: '',
    value: ''
}, action) => {
    switch (action.type) {
        case 'TIME_DOWN':
            return {
                ...state,
                popuptime: state.popuptime - 1,
            }
        case 'INST_POPUP_UPDATE_CHANGE':
            return {
                ...state,
                [action.key] : action.value
            }
        case 'UPDATE_USER_FAILED':
            let uftype, ufvalue
            for(let i in action.user){
                uftype = i
                ufvalue = action.user[i]
                break
            }
            return {
                ...state,
                status: 'failed',
                popuptime: 3,
                kind: 'user',
                type: uftype,
                value: ufvalue
            }
        case 'UPDATE_USER_SUCCESS':
            let utype, uvalue
            for(let i in action.user){
                utype = i
                uvalue = action.user[i]
                break
            }
            return {
                ...state,
                status: 'success',
                popuptime: 3,
                kind: 'user',
                type: utype,
                value: uvalue
            }
        case 'UPDATE_STORE_FAILED':
            let sftype, sfvalue
            for(let i in action.store){
                sftype = i
                sfvalue = action.store[i]
                break
            }
            return {
                ...state,
                status: 'failed',
                popuptime: 3,
                kind: 'store',
                type: sftype,
                value: sfvalue
            }
        case 'UPDATE_STORE_SUCCESS':
            let stype, svalue
            for(let i in action.store){
                stype = i
                svalue = action.store[i]
                break
            }
            return {
                ...state,
                status: 'success',
                popuptime: 3,
                kind: 'store',
                type: stype,
                value: svalue
            }
        default:
            return state
    }
}

export default popupupdate
