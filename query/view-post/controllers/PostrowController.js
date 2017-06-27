import { getPostrows } from '../services/PostrowService.js'

export const getPostrowsHandler = () => (req, res) => {
  if (req.decoded) {
    const { sellpostid: sellpostId } = req.params
    const { offset } = req.query

    getPostrows(id, offset ? offset : -1, (postrows) => {
      if (postrows) {
        res.send(postrows)
      } else {
        res.send({status: 'failed'})
      }
    })

  } else {
    res.send({status: 'failed'})
  }
}
