const mapElement = (state = {
    id: '',
    username: '',
    avatarUrl: '',
    status: '',
    email: ''
}, action) => {
    switch (action.type) {
      case 'ADMIN/USER/INIT_USERS':
          return {
              ...state,
              id: action.data.id,
              username: action.data.username,
              avatarUrl: action.data.avatarUrl,
              status: action.data.status,
              email: action.data.email,
          }
      default:
          return state
    }
}

const user = (state = {
    keyy: [],
    mapp: {}
}, action) => {
    switch (action.type) {

      case 'ADMIN/USER/INIT_USERS':

          const tempMapp1 = {}
          action.data.map(user =>
              tempMapp1[user.id] = mapElement(undefined, {type: action.type, data: user})
          )

          const initUsers = {
              ...state,
              keyy: action.data.map(user => user.id),
              mapp: tempMapp1
          }
          return initUsers

      default:
        return state
    }
}

export default user
