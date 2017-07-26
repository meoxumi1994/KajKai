import { User, Notification, BasicStore, IDSellpostStore } from '../models'
import { NotificationType } from '../enum'
import { addIDReplyCommentSellpost } from '../services/IDService'
import { notify } from './NotificationPubController'

export const createReplyNotification = (message) => {
  const { parentCommentId: commentId, sCommentId: replyId, posterId: replierId, sellPostId: sellpostId, minorPostId: minorpostId, content, time } = message.sComment

  addIDReplyCommentSellpost(replyId, commentId, sellpostId)

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    User.findOne({ id: replierId }, (err, user) => {
      if (user) {
        const replier = {
          actorId: replierId,
          name: user.username,
          avatarUrl: user.avatarUrl
        }
        resolve({
          replier
        })
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: replierId }, (err, basicStore) => {
      if (basicStore) {
        const replier = {
          actorId: replierId,
          name: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl
        }
        resolve({
          replier
        })
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((repliers) => {
    const replier = repliers[0] ? repliers[0] : repliers[1]
    IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
      if (mIDSellpostStore) {
        BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
          if (basicStore) {
          User.find({}, (err, users) => {
            if (users) {
              for (let i = 0; i < users.length; i++) {
                let user = users[i]
                let { followingSellposts } = user
                if (!followingSellposts) {
                  followingSellposts = []
                }
                for (let k = 0; k < followingSellposts.length; k++) {
                  if (followingSellposts[k] == sellpostId) {
                    let { notifications } = user
                    if (!notifications) {
                      notifications = []
                    }
                    let notification = new Notification({
                      type: NotificationType.REPLY,
                      commentId,
                      replyId,
                      sellpostId,
                      ...replier,
                      content,
                      time: Date.now(),
                      storeName: basicStore.storeName,
                      urlName: basicStore.urlName
                    })
                    notify(notification)
                    notifications.push(notification)
                    user.notifications = notifications
                    user.numberOfUnRead = user.numberOfUnRead ? (user.numberOfUnRead + 1) : 1
                    user.save(() => {})
                    break
                  }
                }
              }
            }
          })
          }
        })
      }
    })
  })
}
