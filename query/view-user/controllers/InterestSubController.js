import { User, Interest, Notification } from '../models'
import { notify } from './NotificationPubController'
import { NotificationType } from '../enum'

export const addInterest = (message) => {
  const { id, userId, categoryId, categoryName, longitude, latitude } = message.interest
  const interest = new Interest({
    id,
    categoryId,
    categoryName,
    longitude,
    latitude,
    time: Date.now()
  })

  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      let { interests } = user
      if (!interests) {
        interests = []
      }
      interests.push(interest)
      user.interests = interests
      user.save(() => {})
    }
  })
}

export const removeInterest = (message) => {
  const { id, userId } = message.interest

  User.findOne({ id: userId }, (err, user) => {
    if (user) {
      let { interests } = user
      for (let i = 0; i < interests.length; i++) {
        if (interests[i].id == id) {
          interests.splice(i, 1)
          break
        }
      }
      user.interests = interests
      user.save(() => {})
    }
  })
}

export const createStoreCreatedNotification = (message) => {
  const { store, listUserId: userIds } = message.interest

  User.findOne({ id: store.owner }, (err, actor) => {
    if (actor) {
      userIds.map((userId) => {
        User.findOne({ id: userId }, (err, user) => {
          if (user) {
            let { notifications } = user
            if (!notifications) {
              notifications = []
            }
            let notification = new Notification({
              type: NotificationType.INTEREST,
              actorId: actor.id,
              name: actor.username,
              avatarUrl: actor.avatarUrl,
              time: Date.now(),
              storeName: store.storeName,
              urlName: store.urlName,
              storeAvatarUrl: store.avatarUrl
            })

            notify(userId, notification)
            notifications.push(notification)
            user.notifications = notifications
            user.save()
          }
        })
      })
    }
  })
}
