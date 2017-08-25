import { User, Notification, BasicStore } from '../models'
import { NotificationType } from '../enum'
import { IDSellpostStore } from '../models'
import { addIDSellpostStore, removeIDSellpostStore, removeIDCommentSellpost, removeIDReplySellpost } from '../services/IDService'
import { notify } from './NotificationPubController'

export const createSellpostCreatedNotification = (message) => {
  const { sellPostId: sellpostId, storeId, category, title, description } = message.sellpost

  addIDSellpostStore(sellpostId, storeId)
  createSellpostNotification(NotificationType.SELLPOSTCreated, message.sellpost)
}

export const createSellpostUpdatedNotification = (message) => {
  if (message.sellpost.changeStatus) {
    createSellpostNotification(NotificationType.OPENCLOSE, message.sellpost)
  } else {
    createSellpostNotification(NotificationType.SELLPOSTEdited, message.sellpost)
  }
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
              if (notification.sellpostId != sellpostId) {
                mNotifications.push(notification)
              } else if (k >= notifications.length - mNumberOfUnRead) {
                mNumberOfUnRead--
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

const createSellpostNotification = (type, sellpost) => {
  const { sellPostId: sellpostId, storeId, category, title, description, changeStatus } = sellpost
  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
    if (basicStore) {
      User.find({}, (err, users) => {
        if (users) {
          for (let i = 0; i < users.length; i++) {
            let user = users[i]
            let { storeList } = user
            if (!storeList) {
              storeList = []
            }
            let flag = true
            for (let k = 0; k < storeList.length; k++) {
              if (storeList[k].id == storeId) {
                flag = false
                break
              }
            }
            if (!flag) {
              continue
            }
            let { followingStores } = user
            if (!followingStores) {
              followingStores = []
            }
            let { followingSellposts } = user
            if (!followingSellposts) {
              followingSellposts = []
            }
            if (followingStores.indexOf(storeId) != -1 || followingSellposts.indexOf(sellpostId) != -1) {
              let { notifications } = user
              if (!notifications) {
                notifications = []
              }
              let notification = new Notification({
                type,
                sellpostId,
                actorId: storeId,
                name: basicStore.storeName,
                avatarUrl: basicStore.avatarUrl,
                content: title,
                time: Date.now(),
                storeName: basicStore.storeName,
                urlName: basicStore.urlName,
                storeId: basicStore.id,
                storeAvatarUrl: basicStore.avatarUrl
              })
              if (changeStatus) {
                notification.storeState = changeStatus
              }
              notify(user.id, notification)
              notifications.push(notification)
              user.notifications = notifications
              user.numberOfUnRead = user.numberOfUnRead ? (user.numberOfUnRead + 1) : 1
              user.save(() => {})
            }
          }
        }
      })
    }
  })
}
