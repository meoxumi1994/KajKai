const popupnotification = (state = {

}, action) => {
    switch (action.type) {
        case 'INST_ENTITY_POPUP_NOTIFY':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.key] : action.value,
                }
            }
        case 'global/NOTIFICATION':
            return {
                ...state,
                [action.data.id] : {
                    ...action.data,
                    isclick: true,
                }
            }
        default:
            return state
    }
}

export default popupnotification
