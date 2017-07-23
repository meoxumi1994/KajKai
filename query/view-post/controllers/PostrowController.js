import { getPostrows } from '../services/PostrowService.js'

export const getPostrowsHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { sellpostid: sellpostId } = req.params
  const { offset } = req.query

  getPostrows(requesterId, id, offset ? parseInt(offset) : -1, (postrows) => {
    if (postrows) {
      res.json(postrows)
    } else {
      res.json({status: 'failed'})
    }
  })
}
