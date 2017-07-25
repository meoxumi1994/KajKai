import { User, Notification, BasicStore } from '../models'
import { NotificationType } from '../enum'

export const createSellpost = (message) => {
  const { sellPostId: sellpostId, storeId, category, title, description } = message.sellpost

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
            BasicStore.findOne({ id: storeId }, (err, store) => {
              if (store) {
                let notification = new Notification({
                  type: NotificationType.SELLPOSTCreated,
                  sellpostId,
                  actorId: storeId,
                  avatarUrl: store.avatarUrl,
                  storeName: store.storeName,
                  urlName: store.urlName,
                  content: title,
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

export const updateSellpost = (message) => {
  const { sellPostId: sellpostId, storeId, category, title, description } = message.sellpost

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
            BasicStore.findOne({ id: storeId }, (err, store) => {
              if (store) {
                let notification = new Notification({
                  type: NotificationType.SELLPOSTEdited,
                  sellpostId,
                  actorId: storeId,
                  avatarUrl: store.avatarUrl,
                  storeName: store.storeName,
                  urlName: store.urlName,
                  content: title,
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
