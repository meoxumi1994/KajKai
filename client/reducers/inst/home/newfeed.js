const newfeed = (state = {

}, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                ...action.searchResult,
            }
        default:
            return state
    }
}

export default newfeed
