import { getComments } from '../services/CommentService.js'

export const getCommentsHandler = () => (req, res) => {
  if (req.decoded) {
    const { posttype: postType, id } = req.params
    const { offset } = req.query
    getComments(postType, id, offset ? offset : Date.now(), (comments) => {
      if (comments) {
        res.send(comments)
      } else {
        res.send({status: 'failed'})
      }
    })

  } else {
    res.send({status: 'failed'})
  }
}
