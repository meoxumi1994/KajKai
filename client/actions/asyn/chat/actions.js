// left
export const initChatList = (data, lazyLoad) => ({
    type: 'INIT_CHAT_LIST',
    data: data,
    lazyLoad: lazyLoad
})

export const addChat = (data, multiChat) => ({
    type: multiChat? 'ADD_MULTI_CHAT': 'INIT_SINGLE_MESSAGES',
    data: data
})

export const setCurrentChat = (mesId) => ({
    type: 'SET_CURRENT_CHAT',
    data: {
      mesId
    }
})

// center
