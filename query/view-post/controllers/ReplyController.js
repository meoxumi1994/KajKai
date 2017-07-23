import { getReplies } from '../services/ReplyService.js'

export const getRepliesHandler = () => (req, res) => {
  if (req.decoded) {
    const { id } = req.params
    let { offset } = req.query
    if (!offset || offset == '-1') {
      offset =  Date.now()
    } else {
      offset = new Date(parseInt(offset))
    }
    getReplies(id, offset, (replies) => {
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
