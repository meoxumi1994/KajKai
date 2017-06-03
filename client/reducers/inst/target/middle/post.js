const post = (state = {
    onedit: false,
    list: []
}, action) => {
    switch (action.type) {
        case 'client/STORE_POST':
            const newlist = action.data.list.map((item) => ({ id: item.id}))
            return { ...state, list: newlist }
        case 'TARGET_MIDDLE_POST_ADD':
            return { ...state, list: [...state.list, { id: action.rowid}] }
        case 'TARGET_MIDDLE_POST_ON_EDIT':
            return {...state, onedit: true }
        case 'TARGET_MIDDLE_POST_ON_SAVE':
            return {...state, onedit: false }
        default:
            return state
    }
}
export default post
