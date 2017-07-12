import { getSellpost, getSellposts } from '../services/SellpostService.js'

export const getSellpostHandler = () => (req, res) => {
  if (req.decoded) {
    const { id } = req.params

    getSellpost(id, (sellpost) => {
      if (sellpost) {
        res.json(sellpost)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}

export const getSellpostsHandler = () => (req, res) => {
  if (req.decoded) {
    const { id: storeId } = req.params
    let { offset } = req.query
    if (offset == '-1') {
      offset =  Date.now()
    }
    getSellposts(storeId, offset, (sellposts) => {
      if (sellposts) {
        res.json(sellposts)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
