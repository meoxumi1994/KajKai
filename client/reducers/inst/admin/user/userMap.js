const userMap = (state = {
    id: '',
    username: '',
    avatarUrl: '',
    status: '',
    email: '',
    stores: []
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
              stores: action.data.stores
          }
      default:
          return state
    }
}

export default userMap
