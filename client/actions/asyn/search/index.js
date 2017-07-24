
import { flem } from '../../support'

export const search = (searchQuery) => dispatch => {
    const path = searchQuery.searchType.toLowerCase()
    dispatch({ type: 'SEARCH_ING'})
    return flem('/search/' + path, searchQuery)
    .then((searchResult) => {
        dispatch({ type: 'SEARCH_SUCCESS', searchResult })
    })
}
