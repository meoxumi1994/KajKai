const groupcommets = (state = {
    default: {
        id: 'default',
        istyping: '',
        listtype: '',
        comments: [],
        storeId: undefined,
    }
}, action) => {
    switch (action.type) {
        case 'client/ADD_GROUPCOMMENTS':
            const { id, comment } = action.data
            return {...state, [id]: {...state[id],
                comments: [...state[id].comments, { id: comment._id }],
            }}
        case 'client/JOIN_GROUPCOMMENTS':
            const mylist = action.data.comments.map((item) => ({ id: item._id }))
            return {...state, [action.data.id]: {
                ...action.data,
                comments: mylist,
                storeId: action.data.storeId,
            }}
        default:
            return state
    }
}

export default groupcommets
