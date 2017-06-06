const left = (state = {
  chatList: [],
  lazyLoad: {
    offset: 0,
    length: 10
  }
}, action) => {
    switch (action.type) {
        case 'LOAD_CHAT_LIST':
            return {
              ...state,
              chatList: action.chatList,
            }

        case 'client/CHAT_WAITING':
            return {
              ...state,
              chatList: state.chatList.map(
                chat => chat.mesId == action.data.lastMessage.mesId?
                    {
                     ...chat,
                     lastMessage: JSON.stringify(
                       {
                         id: action.data.lastMessage.person,
                         message: action.data.lastMessage.message,
                         time: action.data.lastMessage.time
                       }
                     )
                   }
                 :
                   {
                     ...chat
                   }
              )
            }

        case 'CHAT_WAITING':
          return {
            ...state,
            chatList: state.chatList.map(
              chat => chat.mesId == action.data.lastMessage.mesId?
                  {
                   ...chat,
                   lastMessage: JSON.stringify(
                     {
                       id: action.data.lastMessage.person,
                       message: action.data.lastMessage.message,
                       time: action.data.lastMessage.time
                     }
                   )
                 }
               :
                 {
                   ...chat
                 }
            )
          }

        default:
            return state
    }
}

export default left
