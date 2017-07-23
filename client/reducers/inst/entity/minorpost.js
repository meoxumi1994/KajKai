const minorpost = (state = {

}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_MINOR_POST':
            return {...state,
                [action.id] : {
                    ...state[action.id],
                    [action.key] : action.value
                }
            }
        default:
            return state
    }
}
export default minorpost
