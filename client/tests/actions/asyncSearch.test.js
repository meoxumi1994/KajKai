import 'babel-polyfill'
import 'whatwg-fetch'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../../actions/asyn/search'
import config from '../../config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async search actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should create SEARCH_SUCCESS when searching is successful', () => {
    const searchQuery = {
      searchType: 'somekeyword'
    }
    const searchResult = ['result 1', 'result 2']
    fetchMock.get('begin:' + config.getDomain() + '/search/' + searchQuery.searchType.toLowerCase(), {
      status: 200,
      body: searchResult
    })

    const expectedActions = [
      { type: 'SEARCH_ING' },
      { type: 'SEARCH_SUCCESS', searchResult }
    ]
    const store = mockStore()
    
    return store.dispatch(actions.search(searchQuery)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})
