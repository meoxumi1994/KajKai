export const selectSearchType = (id) => ({
  type: 'SELECT_SEARCHTYPE',
  id
})

export const changeKeyWord = (keyword) => ({
  type: 'CHANGE_KEYWORD',
  keyword
})

export const changeLocation = (location) => ({
  type: 'CHANGE_LOCATION',
  location
})
