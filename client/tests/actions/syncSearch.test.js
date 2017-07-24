import * as actions from '../../actions/sync/search'

describe('sync search actions', () => {
  it('should create action to select search type', () => {
    const id = 1
    const expectedAction = {
      type: 'SELECT_SEARCHTYPE',
      id
    }
    expect(actions.selectSearchType(id)).toEqual(expectedAction)
  })

  it('should create action to change keyword', () => {
    const keyword = 'test keyword'
    const expectedAction = {
      type: 'CHANGE_KEYWORD',
      keyword
    }
    expect(actions.changeKeyWord(keyword)).toEqual(expectedAction)
  })
})
