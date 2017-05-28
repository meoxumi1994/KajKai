const center = (state = {
<<<<<<< HEAD
  currentUser: {},
=======
  currentChat: {},
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff
  chatLog: []
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT':
<<<<<<< HEAD
            return {...state, chatLog: action.messages, currentUser: action.chat}
        case 'SEND_MESSAGE':
            console.log('action ',action)
            return {
              id: action.id,
              author: action.author,
              message: action.message,
              toggled: false
            }
=======
            return {...state, chatLog: action.messages, currentChat: action.chat}
        case 'client/RECEIVE_MESSAGE':
            var newMessage = {
              id: action.data.person,
              message: action.data.message,
              time: action.data.time
            }
            console.log();
            return {...state, chatLog: [...state.chatLog, JSON.stringify(newMessage)].reverse()}
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff
        default:
            return state
    }
}

<<<<<<< HEAD
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
=======
// const message = (state = {}, action) => {
//   switch (action.type) {
//     case 'SEND_MESSAGE':
//       console.log('action ',action)
//       return {
//         id: action.id,
//         author: action.author,
//         message: action.message,
//         toggled: false
//       }
//     default:
//       return state
//   }
// }
>>>>>>> a67ddc208c5c731b79ae2d975ad7b0a3c4febfff

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
