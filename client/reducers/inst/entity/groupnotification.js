const notification = (state = {
    statenotification: 'WAIT',
    offset: -1,
    notifications: [],
    numUnreaded: 0,
}, action) => {
    switch (action.type) {
        case 'global/NOTIFICATION':
            return {...state,
                numUnreaded: parseInt(state.numUnreaded) + 1,
                notifications: [
                    action.data,
                    ...state.notifications,
                ],
                offset: (state.offset == -1) ? action.data.time : state.offset,
            }
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
        case 'INST_ENTITY_GROUP_NOTIFICATION':
            return {
                ...state,
                [action.key] : action.value
            }
        default:
            return state
    }
}

export default notification
