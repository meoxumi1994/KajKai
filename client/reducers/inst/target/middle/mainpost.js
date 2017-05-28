const mainpost = (state = {
    onedit: false,
    list: []
}, action) => {
    switch (action.type) {
        case 'client/STOREMAINPOST':
            console.log('client/STOREMAINPOST', action)
            return { ...state, list: action.data.list }
        case 'TARGET_MIDDLE_MAINPOST_ADD':
            return { ...state, list: [...state.list, {
                id: 'mainstore_row_'+state.list.length,
                type: action.rowtype,
                content: '',
                images: [],
            }]}
        case 'TARGET_MIDDLE_MAINPOST_ON_EDIT':
            return {...state, onedit: true }
        case 'TARGET_MIDDLE_MAINPOST_ON_SAVE':
            return {...state, onedit: false }
        default:
            return state
    }
}
export default mainpost
