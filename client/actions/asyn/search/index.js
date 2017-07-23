import { flem } from '~/actions/support'

export const search = (searchQuery) => dispatch => {
    const path = searchQuery.searchType.toLowerCase()
    dispatch({ type: 'SEARCH_ING'})
    flem('/search/' + path, searchQuery)
    .then((searchResult) => {
        dispatch({ type: 'SEARCH_SUCCESS', searchResult })
    })
}
