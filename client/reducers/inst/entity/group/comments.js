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
        content: '',
        avatar: 'avatar.png',
        name: 'meoxumi',
        time: '10 mins',
        status: 'waiting',
        likes: 10,
        numlikes: [],
        istyping: true,
        listcm: [{ id: 'default' },{ id: 'default' },{ id: 'default' }],
    }
}, action) => {
    switch (action.type) {
        case 'ENTITY_ROW_COMMENTS_CONTENT_HANDLE_CHANGE':
            return {...state, [action.id]: {...state[action.id], content: action.content }}
        default:
            return state
    }
}

export default comments
