import { getSellpost, getSellposts } from '../services/SellpostService.js'

export const getSellpostHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { id } = req.params

  getSellpost(requesterId, id, (sellpost) => {
    if (sellpost) {
      res.json(sellpost)
    } else {
      res.json({status: 'failed'})
    }
  })
}

export const getSellpostsHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { id: storeId } = req.params
  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }
  getSellposts(requesterId, storeId, offset, (sellposts) => {
    if (sellposts) {
      res.json(sellposts)
    } else {
      res.json({status: 'failed'})
    }
  })
}
