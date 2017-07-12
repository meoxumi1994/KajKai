const userMap = ( state={
    id: '',
    username: '',
    avatarUrl: '',
    disabled: false
}, action) => {
    switch (action.type) {
      case 'INIT_CHAT_LIST':
          return {
              ...state,
              id: action.data.id,
              username: action.data.username,
              avatarUrl: action.data.avatarUrl
          }

      case 'global/RECEIVE_MESSAGE':
          return {
            ...state,
            id: action.data.user.id,
            username: action.data.user.username,
            avatarUrl: action.data.user.avatarUrl
          }

      case 'client/ADD_MEMBER':
          return {
            ...state,
            id: action.data.id,
            username: action.data.username,
            avatarUrl: action.data.avatarUrl
          }

      default:
          return state
    }
}

export default userMap
