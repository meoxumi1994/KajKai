import { getUserChats } from '../services/UserChatService.js'

export const getUserChatsHandler = () => (req, res) => {
  if (req.decoded) {
    const { _id: userId } = req.decoded
    const { offset, length } = req.query

    getUserChats(userId, offset, length, (chats) => {
      if (chats) {
        res.json(chats)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
