const contactcomment = (state = {

}, action) => {
    switch (action.type) {
        case 'global/NOTIFICATION':
            switch (action.data.type) {
                case 'leadercomment': {...state,
                    [action.data.leadercommentid] : action.data,
                }
                default:
                    return state
            }
        default:
            return state
    }
}

export default contactcomment
