import utils from '../utils'

const user = (state = {
    keyy: [],
    mapp: {},
    details: {
      id: '',
      stores: {
          keyy: [],
          mapp: {}
      }
    }
}, action) => {
    switch (action.type) {

      case 'ADMIN/USER/INIT_USERS':
          return {
              ...state,
              keyy: action.data.map(user => user.id),
              mapp: utils.getUsersMap(action)
          }

      case 'ADMIN/USER/USER_DETAILS':
          return {
              ...state,
              details: {
                  ...state.details,
              }
          }

      default:
        return state
    }
}

export default user
