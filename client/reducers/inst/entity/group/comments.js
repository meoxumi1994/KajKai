const comments = (state = {
    default: {
        id: 'default',
        isreply: false,
        istyping: true,
        listcm: [],
    }
}, action) => {
    switch (action.type) {
        case 'client/JOIN_COMMENTS':
            const mylistcm = action.data.comments.map((item) => ({ id: item._id }))
            return {...state, [action.data.id]: {...state[action.data.id], listcm: mylistcm, isreply: true }}
        case 'client/ADD_COMMENTS':
            const id = action.data.id
            const item = action.data.comment
            return {...state, [id]: {
                ...state[id],
                listcm: [...state[id].listcm, { id: item._id } ]
            }}
        case 'ENTITY_ROW_COMMENTS_CONTENT_HANDLE_CHANGE':
            return {...state, [action.id]: {...state[action.id], content: action.content }}
        case 'client/ADD_GROUPCOMMENTS':
            const { comment } = action.data
            return {...state, [comment._id]: {...comment} }
        case 'client/JOIN_GROUPCOMMENTS':
            const comments = action.data.comments
            comments.map((item) => {
                state = {...state, [item._id]: {
                    id: item._id,
                }}
            })
            return {...state}
        default:
            return state
    }
}

export default comments
