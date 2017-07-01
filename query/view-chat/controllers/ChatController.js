import { getChatMessages } from '../services/ChatService.js'

export const getChatMessagesHandler = () => (req, res) => {
  if (req.decoded) {
    const { chatid: id } = req.params
    const { offset, length } = req.query

    getChatMessages(id, offset, length, (messages) => {
      if (messages) {
        res.json(messages)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
