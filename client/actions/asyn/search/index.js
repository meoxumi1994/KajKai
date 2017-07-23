import { flem } from '~/actions/support'

export const search = (searchQuery) => dispatch => {
    const path = searchQuery.searchType.toLowerCase()
    console.log('SEARCH_ING')
    dispatch({ type: 'SEARCH_ING'})
    flem('/search/' + path, searchQuery)
    .then((searchResult) => {
        console.log('SEARCH_SUCCESS', searchResult)
        dispatch({ type: 'SEARCH_SUCCESS', ...searchResult })
    })
}
