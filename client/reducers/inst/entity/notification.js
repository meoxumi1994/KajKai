const notification = (state = {
}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_NOTIFICATION_CHANGE':
            return {...state,
                [action.id] : {
                    [action.key] : action.value
                }
            }
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
