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
            admin: user.bannedById ? {
                id: user.bannedById,
                username: user.bannedByAdminName
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
      let fbs = offet >= feedbacks.length ? [] : feedbacks.slice(offet, length)
      next({
        status: 'success',
        data: fbs.map((fb) => ({
          id: fb._id,
          reporter: {
            user: {
              id: fb.reporter.id,
              username: fb.reporter.username,
              avatarUrl: fb.reporter.avatarUrl
            },
            content: fb.content
          },
          defendant: {
            user: {
              id: fb.reportee.id,
              username: fb.reportee.username,
              avatarUrl: fb.reportee.avatarUrl
            },
            store: {
              id: store.id,
              storename: store.storeName,
              avatarUrl: store.avatarUrl,
              url: store.urlName
            }
          },
          ban: {
            admin: {
              id: fb.bannedBy._id,
              username: fb.bannedBy.adminName
            },
            status: fb.bannedBy != null,
            reason: fb.reason
          },
          time: fb.time.getTime()
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

export const banUser = (banned, adminId, userId, reason, next) => {
  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      if (!user.banned || user.banned != banned) {
        user.banned = banned
        Admin.findById(adminId, (err, admin) => {
          if (admin) {
            const user = {
              banned,
              bannedById: admin._id.toString(),
              bannedByAdminName: admin.adminName,
            }

            User.findOneAndUpdate({ id: userId }, user, () => {})
            next('success')
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
