const comment = (state = { default: {
    id: undefined,
    content: 'give me 2 cakes more, please',
    numlikes: 2,
    likes: ['meoxumi','meomun'],
    avatar: './images/avatar.png',
    name: 'pornnappan pornpenpipat',
    time: '11 mins',
}}, action) => {
    switch (action.type) {
        case 'client/JOIN_COMMENTS':
            action.listcm.map((cm) => {
                state = {...state, [cm.id]: {...cm}}
            })
            return state
        case 'client/ADD_COMMENTS':
            return {state, [action.id]: {...state[action.id], ...action}}
        default:
            return state
    }
}

export default comment
