const bar = (state = {
    clicksetting: false
}, action) => {
    switch (action.type) {
        case 'SCREEN_CLICK':
            return {...state,
                clicksetting: false,
            }
        case 'INST_BAR_CHANGE':
            return {...state,
                [action.key] : action.value,
            }
        default:
            return state
    }
}
export default bar
