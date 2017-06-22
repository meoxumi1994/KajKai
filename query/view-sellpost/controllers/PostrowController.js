import { getPostrows } from '../services/PostrowService.js'

export const getPostrowsHandler = () => (req, res) => {
  if (req.decoded) {
    const { sellpostid: sellpostId } = req.params

    getPostrows(id, (postrows) => {
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
