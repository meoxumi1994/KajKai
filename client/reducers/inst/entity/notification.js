const notification = (state = {

}, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION_SUCCESS':
            let newstate = state
            action.notifications.map((item) => {
                newstate = {...newstate,
                    [item.id] : item
                }
            })
            return newstate
        default:
            return state
    }
}

export default notification
