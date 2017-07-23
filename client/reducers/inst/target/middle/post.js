const post = (state = {
    default: {
        id: 'default',
        onedit: false,
        list: [],
    }
}, action) => {
    switch (action.type) {
        case 'client/STORE_POST':
            const newlist = action.data.list.map((item) => ({ id: item.id}))
            return { ...state, [action.data.id]: {
                list: newlist,
                onedit: false,
            } }
        case 'TARGET_MIDDLE_POST_ADD':
            return { ...state, [action.id]: {
                ...state[action.id],
                list: [...state[action.id].list, { id: action.rowid}]
            } }
        case 'TARGET_MIDDLE_POST_ON_EDIT':
            return {...state, [action.id] : {
                ...state[action.id],
                onedit: true
            }}
            return {...state}
        default:
            return state
    }
}
export default post
