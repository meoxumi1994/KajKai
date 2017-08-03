import { getComments } from '../services/CommentService.js'

export const getCommentsHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { posttype: postType, id } = req.params
  let { offset, status } = req.query
  if (!status) {
    status = 'done'
  }
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }
  getComments(requesterId, postType, id, offset, status, (comments) => {
    if (comments) {
      res.json(comments)
    } else {
      res.json({status: 'failed'})
    }
  })
}
