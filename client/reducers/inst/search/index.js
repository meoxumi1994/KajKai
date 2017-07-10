const search = (state = {
  searchType: 'CATEGORY',
  id: '-1',
  keyword: '',
  searchResult: {
    users: [],
    stores: [],
    sellposts: []
  }
}, action) => {
  switch (action.type) {
    case 'SELECT_SEARCHTYPE':
      const { id } = action
      let searchType
      if (id == '-1') {
        searchType = 'CATEGORY'
      } else if (id == '-2') {
        
      }
      return { ...state, id }
    default:
      return state
  }
}

export default search
