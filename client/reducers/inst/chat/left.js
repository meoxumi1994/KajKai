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
            var contained = isContainedInChatList(state.chatList, action.data.lastMessage.person, action.data.id)
            if (!contained) {
                return addNewChat(state, action)
            } else {
                return updateLastMessage(state, action)
            }

        default:
            return state
    }
}

const addNewChat = (state, action) => {
  const { mesId, person, message, time } = action.data.lastMessage
  const {avatarUrl, id, name} = action.data
  return {
    ...state,
    chatList: [
      ...state.chatList,
      {
        avatarUrl,
        id,
        name,
        mesId,
        lastMessage: buildLastMessage(person, message, time)
      }
    ]
  }
}

const updateLastMessage = (state, action) => {
  const { mesId, person, message, time } = action.data.lastMessage
  return {
    ...state,
    chatList: state.chatList.map(
      chat => chat.mesId === mesId ?
          {
           ...chat,
           lastMessage: buildLastMessage(person, message, time)
         }
       :
         {
           ...chat
         }
    )
  }
}

const isContainedInChatList = (chatList, personId, id) => {
  if (personId === id) {
    return true
  }
  for (var i=0; i< chatList.length; i++) {
    if (chatList[i].id == personId) {
      return true
    }
  }
  return false
}

const buildLastMessage = (person, message, time) => {
  return JSON.stringify(
    {
      id: person,
      message: message,
      time: time
    }
  )
}

export default left
