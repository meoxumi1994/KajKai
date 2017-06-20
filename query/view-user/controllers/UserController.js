import { getUser } from '../services/UserService.js'

export const getUserHandler = () => (req, res) => {
  if (req.decoded) {
    let requestedId = req.params.id

    if(!requestedId) {
      requestedId = req.decoded._id
    }

    getUser(requestedId, (user) => {
      if (user) {
        res.send(user)
      } else {
        res.send({status: 'failed'})
      }
    })
  } else {
    res.send({status: 'failed'})
  }
}

export const getUserPrivacyHandler = () => (req, res) => {
  if (req.decoded) {
    let requestedId = req.params.id

    if(!requestedId) {
      requestedId = req.decoded._id
    }

    getUser(requestedId, (userPrivacy) => {
      if (userPrivacy) {
        res.send(userPrivacy)
      } else {
        res.send({status: 'failed'})
      }
    })
  } else {
    res.send({status: 'failed'})
  }
}
