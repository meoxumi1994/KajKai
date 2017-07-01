import { getReplies } from '../services/ReplyService.js'

export const getRepliesHandler = () => (req, res) => {
  if (req.decoded) {
    const { id } = req.params
    const { offset } = req.query
    getReplies(id, offset ? offset : Date.now(), (replies) => {
      if (replies) {
        res.json(replies)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
