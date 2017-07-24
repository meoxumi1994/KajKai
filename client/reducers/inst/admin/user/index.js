import utils from '../utils'
import userMap from './userMap'

const user = (state = {
    keyy: [],
    mapp: {},
    current: {
        display: false,
        id: ''
    }
}, action) => {
    switch (action.type) {

      case 'ADMIN/USER/INIT_USERS':
          // console.log('action', action.data);
          return {
              ...state,
              keyy: action.data.map(d => d.user.id),
              mapp: utils.getUsersMap(action)
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

      default:
        return state
    }
}

export default user
