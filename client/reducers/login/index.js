const login = (state = { type: 'NOT_LOGGED_IN'}, action) => {
  switch (action.type) {
    case 'LOGGING_IN':
    case 'LOG_IN_SUCCESS':
    case 'LOG_IN_FAILURE':
    case 'NOT_LOGGED_IN':
      return action
    default:
      return state
  }
}

export default login
