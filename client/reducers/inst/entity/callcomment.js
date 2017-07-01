const callcomment = (state = {
    default : {
        content: '',
    }
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_CALLCOMMENT':
            return {...state, [action.id]: { content: action.value }}
        default:
            return state
    }
}
export default callcomment
