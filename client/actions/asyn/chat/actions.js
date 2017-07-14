// left
export const initChatList = (data, lazyLoad) => ({
    type: 'INIT_CHAT_LIST',
    data: data,
    lazyLoad: lazyLoad
})

export const addChat = (data, multiChat) => ({
    type: multiChat? 'INIT_MULTI_MESSAGES': 'INIT_SINGLE_MESSAGES',
    data: data
})

export const setCurrentChat = (mesId) => ({
    type: 'SET_CURRENT_CHAT',
    data: {
      mesId
    }
})

export const addMember = (mesId, id, members) => ({
    type: 'server/ADD_MEMBER',
    data: {
        mesId,
        id,
        members,
        time: Date.now()
    }
})

export const updateUserInfo = (mesId, id, username, avatarUrl) => ({
    type: 'UPDATE_USER_INFO',
    data: {
        mesId,
        id,
        username,
        avatarUrl,
    }
})

// bottom
export const sendMessage = (mesId, id, text, url, type) => ({
  type: 'server/SEND_MESSAGE',
  data: {
      mesId,
      id,
      message: {
          text,
          url,
          type
      },
      time: Date.now()
  }
})
