export const updateMessageListVisibility = (display) => ({
    type: 'UPDATE_MESSAGELIST_VISIBILITY',
    display
})

export const updateCreateChatVisibility = (display) => ({
    type: 'UPDATE_CREATECHAT_VISIBILITY',
    display
})

export const updateUploadImageVisibility = (display) => ({
    type: 'UPDATE_UPLOADIMAGE_VISIBILITY',
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

export const uploadingImages = (imageList) => ({
    type: 'UPLOADING_IMAGES',
    imageList: imageList
})

export const waitingChat = (avatarUrl, id, name, mesId, text) => ({
  type: 'client/CHAT_WAITING',
  data: {
    avatarUrl: avatarUrl,
    id: id,
    name: name,
    lastMessage: {
      mesId: mesId,
      person: id,
      message: text,
      time: Date.now()
    }
  }
})
