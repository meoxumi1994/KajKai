import { BasicStore, Chat, UserChat } from '../models'

export const createStore = (message) => {
  const { id, owner: userId, storeName, avatarUrl, coverUrl, urlName } = message.store

  const basicStore = new BasicStore({
    id, userId
  })

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (coverUrl) basicStore.coverUrl = coverUrl
  if (urlName) basicStore.urlName = urlName

  basicStore.save(() => {})
}

export const updateStore = (message) => {
  const { id, storeName, avatarUrl, urlName, coverUrl } = message.store
  const basicStore = {}

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (coverUrl) basicStore.coverUrl = coverUrl
  if (urlName) basicStore.urlName = urlName

  BasicStore.findOneAndUpdate({ id }, basicStore, () => {})
  Chat.find({}, (err, chats) => {
    if (chats) {
      chats.map((chat) => {
        if (chat.store && chat.store.id == id) {
          if (storeName) chat.store.storeName = storeName
          if (avatarUrl) chat.store.avatarUrl = avatarUrl
          if (coverUrl) chat.store.coverUrl = coverUrl
          if (urlName) chat.store.urlName = urlName

          chat.save(() => {})
        }
      })
    }
  })

  UserChat.find({}, (userChats) => {
    if (userChats) {
      userChats.map((userChat) => {
        let { chats } = userChat
        if (!chats) {
          chats = []
        }
        for (let i = 0; i < chats.length; i++) {
          let chat = chats[i]
          if (chat.store && chat.store.id == id) {
            if (storeName) chat.store.storeName = storeName
            if (avatarUrl) chat.store.avatarUrl = avatarUrl
            if (coverUrl) chat.store.coverUrl = coverUrl
            if (urlName) chat.store.urlName = urlName
          }
          chats[i] = chat
        }
        userChat.chats = chats
        userChat.save(() => {})
      })
    }
  })
}
