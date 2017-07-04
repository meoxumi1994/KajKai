import { UserChat, Chat, Message, Content } from '../models'

export const createMessage = (message) => {
  const { mesId: id, senderId: userId, message: content, time } = message.message

  const mMessage = new Message({
    userId
  })

  const mContent = new Content({
    text: content.text,
    type: content.type,
    url: content.url
  })

  if (content) mMessage.content = mContent
  if (time) mMessage.time = time

  Chat.findOne({ id }, (err, chat) => {
    if (chat) {
      let { messages } = chat
      if (!messages) {
        messages = []
      }
      messages = [...messages, mMessage]
      chat.lastMessageTime = mMessage.time
      chat.messages = messages
      chat.save()

      chat.users.map((user) => {
        UserChat.findOne({ userId: user.id}, (err, userChat) => {
          if (userChat) {
            let { chats } = userChat
            for (let i = 0; i < chats.length; i++) {
              if (chats[i].id == chat.id) {
                chats.splice(i, 1)
                chats = [...chats, chat]
                break
              }
            }
            userChat.chats = chats
            userChat.save()
          }
        })
      })
    }
  })
}
