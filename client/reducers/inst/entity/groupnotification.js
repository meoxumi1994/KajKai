const notification = (state = {
    offset: -1,
    notifications: [],
}, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION_SUCCESS':
            const notifications = action.notifications
            return {
                ...state,
                ...notifications,
                notifications: [
                    ...state.notifications,
                    ...notifications
                ]
            }
        default:
            return state
    }
}

export default notification
