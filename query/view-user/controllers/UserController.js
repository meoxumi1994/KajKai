import { getUser, getUserPrivacy, getUserImageList } from '../services/UserService.js'

export const getUserHandler = () => (req, res) => {
  let { id: requestedId } = req.params
  let requesterId = req.decoded._id

  if(!requestedId) {
    requestedId = requesterId
  }
  console.log('requestedId: ', requestedId);

  getUser(requesterId, requestedId, (user) => {
    if (user) {
      res.json({
        tokenId: req.cookies.token,
        ...user
      })
    } else {
      res.json({status: 'failed'})
    }
  })
}

export const getUserPrivacyHandler = () => (req, res) => {
  let { id: requestedId } = req.params
  let requesterId = req.decoded._id

  if(!requestedId) {
    requestedId = requesterId
  }

  if (requesterId != requestedId) {
    res.json({ authorization: "FAILED" })
  } else {
    getUserPrivacy(requestedId, (userPrivacy) => {
      if (userPrivacy) {
        res.json(userPrivacy)
      } else {
        res.json({status: 'failed'})
      }
    })
  }
}

export const getUserImageListHandler = () => (req, res) => {
  let { id: requestedId } = req.params
  let requesterId = req.decoded._id

  if(!requestedId) {
    requestedId = requesterId
  }

  let { offset } = req.query
  if (offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  getUserImageList(requesterId, requestedId, offset, (userImageList) => {
    if (userImageList) {
      res.json(userImageList)
    } else {
      res.json({status: 'failed'})
    }
  })
}
