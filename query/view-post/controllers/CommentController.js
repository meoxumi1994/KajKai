import { getComments } from '../services/CommentService.js'

export const getCommentsHandler = () => (req, res) => {
  if (req.decoded) {
    const { posttype: postType, id } = req.params
    const { offset } = req.query
    getComments(postType, id, offset ? offset : Date.now(), (comments) => {
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
