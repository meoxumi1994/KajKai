import { Admin, User, Feedback } from '../models'
import { sendBanEmail, sendUnBanEmail } from './EmailService'
import { addBanPub, removeBanPub } from './BanPubService'
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
            status: user.banned != 0,
            admin: user.bannedById ? {
                id: user.bannedById,
                username: user.bannedByAdminName
            } : {},
            reason: user.lastReason
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

export const getFeedbacks = (offset, length, next) => {
  console.log('offset: ', offset);
  console.log('length: ', length);
  Feedback.find({}, (err, feedbacks) => {
    if (feedbacks) {
      console.log('feedbacks: ', feedbacks);
      let fbs = offset >= feedbacks.length ? [] : feedbacks.slice(offset, length)
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
            ban: {
                status: 'abc', //fb.reporter.banned && fb.reporter.banned != 0,
                admin: {
                    id: fb.reporter.bannedById,
                    username: fb.reporter.bannedByAdminName,
                },
                reason: fb.reporter.lastReason,
                time: fb.reporter.time ? fb.reporter.time.getTime() : ''
            },
            content: fb.content
          },
          defendant: {
            user: {
              id: fb.reportee.id,
              username: fb.reportee.username,
              avatarUrl: fb.reportee.avatarUrl
            },
            ban: {
                status: fb.reportee.banned && fb.reportee.banned != 0,
                admin: {
                    id: fb.reportee.bannedById,
                    username: fb.reportee.bannedByAdminName,
                },
                reason: fb.reportee.lastReason,
                time: fb.reportee.time ? fb.reportee.time.getTime() : ''
            },
            sellpostId: fb.sellpostId
          },
          reason: fb.reason,
          status: fb.status != 0,
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

export const banUsers = (admin, feedback, reporter, reportee, next) => {
    Admin.findById(admin.id, (err, mAdmin) => {
      if (mAdmin) {
        const mPromises = []
        if (reporter) {
          mPromises.push(new Promise((resolve, reject) => {
            User.findOne({ id: reporter.id }, (err, user) => {
              if (user) {
                user.banned = reporter.status ? 1 : 0,
                user.bannedById = admin.id,
                user.bannedByAdminName = mAdmin.adminName,
                user.lastReason = admin.reason

                user.save(() => {
                  if (reporter.status) {
                    addBanPub(user.id, admin.reason)
                    sendBanEmail(user.username, user.email, admin.reason)
                  } else {
                    removeBanPub(user.id, admin.reason)
                    sendUnBanEmail(user.username, user.email, admin.reason)
                  }
                })

                resolve('ok')
              } else {
                reject('noReporterData')
              }
            })
          }))
        }

      if (reportee) {
        mPromises.push(new Promise((resolve, reject) => {
          User.findOne({ id: reportee.id }, (err, user) => {
            if (user) {
              user.banned = reportee.status ? 1 : 0,
              user.bannedById = admin.id,
              user.bannedByAdminName = mAdmin.adminName,
              user.lastReason = admin.reason

              user.save(() => {
                if (reportee.status) {
                  addBanPub(user.id, admin.reason)
                  sendBanEmail(user.username, user.email, admin.reason)
                } else {
                  removeBanPub(user.id, admin.reason)
                  sendUnBanEmail(user.username, user.email, admin.reason)
                }
              })

              resolve('ok')
            } else {
              reject('noReporteeData')
            }
          })
        }))
      }

      if (feedback && feedback.id) {
        const mFeedback = {
          status: 1,
          bannedById:  admin.id,
          bannedByAdminName: mAdmin.adminName,
          reason: admin.reason,
          time: Date.now()
        }
        Feedback.findByIdAndUpdate(feedback.id, mFeedback, () => {})
      }

      Promise.all(mPromises).then((results) => {
        next('success')
      }, (err) => {
        next(err)
      })
    } else {
      next('noAdminData')
    }
  })
}

export const createFeedback = (reporterId, reporteeId, content, sellpostId, next) => {
  User.findOne({ id: reporterId }, (err, reporter) => {
    if (reporter) {
      User.findOne({ id: reporteeId }, (err, reportee) => {
        if (reportee) {
          const feedback = new Feedback({
            reporter,
            content,
            reportee,
            sellpostId,
            status: 0,
            time: Date.now()
          })
          feedback.save(() => {})
          next('success')
        } else {
          next('failed')
        }
      })
    } else {
      next('failed')
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
