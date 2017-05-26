
const center = (state = {
  // id: '',
  // avatarUrl: '',
  // username: '',
  currentUser: {},
  chatLog: []
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT':
            // return {...state, chatLog: action.messages, id: action.chat.id, avatarUrl: action.chat.avatarUrl, username: action.chat.user}
            return {...state, chatLog: action.messages, currentUser: action.chat}
        default:
            return state
    }
}

// const center = (state = [], action) => {
//   switch (action.type) {
//     case 'LOAD_CHAT':
//       return {...state, [action.key]: item(state[action.key], action)}
//     default:
//       return state
//   }
// }

export default center
