import { getSellpost, getSellposts, getUserSellposts, getNearBy } from '../services/SellpostService.js'

export const getSellpostHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { id } = req.params
  let { id: targetId } = req.query
  getSellpost(targetId, requesterId, id, (sellpost) => {
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
export const getUserSellpostsHandler = () => (req, res) => {
  let { id: requestedId } = req.params
  let requesterId = req.decoded._id

  if(!requestedId) {
    requestedId = requesterId
  }
  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  getUserSellposts(requesterId, requestedId, offset, (sellposts) => {
    if (sellposts) {
      res.json(sellposts)
    } else {
      res.json({status: 'failed'})
    }
  })
}

export const getNearByHandler = () => (req, res) => {
  let { id } = req.params
  let { type } = req.query
  getNearBy(id, type, (sellpostId) => {
    res.json({
      sellpostid: sellpostId
    })
  })
}
