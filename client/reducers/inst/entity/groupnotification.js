const notification = (state = {
    statenotification: 'WAIT',
    offset: -1,
    notifications: [],
}, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION_ING':
        case 'GET_NOTIFICATION_FAILED':
            return {
                ...state,
                statenotification: action.type,
            }
        case 'GET_NOTIFICATION_SUCCESS':
            const notifications = action.notifications
            return {
                ...state,
                statenotification: action.type,
                ...notifications,
                offset: action.offset,
                numUnreaded: action.numUnreaded,
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
