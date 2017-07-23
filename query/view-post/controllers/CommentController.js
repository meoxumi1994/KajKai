import { getComments } from '../services/CommentService.js'

export const getCommentsHandler = () => (req, res) => {
  if (req.decoded) {
    const { posttype: postType, id } = req.params
    let { offset } = req.query
    if (!offset || offset == '-1') {
      offset =  Date.now()
    } else {
      offset = new Date(parseInt(offset))
    }
    getComments(postType, id, offset, (comments) => {
      if (comments) {
        res.json(comments)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
