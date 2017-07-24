import { User, BasicStore } from '../models'

export const addStore = (message) => {
  const { id: storeId, owner: id, storeName, avatarUrl, urlName } = message.store

  const basicStore = new BasicStore({
    id: storeId,
    storeName,
    avatarUrl,
    urlName
  })

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
}
