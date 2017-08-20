const useroverview = (state = {
    
}, action) => {
    switch (action.type) {
        case 'USER_OVERVIEW_GET_SUCCESS':
            return {...state,
                [action.user.id] : action.user
            }
        default:
            return state
    }
}
export default useroverview
