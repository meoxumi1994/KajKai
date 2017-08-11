const autocomplete = (state = {
    data: [],
    value: '',
}, action) => {
    switch (action.type) {
        case 'INST_MAP_AUTOCOMPLETE_CHANGE':
            return {
                ...state,
                [action.key] : action.value
            }
        default:
            return state
    }
}
export default autocomplete
