export const initChatList = (data, lazyLoad) => ({
    type: 'INIT_CHAT_LIST',
    data: data,
    lazyLoad: lazyLoad
})

export const readChat = (mesId) => ({
    type: 'READ_CHAT',
    mesId: mesId
})

export const addChat = (data, multiChat) => ({
    type: multiChat? 'ADD_MULTI_CHAT': 'INIT_SINGLE_MESSAGES',
    data: data
})
