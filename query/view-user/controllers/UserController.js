import { getUser } from '../services/UserService.js'

export const getUserHandler = () => (req, res) => {
  if (req.decoded) {
    let requestedId = req.params.id

    if(!requestedId) {
      requestedId = req.decoded._id
    }

    getUser(requestedId, (user) => {
      if (user) {
        res.json(user)
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
    let requestedId = req.params.id

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

export const getUserTrivial = () => {
    return (req, res) => {
        if (req.decoded) {
            const id = req.decoded._id
            getUser(id, function (user) {
                if (user) {
                    res.json(getUserTrivivalInfo(user))
                } else {
                    res.json({status: 'failed'})
                }
            })
        } else {
            res.json({status: 'failed'})
        }
    }
}

export const changeUserPhone = () => {
    return (req, res) => {
        console.log(req.body.phone)
        getUser(req.decoded._id, (user) => {
            if (user) {
                user.phone = req.body.phone
                user.save((err) =>{
                    if (err) {
                        res.json({status: 'failed'})
                    } else {
                        res.json({status: 'success'})
                    }
                })
            } else {
                res.json({status: 'failed'})
            }
        })
    }
}

export const updateUserPassword = () => {
    return (req, res) => {
        const id = req.decoded._id
        getUser(id, (user) => {
            if (user) {
                if (user.password !== req.body.password || !req.body.newpassword || req.body.newpassword.length < 6
                    || user.password === user.newpassword) {
                    res.json({status: 'failed'})
                } else {
                    user.password = req.body.newpassword
                    user.passwordLastUpdatedAt = new Date()
                    user.save(() => {
                        res.json({status: 'success'})
                    })
                }
            } else {
                res.json({status: 'failed'})
            }
        })
    }
}

export const changeUserProfile = () => {
    return (req, res) => {
        updateUserInfo(req.decoded._id,req.body, (status) => {
            res.json(status)
        })
    }
}

export const getUserInfoController = () => {
    return (req, res) => {
        const id = req.body.id
        getUser(id, function (user) {
            if (user) {
                res.json({status: 'success', user: getUserBasicInfo(user)})
            } else {
                res.json({status: 'failed'})
            }
        })
    }
}
