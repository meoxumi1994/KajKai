import { getComments } from '../services/CommentService.js'

export const getCommentsHandler = () => (req, res) => {
  let requesterId = req.decoded._id
  let { type: type, id } = req.params
  if (!id) {
    id = requesterId
  }
  let { offset, status, length } = req.query
  if (!status) {
    status = 'done'
  }
  if (!length) {
    length = 10
  }
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }
  getComments(requesterId, type, id, offset, status, length, (comments) => {
    if (comments) {
      res.json(comments)
    } else {
      res.json({status: 'failed'})
    }
  })
}
