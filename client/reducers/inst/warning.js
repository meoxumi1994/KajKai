const warning = (state = {
    kind: undefined,
    content: '',
    show: false,
}, action) => {
    switch (action.type) {
        case 'global/ERROR':
            return {
                ...state,
                kind: 'normal',
                show: true
            }
        case 'INST_WARNING_CHANGE':
            return {
                ...state,
                [action.key] : action.value
            }
        case 'USER_BANNED':
            return {
                ...state,
                kind: 'ban',
                content: action.content,
                show: true
            }
        default:
            return state
    }
}
export default warning
