const center = (state = {
  mesId: "",
  messages: [],
  user: {
    id: "",
    avatarUrl: "",
    username: ""
  },
  lazyLoad: {
    offset: 0
  }
}, action) => {
    switch (action.type) {

      case 'client/INIT_MESSAGE':
        return {
          ...state,
          mesId: action.data.mesId,
          messages: action.data.messages,
          user: {
            id: action.data.user.id,
            avatarUrl: action.data.user.avatarUrl,
            username: action.data.user.name
          },
          lazyLoad: {
            offset: 0
          }
        }

        case 'client/RECEIVE_MESSAGE':
            var newMessage = {
              id: action.data.person,
              message: action.data.message,
              time: action.data.time
            }
            return {
              ...state,
              lazyLoad: {
                offset: state.lazyLoad.offset + 1},
                messages: [
                  ...state.messages,
                  JSON.stringify(newMessage)
                ].reverse()
              }

        case 'LOAD_MORE_MESSAGE':
            return {
              ...state,
              lazyLoad: {
                offset: state.lazyLoad.offset + 10
              },
              messages: state.messages.reverse().concat(action.messages)
            }

        default:
            return state
    }
}

export default center
