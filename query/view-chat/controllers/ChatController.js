import { getChatMessages } from '../services/ChatService.js'

export const getChatMessagesHandler = () => (req, res) => {
  if (req.decoded) {
    const { chatid: id } = req.params
    let { offset, length } = req.query

    if (!offset || offset == '-1') {
      offset =  Date.now()
    } else {
      offset = new Date(parseInt(offset))
    }

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
