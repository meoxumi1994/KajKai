import { User, Notification, BasicStore } from '../models'
import { NotificationType } from '../enum'

export const createReplyNotification = (message) => {
  const { parentCommentId: commentId, sCommentId: replyId, posterId: userId, sellPostId: sellpostId, minorPostId: minorpostId, content, time } = message.sComment

  if (userId.substr(0, 3) == '001') { // user
    User.find({}, (err, users) => {
      if (users) {
        const avatarUrlById = {}, usernameById = {}
        users.map((user) => {
          avatarUrlById[user.id] = user.avatarUrl
          usernameById[user.id] = user.username
        })
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
              BasicStore.findOne({ id: storeId }, (err, basicStore) => {
                if (basicStore) {
                  let notification = new Notification({
                    type: NotificationType.COMMENT,
                    commentId,
                    replyId,
                    sellpostId,
                    actorId: userId,
                    username: usernameById[userId],
                    avatarUrl: avatarUrlById[userId],
                    storeName: basicStore.storeName,
                    urlName: basicStore.urlName,
                    content
                    time: Date.now()
                  })

                  notifications.push(notification)
                  user.notifications = notifications
                  user.save(() => {})
                }
              })
              break
            }
          }
        }
      }
    })
  } else if (userId.substr(0, 3) == '002') { // store
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
              BasicStore.findOne({ id: storeId }, (err, basicStore) => {
                if (basicStore) {
                  let notification = new Notification({
                    type: NotificationType.COMMENT,
                    commentId,
                    sellpostId,
                    actorId: userId,
                    avatarUrl: basicStore.avatarUrl,
                    storeName: basicStore.storeName,
                    urlName: basicStore.urlName,
                    content
                    time: Date.now()
                  })

                  notifications.push(notification)
                  user.notifications = notifications
                  user.save(() => {})
                }
              })
              break
            }
          }
        }
      }
    })
  }
}
