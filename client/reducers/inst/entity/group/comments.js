const comments = (state = {
    default: {
        id: undefined,
        products: [{
            id: undefined,
            name: 'cakes red',
            numbers: 1,
            price: '1.2$'
        },{
            id: undefined,
            name: 'cakes red',
            numbers: 2,
            price: '2.5$'
        }],
        isreply: false,
        content: 'more spicy please',
        avatar: './images/avatar.png',
        name: 'meoxumi',
        time: '10 mins',
        status: 'waiting',
        numlikes: 10,
        likes: [],
        numreplys: 3,
        replys: [],
        istyping: true,
        listcm: [{ id: 'default' },{ id: 'default' },{ id: 'default' }],
    }
}, action) => {
    switch (action.type) {
        case 'ENTITY_ROW_COMMENTS_REPLY':
            console.log('ENTITY_ROW_COMMENTS_REPLY', {...state, [action.id]: {...state[action.id], isreply: true } })
            return {...state, [action.id]: {...state[action.id], isreply: true }}
        case 'ENTITY_ROW_COMMENTS_CONTENT_HANDLE_CHANGE':
            return {...state, [action.id]: {...state[action.id], content: action.content }}
        default:
            return state
    }
}

export default comments
