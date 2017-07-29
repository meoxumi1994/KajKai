import { getUser, getUserPrivacy, getUserImageList, getNotifications, updateNotification, getInterests } from '../services/UserService.js'

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
        tokenId: user.banned ? null : req.cookies.token,
        ...user
      })
    } else {
      res.json({ status: 'failed' })
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
        res.json({ status: 'failed' })
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
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  getUserImageList(requesterId, requestedId, offset, (userImageList) => {
    if (userImageList) {
      res.json(userImageList)
    } else {
      res.json({ status: 'failed' })
    }
  })
}

export const getNotificationsHandler = () => (req, res) => {
  const requestedId = req.decoded._id
  let { offset } = req.query
  let length = 10
  if (!offset || offset == '-1') {
    offset =  Date.now()
    length = 3
  } else {
    offset = new Date(parseInt(offset))
  }
  if (requestedId == 'Guest') {
    res.json({
      status: 'failed',
      reason: 'Guest',
      offset
    })
  } else {
    getNotifications(requestedId, offset, length, (result) => {
      if (result) {
        res.json(result)
      } else {
        res.json({ status: 'failed' })
      }
    })
  }
}

export const updateNotificationHandler = () => (req, res) => {
  const requestedId = req.decoded._id
  const { topId } = req.body
  if (requestedId == 'Guest') {
    res.json({
      status: 'failed',
      reason: 'Guest'
    })
  } else {
    updateNotification(requestedId, topId, (status) => {
      res.json({ status })
    })
  }
}

export const getInterestsHandler = () => (req, res) => {
  const requestedId = req.decoded._id
  let { offset } = req.query
  if (!offset || offset == '-1') {
    offset =  Date.now()
  } else {
    offset = new Date(parseInt(offset))
  }

  if (requestedId == 'Guest') {
    res.json({
      status: 'failed',
      reason: 'Guest'
    })
  } else {
    getInterests(requestedId, offset, (result) => {
      res.json(result)
    })
  }
}
