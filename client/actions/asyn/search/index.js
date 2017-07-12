import { flem } from '~/actions/support'

export const search = (searchQuery) => dispatch => {
  const path = searchQuery.searchType.toLowerCase()
  flem('/search/' + path, searchQuery).then((searchResult) => {
    dispatch({
      type: 'LOADED_SEARCHRESULT',
      searchResult
    })
  })
}
