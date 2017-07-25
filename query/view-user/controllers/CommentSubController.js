import { User, Notification, BasicStore } from '../models'
import { NotificationType } from '../enum'

export const createComment = (message) => {
  const { fCommentId: commentId, posterId: userId, sellPostId: sellpostId, time, content } = message.fComment

  User.find({}, (err, users) => {
    if (users) {
      const avatarUrlById = {}
      users.map((user) => {
        avatarUrlById[user.id] = user.avatarUrl
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
            BasicStore.findOne({ id: storeId }, (err, store) => {
              if (store) {
                let notification = new Notification({
                  type: NotificationType.COMMENT,
                  commentId,
                  sellpostId,
                  actorId: userId,
                  avatarUrl: avatarUrlById[userId],
                  storeName: store.storeName,
                  urlName: store.urlName,
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
