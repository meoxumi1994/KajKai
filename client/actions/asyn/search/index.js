import { flem } from '~/actions/support'

export const search = (searchQuery) => dispatch => {
    dispatch({ type: 'SEARCH_ING'})
    return flem('/search/' + searchQuery.currentType, searchQuery)
    .then((searchResult) => {
        dispatch({ type: 'SEARCH_SUCCESS', ...searchResult })
    })
}
