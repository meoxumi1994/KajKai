import { User, Notification, BasicStore, IDSellpostStore } from '../models'
import { NotificationType } from '../enum'
import { addIDCommentSellpost } from '../services/IDService'
import { notify } from './NotificationPubController'

export const createCommentNotification = (message) => {
  const { fCommentId: commentId, posterId: commenterId, sellPostId: sellpostId, time, content, order } = message.fComment

  addIDCommentSellpost(commentId, sellpostId)

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    User.findOne({ id: commenterId }, (err, user) => {
      if (user) {
        const commenter = {
          actorId: commenterId,
          name: user.username,
          avatarUrl: user.avatarUrl
        }
        resolve(commenter)
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: commenterId }, (err, basicStore) => {
      if (basicStore) {
        const commenter = {
          actorId: commenterId,
          name: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl
        }
        resolve(commenter)
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((commenters) => {
    const commenter = commenters[0] ? commenters[0] : commenters[1]
    console.log('commenter: ', commenter);
    IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
      if (mIDSellpostStore) {
        BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
          if (basicStore) {
            let notification = new Notification({
              type: NotificationType.COMMENT,
              commentId,
              sellpostId,
              ...commenter,
              content,
              time: Date.now(),
              storeName: basicStore.storeName,
              urlName: basicStore.urlName,
              storeAvatarUrl: basicStore.avatarUrl
            })
            if (order) notification.order = order.map((product) => ({
              id: product.id,
              content: product.content,
              imageUrl: product.imageUrl,
              list: product.list,
              numberOfOrder: product.num
            }))
            notification.save(() => {})

            User.find({}, (err, users) => {
              if (users) {
                for (let i = 0; i < users.length; i++) {
                  let user = users[i]
                  if (user.id == commenter.actorId || !user.storeList) {
                    continue
                  }
                  let { storeList } = user
                  let flag = true
                  for (let k = 0; k < storeList.length; k++) {
                    if (storeList[k].id == commenter.actorId) {
                      flag = false
                      break
                    }
                  }
                  if (!flag) {
                    continue
                  }
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

                      notify(user.id, notification)
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

export const createReceiveNotification = (message) => {
  const { fCommentId: id, status } = message.fComment

  if (status == NotificationType.RECEIVE) {
    Notification.findOne({ commentId: id }, (err, notification) => {
      if (notification) {
        notification.type = NotificationType.RECEIVE
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

                  notify(user.id, notification)
                  if (user.id == notification.actorId) {
                    notifications.push(notification)
                    user.notifications = notifications
                    user.numberOfUnRead = user.numberOfUnRead ? user.numberOfUnRead + 1 : 1
                    user.save(() => {})
                  }
                  break
                }
              }
            }
          }
        })
      }
    })
  }
}
