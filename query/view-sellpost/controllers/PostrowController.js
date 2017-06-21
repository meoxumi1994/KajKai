import { getPostrow } from '../services/PostrowService.js'

export const getPostrowHandler = () => (req, res) => {
  if (req.decoded) {
    const sellpostId = req.params.sellpostid
    const { offset } = req.query

    if (offset) {
      const storeId = id
      getSellposts(storeId, (sellposts) => {
        if (sellposts) {
          res.send(sellposts)
        } else {
          res.send({status: 'failed'})
        }
      })

    } else {
      getSellpost(id, (sellpost) => {
        if (sellpost) {
          res.send(sellpost)
        } else {
          res.send({status: 'failed'})
        }
      })
    }

  } else {
    res.send({status: 'failed'})
  }
}
