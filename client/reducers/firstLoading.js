const whoResult = ( state = { type: 'WHO_WAIT', username: undefined } , action) => {
  switch (action.type) {
    case 'WHO_WAIT':
    case 'WHO_ING':
    case 'WHO_FAILED':
    case 'WHO_SUCCESS':
        return {...state, type: action.type, username: action.username }
    default:
      return state
  }
}

export default whoResult
