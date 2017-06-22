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
    getSellposts(storeId, (sellposts) => {
      if (sellposts) {
        res.send(sellposts)
      } else {
        res.send({status: 'failed'})
      }
    })

  } else {
    res.send({status: 'failed'})
  }
}
