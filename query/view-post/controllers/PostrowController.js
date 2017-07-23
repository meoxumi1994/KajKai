import { getPostrows, getPostrowImageList } from '../services/PostrowService.js'

export const getPostrowsHandler = () => (req, res) => {
  const requesterId = req.decoded._id
  const { sellpostid: sellpostId } = req.params
  const { offset } = req.query

  getPostrows(requesterId, id, offset ? parseInt(offset) : -1, (postrows) => {
    if (postrows) {
      res.json(postrows)
    } else {
      res.json({status: 'failed'})
    }
  })
}

export const getPostrowImageListHandler = () => (req, res) => {
  let { storeid: requestedId } = req.params
  let requesterId = req.decoded._id

  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  getPostrowImageList(requesterId, requestedId, offset, (postrowImageList) => {
    if (postrowImageList) {
      res.json(postrowImageList)
    } else {
      res.json({status: 'failed'})
    }
  })
}
