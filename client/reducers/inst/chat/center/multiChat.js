const multiChat = (state = {
    messagesKey: [],
    messagesMap: {},
}, action) => {
    switch (action.type) {

        case 'INIT_MULTI_MESSAGES':
            const initMultiMessages = {
              ...state,
              messagesKey: [
                  ...state.messagesKey,
                  action.data.mesId
              ],
              messagesMap: {
                  ...state.messagesMap,
                  [action.data.mesId]: action.data.messages.reverse()
              }
            }
            console.log('\n[Reducer Center] INIT_MULTI_MESSAGES', action, initMultiMessages);
            return initMultiMessages


        case 'global/RECEIVE_MESSAGE':
            const { mesId, user, time, message } = action.data
            const chat = state.messagesMap[mesId]
            if (chat == undefined || chat == null) {
              return state
            }
            const msg = {
              ...state,
              messagesMap: {
                ...state.messagesMap,
                [mesId]: [
                    ...state.messagesMap[mesId],
                    {
                        id: user.id,
                        message,
                        time
                    }
                ]
              }
            }
            console.log('\n[Reducer Center] global/RECEIVE_MESSAGE ', action, msg)
            return msg

        // case 'ADD_MULTI_CHAT':
        //     if (state.messagesKey.indexOf(action.data.mesId) != -1) {
        //       return {
        //         ...state,
        //       }
        //     }
        //     var tempMessagesKey = state.messagesKey
        //     tempMessagesKey.push(action.data.mesId)
        //
        //     return {
        //       ...state,
        //       messagesKey: tempMessagesKey,
        //       messagesMap: {
        //         ...state.messagesMap,
        //         [action.data.mesId]: action.data.messages
        //       },
        //     }
        //
        // case 'REMOVE_CHAT':
        //   const tempKey = state.messagesKey
        //   tempKey.splice(tempKey.indexOf(action.mesId), 1)
        //   const tempMap = state.messagesMap
        //   delete tempMap[action.mesId]
        //   return {
        //     ...state,
        //     messagesKey: tempKey,
        //     messagesMap: tempMap,
        //   }

        default:
          return state
    }
}

export default multiChat
