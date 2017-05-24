const mainpost = (state = {
    list: []
}, action) => {
    switch (action.type) {
        case 'TARGET_MAINPOST_EDIT':
            return {...state, list: action.list }
        case 'TARGET_MAINPOST_ADD':
            return {...state, list: [ ...state.list, action.row ]}
        default:
            return state
    }
}
export default mainpost
