const socketToken = ( state = null , action) => {
    switch (action.type) {
        case 'SETSOCKETTOKEN':
            return action.socketToken
        default:
            return state
    }
}

export default socketToken
