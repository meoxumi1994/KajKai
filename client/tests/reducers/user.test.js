import 'babel-polyfill'

import user from '../../reducers/data/user'

describe('user reducer', () => {
  it('should return initial state', () => {
    const expectedState = {
        avatarUrl: '/images/avatardefaultIcon.png',
        coverUrl: '/images/cover.png',
        language: 'en',
        storeList: [],
    }
    expect(user(undefined, {})).toEqual(expectedState)
  })

  it('should handle LOGOUT', () => {
    const initialState = {
      language: 'vi'
    }
    const action = {
      type: 'LOGOUT'
    }
    const expectedState = {
        avatarUrl: '/images/avatardefaultIcon.png',
        coverUrl: '/images/cover.png',
        language: 'vi',
        storeList: [],
    }
    expect(user(initialState, action)).toEqual(expectedState)
  })
})
