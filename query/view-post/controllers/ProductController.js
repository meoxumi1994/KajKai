import { getProductImageList } from '../services/PostrowService.js'

export const getProductImageListHandler = () => (req, res) => {
  let { storeid: requestedId } = req.params
  let requesterId = req.decoded._id

  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  getProductImageList(requesterId, requestedId, offset, (productImageList) => {
    if (productImageList) {
      res.json(productImageList)
    } else {
      res.json({status: 'failed'})
    }
  })
}
