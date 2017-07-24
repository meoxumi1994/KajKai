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
          // console.log('action', action);
          const { ban, stores, user } = action.data
          return {
              ...state,
              id: user.id,
              username: user.username,
              avatarUrl: user.avatarUrl,
              email: user.email,
              status: ban.status,
              stores: stores
          }

      case 'ADMIN/USER/BAN':
          return {
              ...state,
              status: action.data.status
          }

      default:
          return state
    }
}

export default userMap
