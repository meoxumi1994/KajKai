const center = (state = {
  currentUser: {},
  chatLog: []
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT':
            return {...state, chatLog: action.messages, currentUser: action.chat}
        case 'SEND_MESSAGE':
            console.log('action ',action)
            return {
              id: action.id,
              author: action.author,
              message: action.message,
              toggled: false
            }
        default:
            return state
    }
}

const message = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      console.log('action ',action)
      return {
        id: action.id,
        author: action.author,
        message: action.message,
        toggled: false
      }
    default:
      return state
  }
}

// const messages = (state = [], action) => {
//   switch (action.type) {
//     case 'SEND_MESSAGE':
//       return [
//         ...state,
//         message(undefined, action)
//       ]
//     case 'TOGGLE_MESSAGE':
//     return state.map(m =>
//       message(m, action)
//     )
//     default:
//       return state
//   }
// }

export default center