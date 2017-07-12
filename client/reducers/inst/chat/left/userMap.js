const userMap = ( state={
    id: '',
    username: '',
    avatarUrl: '',
    disabled: false
}, action) => {
    console.log('action ', action);
    switch (action.type) {
      case 'INIT_CHAT_LIST':
          return {
              ...state,
              id: action.data.id,
              username: action.data.username,
              avatarUrl: action.data.avatarUrl
          }

      case 'global/RECEIVE_MESSAGE':
          console.log('usermap ', action);
          return {
            ...state,
            id: action.data.user.id,
            username: action.data.user.username,
            avatarUrl: action.data.user.avatarUrl
          }

      default:
          return state
    }
}

export default userMap
