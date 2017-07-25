const userMap = (state = {
    user: {
        id: '',
        username: '',
        avatarUrl: '',
        email: '',
    },
    stores: [],
    ban: {
        status: '',
        admin: {
            id: '',
            username: ''
        },
        reason: ''
    }
}, action) => {
    switch (action.type) {
      case 'ADMIN/USER/INIT_USERS':
          // console.log('action', action);
          const { ban, stores, user } = action.data
          return {
              ...state,
              user,
              stores,
              ban
          }

      case 'ADMIN/USER/BAN':
          return {
              ...state,
              ban: {
                  ...state.ban,
                  status: action.data.status,
                  reason: action.data.reason
              }
          }

      default:
          return state
    }
}

export default userMap
