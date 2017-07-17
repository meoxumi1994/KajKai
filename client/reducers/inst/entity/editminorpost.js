const editsellpost = (state = {
    description: '',
    content: '',
    images: [],
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_POST_EDIT_MINOR_POST_CHANGE':
            return {...state,
                [action.key] : action.value,
            }
        default:
            return state
    }
}
export default editsellpost
