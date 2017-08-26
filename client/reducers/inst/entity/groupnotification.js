const notification = (state = {
    statenotification: 'WAIT',
    offset: -1,
    notifications: [],
    numUnreaded: 0,
}, action) => {
    switch (action.type) {
        case 'SCREEN_CLICK':
            return {...state,
                isTurnNotifi: false,
            }
        case 'global/NOTIFICATION':
            if(document.title.split(")").length > 1){
                document.title = '(' + (parseInt(state.numUnreaded) + 1) + ')' + document.title.split(")")[1]
            }else {
                document.title = '(' + (parseInt(state.numUnreaded) + 1) + ') ' + document.title
            }
            return {...state,
                numUnreaded: parseInt(state.numUnreaded) + 1,
                notifications: [
                    action.data,
                    ...state.notifications,
                ],
                offset: (state.offset == -1) ? action.data.time : state.offset,
            }
        case 'WHO_SUCCESS':
            return {...state,
                numUnreaded: action.user.numUnreaded
            }
        case 'GET_NOTIFICATION_ING':
        case 'GET_NOTIFICATION_FAILED':
            return {
                ...state,
                statenotification: action.type,
            }
        case 'GET_NOTIFICATION_SUCCESS':
            if(document.title.split(")").length > 1){
                document.title =  document.title.split(")")[1]
            }else {
                document.title =  document.title
            }
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
        case 'INST_ENTITY_GROUP_NOTIFICATION_CHANGE':
            if(action.key == 'numUnreaded'){
                if(document.title.split(")").length > 1){
                    document.title =  document.title.split(")")[1]
                }else {
                    document.title =  document.title
                }
            }
            return {
                ...state,
                [action.key] : action.value
            }
        default:
            return state
    }
}

export default notification
