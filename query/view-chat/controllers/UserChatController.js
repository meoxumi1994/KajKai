import { getUserChats } from '../services/UserChatService.js'

export const getUserChatsHandler = () => (req, res) => {
  if (req.decoded) {
    const { _id: userId } = req.decoded
    let { offset, length } = req.query

    if (!offset || offset == '-1') {
      offset =  Date.now()
    } else {
      offset = new Date(parseInt(offset))
    }

    getUserChats(userId, parseInt(offset), length, (chats) => {
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
