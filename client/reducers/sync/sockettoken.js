const socketToken = ( state = null , action) => {
    switch (action.type) {
        case 'SETSOCKETTOKEN':
            if (action.socketToken) {
              return action.socketToken
            }
            return state
        default:
            return state
    }
}

export default socketToken
