const commentinput = (state = { default: {
    content: '',
    storeId: undefined,
}}, action) => {
    switch (action.type) {
        case 'ENTITY_GROUP_COMMENTS_ADD':
            return {...state, [action.id] : { ...state[action.id], content: '' } }
        case 'ENTITY_INPUT_COMMENTINPUT_CONTENT_HANDLE_CHANGE':
            return {...state, [action.id] : { ...state[action.id], content: action.content } }
        default:
            return state
    }
}

export default commentinput
