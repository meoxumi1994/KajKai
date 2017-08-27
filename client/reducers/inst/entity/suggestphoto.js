const suggestphoto = (state = {
}, action) => {
    switch (action.type) {
        case 'GET_PHOTO_SUGGEST_ING':
        case 'GET_PHOTO_SUGGEST_FAILED':
            if(state[action.id])
                return {
                    ...state,
                    [action.id] : {
                        ...state[action.id],
                        myState: action.type
                    }
                }
            return {
                ...state,
                [action.id] : { myState: action.type }
            }
        case 'GET_PHOTO_SUGGEST_SUCCESS':
            return {...state,
                [action.id] : {
                    myState: action.type,
                    listImage: action.listImage
                }
            }
        default:
            return state
    }
}

export default suggestphoto
