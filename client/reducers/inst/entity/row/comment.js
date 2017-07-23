const comment = (state = { default: {
    id: undefined,
    content: 'give me 2 cakes more, please',
    numlike: 2,
    likes: ['meoxumi','meomun'],
    numreplys: 3,
    replys: ['meoxumi','meomun','meobeo'],
    avatar: '/images/avatar.png',
    name: 'pornnappan pornpenpipat',
    time: '11 mins',
}}, action) => {
    switch (action.type) {
        case 'client/ADD_GROUPCOMMENTS':
            const { comment } = action.data
            return {...state, [comment._id]: {
                id: comment._id,
                content: comment.content,
                name: comment.posterName,
                avatar: comment.posterAvatar,
                time: comment.time,
            } }
        case 'client/JOIN_GROUPCOMMENTS':
            const comments = action.data.comments
            comments.map((item) => {
                state = {...state, [item._id]: {
                    id: item._id,
                    content: item.content,
                    name: item.posterName,
                    avatar: item.posterAvatar,
                    time: item.time,
                }}
            })
            return {...state}
        case 'client/JOIN_COMMENTS':
            action.data.comments.map((item) => {
                state = {...state, [item._id]: {
                    id: item._id,
                    content: item.content,
                    name: item.posterName,
                    avatar: item.posterAvatar,
                    time: item.time,
                }}
            })
            return state
        case 'client/ADD_COMMENTS':
            const item = action.data.comment
            return {...state, [item._id]: {
                id: item._id,
                content: item.content,
                name: item.posterName,
                avatar: item.posterAvatar,
                time: item.time,
            }}
        default:
            return state
    }
}

export default comment
