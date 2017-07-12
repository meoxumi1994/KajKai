const search = (state = {
  searchType: 'CATEGORY',
  keyword: '',
  location: '',
  id: '-1',
  offset: 0,
  length: 7,
  searchResult: {
    users: [
      {
        userId: '4y281462314124o',
        username: 'Charity',
        avatarUrl: 'https://d3g3aygbu50f7h.cloudfront.net/liuyifei.jpg'
      },
      {
        userId: '4y2814ggegw62314124o',
        username: 'LiuYiFei',
        avatarUrl: 'https://d3g3aygbu50f7h.cloudfront.net/liuyifei.jpg'
      }
    ],
    stores: [
      {
        storeId: 'u02ry23fu2y04',
        storeName: 'Đây là storeName',
        avatarUrl: 'https://d3g3aygbu50f7h.cloudfront.net/liuyifei.jpg'
      },
      {
        storeId: 'u02ry23fugdgdg2y04',
        storeName: 'Táo Tàu (Minh KHÔNG GAY)',
        avatarUrl: 'https://d3g3aygbu50f7h.cloudfront.net/liuyifei.jpg'
      }
    ],
    sellposts: [
      {
        sellpostId: 'fmslhf230fup',
        title: 'BÁN HÀNG TĂNG GIÁ',
        avatarUrl: 'https://d3g3aygbu50f7h.cloudfront.net/liuyifei.jpg'
      },
      {
        sellpostId: 'fjalsfhh2odgdgdg0fh',
        title: 'Đây là title của cái sellpost này :D :) :)))',
        avatarUrl: 'https://d3g3aygbu50f7h.cloudfront.net/liuyifei.jpg'
      }
    ]
  }
}, action) => {
  switch (action.type) {
    case 'LOADED_SEARCHRESULT':
      const { searchResult } = action
      console.log('state.searchResult: ', state.searchResult);
      console.log(searchResult);
      if (state.offset == 0) {
        return { ...state, searchResult }
      }
      const { searchResult: mSearchResult } = state
      for (let property in searchResult) {
        console.log('property: ', property);
        if (searchResult[property]) {
          mSearchResult[property] = [ ...mSearchResult[property], searchResult[property]]
        }
      }
      return { ...state, searchResult: mSearchResult }
    case 'SELECT_SEARCHTYPE':
      const { id } = action
      let searchType
      if (id == '-3') {
        searchType = 'USER'
      } else if (id == '-2') {
        searchType = 'STORE'
      } else {
        searchType = 'CATEGORY'
      }
      return { ...state, id, searchType }
    case 'CHANGE_KEYWORD':
      const { keyword } = action
      return { ...state, keyword }
    case 'CHANGE_LOCATION':
      const { location } = action
      return { ...state, location }
    case 'ON_SCROLL_BODY':
      let { offset, length } = state
      offset += length
      length = 1
      return { ...state, offset, length }
    default:
      return state
  }
}

export default search
