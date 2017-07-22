import { Sellpost, BasicStore } from '../models'

export const createStore = (message) => {
  const { id, storeName, avatarUrl, urlName } = message.store

  const basicStore = new BasicStore({
    id
  })

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (urlName) basicStore.urlName = urlName

  basicStore.save(() => {})
}

export const updateStore = (message) => {
  const { id, storeName, avatarUrl, urlName } = message.store
  const basicStore = {}

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (urlName) basicStore.urlName = urlName

  BasicStore.findOneAndUpdate({ id }, basicStore, () => {})
  Sellpost.findOneAndUpdate( { storeId: id }, { storeName, avatarUrl }, () => {})
}
