import utils from '../utils'
import userMap from './userMap'

const user = (state = {
    keyy: [],
    mapp: {},
    current: {
        id: ''
    },
    display: {
        details: false,
        loadMore: true
    }
}, action) => {
    switch (action.type) {

      case 'ADMIN/USER/INIT_USERS':
          return {
              ...state,
              keyy: [
                  ...state.keyy,
                  ...action.data.map(d => d.user.id)
              ],
              mapp: {
                  ...state.mapp,
                  ...utils.getUsersMap(action)
              }
          }

      case 'ADMIN/USER/BAN':
          const { defendantId } = action.data
          return {
              ...state,
              mapp: {
                  ...state.mapp,
                  [defendantId]: userMap(state.mapp[defendantId], action)
              }
          }

      case 'ADMIN/USER/DISPLAY':
          switch (action.subType) {
            case 'USER_DETAILS':
                return {
                    ...state,
                    current: {
                        id: action.data.id
                    },
                    display: {
                        ...state.display,
                        details: action.data.display
                    }
                }
            case 'LOAD_MORE':
                return {
                    ...state,
                    display: {
                        ...state.display,
                        loadMore: action.data.display
                    }
                }

            default:
                return {
                    ...state,
                    current: {
                        id: action.data.id
                    }
                }
          }

      default:
        return state
    }
}

export default user
