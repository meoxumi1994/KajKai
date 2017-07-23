import { getPostrows } from '../services/PostrowService.js'

export const getPostrowsHandler = () => (req, res) => {
  if (req.decoded) {
    const { sellpostid: sellpostId } = req.params
    const { offset } = req.query

    getPostrows(id, offset ? parseInt(offset) : -1, (postrows) => {
      if (postrows) {
        res.json(postrows)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
