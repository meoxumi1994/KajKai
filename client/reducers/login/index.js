const login = (state = { status: 'AUTH_NOT'}, action) => {
  switch (action.type) {
    case 'AUTH_ING':
    case 'AUTH_SUCCESS':
    case 'AUTH_FAILURE':
    case 'AUTH_NOT':
      return {...state, status: action.type }
    default:
      return state
  }
}

export default login
