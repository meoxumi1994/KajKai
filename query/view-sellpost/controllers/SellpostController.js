import { getSellpost, getSellposts } from '../services/SellpostService.js'

export const getSellpostHandler = () => (req, res) => {
  if (req.decoded) {
    const { id } = req.params

    getSellpost(id, (sellpost) => {
      if (sellpost) {
        res.send(sellpost)
      } else {
        res.send({status: 'failed'})
      }
    })

  } else {
    res.send({status: 'failed'})
  }
}

export const getSellpostsHandler = () => (req, res) => {
  if (req.decoded) {
    const { id: storeId } = req.params
    const { offset } = req.query
    getSellposts(storeId, offset, (newOffset, sellposts) => {
      if (sellposts) {
        res.send({
          offset: newOffset,
          storeid: storeId,
          sellposts,
        })
      } else {
        res.send({status: 'failed'})
      }
    })

  } else {
    res.send({status: 'failed'})
  }
}
