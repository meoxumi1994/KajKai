import { User, BasicStore } from '../models'

export const addStore = (message) => {
  const { id: storeId, owner: id, storeName, avatarUrl } = message.store

  const basicStore = new BasicStore({
    id: storeId,
    storeName,
    avatarUrl
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
  const { id: storeId, owner: id, storeName, avatarUrl } = message.store

  User.findOne({ id }, (err, user) => {
    if (user) {
      let { storeList } = user
      for (let i = 0; i < storeList.length; i++){
        if (storeList[i].id == storeId) {
          storeList[i] = { ...storeList[i], storeName, avatarUrl }
          break
        }
      }

      user.storeList = storeList
      user.save(() => {})
    }
  })
}
