const newfeed = (state = {

}, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                sellposts: action.sellPosts,
                // ...action.searchResult,
            }
        default:
            return state
    }
}

export default newfeed
