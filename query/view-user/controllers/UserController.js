import { getUser, getUserPrivacy, getUserImageList } from '../services/UserService.js'

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

    getUserPrivacy(requestedId, (userPrivacy) => {
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

export const getUserImageListHandler = () => (req, res) => {
  if (req.decoded) {
    let { id: requestedId } = req.params

    if(!requestedId) {
      requestedId = req.decoded._id
    }

    let { offset } = req.query
    if (offset == '-1') {
      offset =  Date.now()
    } else {
      offset = new Date(parseInt(offset))
    }

    getUserImageList(requestedId, offset, (userImageList) => {
      if (userImageList) {
        res.json(userImageList)
      } else {
        res.json({status: 'failed'})
      }
    })

  } else {
    res.json({status: 'failed'})
  }
}
