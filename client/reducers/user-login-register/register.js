const registerResult = ( state = 'REGISTER_WAIT' , action) => {
  switch (action.type) {
    case 'REGISTER_WAIT':
        return 'REGISTER_WAIT'
    case 'REGISTER_ING':
        return 'REGISTER_ING'
    case 'REGISTER_FAILED':
        return 'REGISTER_FAILED'
    case 'REGISTER_ALREADY':
        return 'REGISTER_ALREADY'
    case 'RESIGTER_SUCCESS':
        return 'RESIGTER_SUCCESS'
    default:
      return state
  }
}

export default registerResult
