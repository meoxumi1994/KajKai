import { Admin, User, Feedback } from '../models'
import jwt from 'jsonwebtoken'

export const getAdmin = (adminName, password, next) => {
  Admin.findOne({ adminName, password }, (err, admin) => {
    if (admin) {
      next(admin)
    } else {
      next(null)
    }
  })
}

export const getUsers = (offset, length, next) => {
  User.find({}, (err, users) => {
    if (users) {
      next({
        status: 'success',
        data: offset >= users.length ? [] : users.slice(offset, length).map((user) => ({
          user: {
            id: user.id,
            username: user.username,
            avatarUrl: user.avatarUrl,
            email: user.email
          },
          ban: {
            status: banned != 0,
            admin: user.bannedBy ? {
                id: user.bannedBy._id,
                username: user.bannedBy.adminName
            } : {}
          },
          stores: user.storeList ? user.storeList.map((basicStore) => ({
            id: basicStore.id,
            storename: basicStore.storeName,
            avatarUrl: basicStore.avatarUrl,
            url: basicStore.urlName
          })) : []
        }))
      })
    } else {
      next({
        status: 'nodata',
        data: []
      })
    }
  })
}

export const getFeedbacks = (offet, length, next) => {
  Feedback.find({}, (err, feedbacks) => {
    if (feedbacks) {

    } else {
      next({
        status: 'nodata',
        data: []
      })
    }
  })
}

export banUser = (banned, adminId, userId, reason, next) => {
  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      if (!user.banned || user.banned != banned) {
        user.banned = banned
        Admin.findById(adminId, (err, admin) => {
          if (admin) {
            
          } else {
            next('noAdminData')
          }
        })
      } else {
        next('failed')
      }
    } else {
      next('noUserData')
    }
  })
}

export const verifyAdminToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'adminsecret')
        return decoded;
    } catch(err) {
        return null
    }
}

export const getAdminToken = (id) => {
    let curId = id.toString()
    return jwt.sign({_id: curId}, 'adminsecret', { expiresIn: 60 * 60 * 60 })
}
