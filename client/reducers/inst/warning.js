const warning = (state = {
    show: false,
}, action) => {
    switch (action.type) {
        case 'global/ERROR':
            console.log(action)
            return {
                ...state,
                show: true
            }
        case 'INST_WARNING_CHANGE':
            return {
                ...state,
                [action.key] : action.value
            }
        default:
            return state
    }
}
export default warning
