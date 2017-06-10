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

export const sendMessage = (mesId, id, text, url, type) => ({
    type: 'server/ADD_MESSAGE',
    data: {
      mesId: '593bc3ff0607380b9934204eKa',
      id,
      message: {
        text,
        url,
        type
      },
      time: Date.now()
    }
})

// export const loadChatList = (chatList) => ({
//     type: 'LOAD_CHAT_LIST',
//     chatList
// })
//
// export const loadChat = (messages, chat) => ({
//     type: 'LOAD_CHAT',
//     messages,
//     chat
// })
//
// export const uploadingImages = (imageList) => ({
//     type: 'UPLOADING_IMAGES',
//     imageList: imageList
// })
//
// export const waitingChat = (avatarUrl, id, name, mesId, message, time) => ({
//   type: 'client/CHAT_WAITING',
//   data: {
//     avatarUrl,
//     id,
//     name,
//     lastMessage: {
//       mesId,
//       person: id,
//       message,
//       time
//     }
//   }
// })
