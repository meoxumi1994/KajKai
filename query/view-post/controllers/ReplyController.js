import { getReplies } from '../services/ReplyService.js'

export const getRepliesHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { id } = req.params
  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }
  getReplies(requesterId, id, offset, (replies) => {
    if (replies) {
      res.json(replies)
    } else {
      res.json({status: 'failed'})
    }
  })
}
