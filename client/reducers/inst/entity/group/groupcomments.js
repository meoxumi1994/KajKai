const groupcommets = (state = {
    default: {
        id: 'default',
        istyping: '',
        listtype: '',
        listcms: [{ id: 'default'},{ id: 'default'},{ id: 'default'}]
    }
}, action) => {
    switch (action.type) {
        case 'client/ADD_GROUPCOMMENTS':
            const { id, comment } = action.data
            return {...state, [id]: {...state[id],
                listcms: [...state[id].listcms, { id: comment.id }],
            }}
        case 'client/JOIN_GROUPCOMMENTS':
            const mylist = action.data.listcm.map((item) => ({ id: item.id }))
            return {...state, [action.id]: {
                ...action.data,
                listcms: mylist,
            } }
        default:
            return state
    }
}

export default groupcommets
