import { User, Notification, BasicStore } from '../models'
import { NotificationType } from '../enum'
import { IDSellpostStore } from '../models'
import { addIDSellpostStore, removeIDSellpostStore, removeIDCommentSellpost, removeIDReplySellpost } from '../services/IDService'

export const createSellpostCreatedNotification = (message) => {
  const { sellPostId: sellpostId, storeId, category, title, description } = message.sellpost

  addIDSellpostStore(sellpostId, storeId)

  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
    if (basicStore) {
      User.find({}, (err, users) => {
        if (users) {
          for (let i = 0; i < users.length; i++) {
            let user = users[i]
            let { followingStores } = user
            if (!followingStores) {
              followingStores = []
            }
            for (let k = 0; k < followingStores.length; k++) {
              if (followingStores[k] == storeId) {
                let { notifications } = user
                if (!notifications) {
                  notifications = []
                }
                let notification = new Notification({
                  type: NotificationType.SELLPOSTCreated,
                  sellpostId,
                  actorId: storeId,
                  name: basicStore.storeName,
                  avatarUrl: basicStore.avatarUrl,
                  content: title,
                  time: Date.now(),
                  storeName: basicStore.storeName,
                  urlName: basicStore.urlName
                })

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

export const createSellpostUpdatedNotification = (message) => {
  const { sellPostId: sellpostId, storeId, category, title, description } = message.sellpost

  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
    if (basicStore) {
      User.find({}, (err, users) => {
        if (users) {
          for (let i = 0; i < users.length; i++) {
            let user = users[i]
            let { followingStores } = user
            if (!followingStores) {
              followingStores = []
            }
            for (let k = 0; k < followingStores.length; k++) {
              if (followingStores[k] == storeId) {
                let { notifications } = user
                if (!notifications) {
                  notifications = []
                }
                let notification = new Notification({
                  type: NotificationType.SELLPOSTCreated,
                  sellpostId,
                  actorId: storeId,
                  name: basicStore.storeName,
                  avatarUrl: basicStore.avatarUrl,
                  content: title,
                  time: Date.now(),
                  storeName: basicStore.storeName,
                  urlName: basicStore.urlName
                })

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

export const deleteSellpostNotification = (message) => {
  const { sellPostId: sellpostId } = message.sellpost
  IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
    if (mIDSellpostStore) {
      removeIDSellpostStore(sellpostId)
      removeIDCommentSellpost(sellpostId)
      removeIDReplySellpost(sellpostId)
      const { storeId } = mIDSellpostStore
      User.find({}, (err, users) => {
        if (users) {
          for (let i = 0; i < users.length; i++) {
            let user = users[i]
            let { notifications, mNumberOfUnRead } = user
            if (!notifications) {
              notifications = []
            }
            if (!mNumberOfUnRead) {
              mNumberOfUnRead = 0
            }
            let mNotifications = []
            for (let k = 0; k < notifications.length; k++) {
              let notification = notifications[k]
              if (notification.sellpostId && notification.sellpostId != sellpostId) {
                if (k >= notifications.length - mNumberOfUnRead) {
                  mNumberOfUnRead--
                }
              } else {
                mNotifications.push(notification)
              }
            }
            user.notifications = mNotifications
            user.numberOfUnRead = mNumberOfUnRead
            user.save(() => {})
          }
        }
      })
    }
  })
}
