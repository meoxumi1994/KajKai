import { Chat } from '../models'

export const getChatMessages = (id, offset, length, next) => {

  Chat.findOne({ id }, (err, chat) => {
    if (err || !chat) {
      if (err) {
        next(null)
      } else {
        next({
          lazyLoad: {
            offset
          },
          mesId: id,
          messages: []
        })
      }
    } else {
      const { messages } = chat
      const mMessages = []
      let currentNumberOfMessage = 0, mOffset = -1

      for (let i = messages.length - 1; i >= 0; i--) {
        let message = messages[i]
        if (message.time < offset) {
          if (currentNumberOfMessage < length) {

            let mMessage = {}
            mMessage.id = message.userId
            mMessage.time = message.time.getTime()
            let { url, type, text } = message.content
            mMessage.message = { url, type, text }

            mMessages.push(mMessage)

            mOffset = message.time
            currentNumberOfMessage++
          } else {
            break
          }
        }
      }

      next({
        lazyLoad: {
          offset: mOffset
        },
        mesId: id,
        messages: mMessages
      })
    }
  })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}
