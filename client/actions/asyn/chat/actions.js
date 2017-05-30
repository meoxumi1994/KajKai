export const updateMessageListVisibility = (display) => ({
    type: 'UPDATE_MESSAGELIST_VISIBILITY',
    display
})

export const updateCreateChatVisibility = (display) => ({
    type: 'UPDATE_CREATECHAT_VISIBILITY',
    display
})

export const loadChatList = (chatList) => ({
    type: 'LOAD_CHAT_LIST',
    chatList
})

export const loadChat = (messages, chat) => ({
    type: 'LOAD_CHAT',
    messages,
    chat
})
