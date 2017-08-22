import { User, BasicStore } from '../models'

export const addStore = (message) => {
  const { id: storeId, owner: id, storeName, avatarUrl, urlName } = message.store

  const basicStore = new BasicStore({
    id: storeId,
    storeName,
    avatarUrl,
    urlName
  })

  basicStore.save(() => {})

  User.findOne({ id }, (err, user) => {
    if (user) {
      let { storeList } = user
      if (!storeList) {
        storeList = []
      }

      storeList.push(basicStore)

      user.storeList = storeList
      user.save(() => {})
    }
  })
}

export const updateStoreList = (message) => {
  const { id: storeId, owner: id, storeName, avatarUrl, urlName } = message.store
  const basicStore = {}

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (urlName) basicStore.urlName = urlName

  BasicStore.findOneAndUpdate({ id: storeId }, basicStore, () => {})

  User.findOne({ id }, (err, user) => {
    if (user) {
      let { storeList } = user
      if (!storeList) {
        storeList = []
      }
      for (let i = 0; i < storeList.length; i++){
        if (storeList[i].id == storeId) {
          storeList[i].storeName = storeName
          storeList[i].avatarUrl = avatarUrl
          storeList[i].urlName = urlName
          break
        }
      }

      user.storeList = storeList
      user.save(() => {})
    }
  })

  User.find({}, (err, users) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        let mUser = users[i]
        const { notifications } = mUser
        if (notifications) {
          for (let k = 0; k < notifications.length; k++) {
            let notification = notifications[k]
            if (notification.storeId == storeId && avatarUrl) notification.storeAvatarUrl = avatarUrl
            if (notification.actorId ==  storeId) {
              if (storeName) notification.name = storeName
              if (avatarUrl) notification.avatarUrl = avatarUrl
              if (storeName) notification.storeName = storeName
              if (urlName) notification.urlName = urlName
            }
            if (notification.type.includes('LIKE')) {
              let { likers } = notification
              for (let h = 0; h < likers.length; h++) {
                if (likers[h].storeId == storeId) {
                  if (storeName) likers[h].storeName = storeName
                  if (avatarUrl) likers[h].avatarUrl = avatarUrl
                }
              }
              notification.likers = likers
            }
            notifications[k] = notification
          }
          mUser.notifications = notifications
          mUser.save(() => {})
        }
      }
    }
  })
}
