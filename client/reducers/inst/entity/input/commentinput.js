const commentinput = (state = { default: {
    content: '',
}}, action) => {
    switch (action.type) {
        case 'ENTITY_GROUP_COMMENTS_ADD':
            console.log('ENTER', state[action.id].content )
            return {...state, [action.id] : { ...state[action.id], content: '' } }
        case 'ENTITY_INPUT_COMMENTINPUT_CONTENT_HANDLE_CHANGE':
            return {...state, [action.id] : { ...state[action.id], content: action.content } }
        default:
            return state
    }
}

export default commentinput
