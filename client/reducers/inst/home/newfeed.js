const newfeed = (state = {
    sellposts: []
}, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            console.log(action)
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
