import { getUser } from '../services/UserService.js'

export const getUserHandler = () => (req, res) => {
  if (req.decoded) {
    let { id: requestedId } = req.params

    if(!requestedId) {
      requestedId = req.decoded._id
    }
    console.log('requestedId: ', requestedId);

    getUser(requestedId, (user) => {
      if (user) {
        res.json({
          tokenId: req.cookies.token,
          ...user
        })
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}

export const getUserPrivacyHandler = () => (req, res) => {
  if (req.decoded) {
    let { id: requestedId } = req.params

    if(!requestedId) {
      requestedId = req.decoded._id
    }

    getUser(requestedId, (userPrivacy) => {
      if (userPrivacy) {
        res.json(userPrivacy)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
