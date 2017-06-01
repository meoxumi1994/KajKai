const comments = (state = {
    default: {
        id: undefined,
        products: [],
        isreply: false,
        content: '',
        avatar: './images/avatardefault.png',
        name: '',
        time: '',
        status: 'waiting',
        numlikes: 0,
        likes: [],
        numreplys: 0,
        replys: [],
        istyping: true,
        listcm: [],
    }
}, action) => {
    switch (action.type) {
        case 'ENTITY_ROW_COMMENTS_REPLY':
            console.log('ENTITY_ROW_COMMENTS_REPLY', {...state, [action.id]: {...state[action.id], isreply: true } })
            return {...state, [action.id]: {...state[action.id], isreply: true }}
        case 'ENTITY_ROW_COMMENTS_CONTENT_HANDLE_CHANGE':
            return {...state, [action.id]: {...state[action.id], content: action.content }}
        case 'client/JOIN_GROUPCOMMENTS':
            const listcms = action.data.listcms
            listcms.map((item) => {
                state = {...state, [item.id]: {...item}}
            })
            return {...state}
        default:
            return state
    }
}

export default comments
