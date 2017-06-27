import { getUserChats } from '../services/UserChatService.js'

export const getUserChatsHandler = () => (req, res) => {
  if (req.decoded) {
    const { _id: userId } = req.decoded
    const { offset, length } = req.query

    getUserChats(userId, offset, length, (chats) => {
      if (chats) {
        res.send(chats)
      } else {
        res.send({status: 'failed'})
      }
    })

  } else {
    res.send({status: 'failed'})
  }
}
