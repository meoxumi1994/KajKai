import { Store } from '../models'

export const createStore = (message) => {
  const { id, owner: userId, storeName, createdAt, urlName, avatarUrl, coverUrl, address, addressMap, phone,
    category, firstCategoryId, secondCategoryId, firstCategoryName: firstCategory, secondCategoryName: secondCategory, longitude, latitude, certificates, lastUpdate } = message.store

  const store = new Store({
    id,
    userId
  })

  if (storeName) store.storeName = storeName
  if (urlName) store.urlName = urlName
  else store.urlName = id
  if (createdAt) store.createdAt = createdAt
  if (avatarUrl) store.avatarUrl = avatarUrl
  if (coverUrl) store.coverUrl = coverUrl
  if (address) store.address = address
  if (addressMap) store.addressMap = addressMap
  if (phone) store.phone = phone
  if (category) store.category = category
  if (firstCategoryId) store.firstCategoryId = firstCategoryId
  if (secondCategoryId) store.secondCategoryId = secondCategoryId
  if (firstCategory) store.firstCategory = firstCategory
  if (secondCategory) store.secondCategory = secondCategory
  if (longitude) store.longitude = longitude
  if (latitude) store.latitude = latitude
  if (certificates) store.certificates = certificates


  if (lastUpdate) {
    const mLastUpdate = {}
    const { lastUpdateStoreName, lastUpdateAvatarUrl, lastUpdateCoverUrl } = lastUpdate
    if(lastUpdateStoreName) mLastUpdate.storeName = lastUpdateStoreName
    if(lastUpdateAvatarUrl) mLastUpdate.avatarUrl = lastUpdateAvatarUrl
    if(lastUpdateCoverUrl) mLastUpdate.coverUrl = lastUpdateCoverUrl
    store.lastUpdate = mLastUpdate
  }

  store.save()
}

export const updateStore = (message) => {
  const { id, owner: userId, storeName, createdAt, urlName, avatarUrl, coverUrl, address, addressMap, phone,
    category, firstCategoryId, secondCategoryId, firstCategory, secondCategory, longitude, latitude, certificates, lastUpdate } = message.store

  const store = {}

  if (userId) store.userId = userId
  if (storeName) store.storeName = storeName
  if (urlName) store.urlName = urlName
  if (createdAt) store.createdAt = createdAt
  if (avatarUrl) store.avatarUrl = avatarUrl
  if (coverUrl) store.coverUrl = coverUrl
  if (address) store.address = address
  if (addressMap) store.addressMap = addressMap
  if (phone) store.phone = phone
  if (category) store.category = category
  if (firstCategoryId) store.firstCategoryId = firstCategoryId
  if (secondCategoryId) store.secondCategoryId = secondCategoryId
  if (firstCategory) store.firstCategory = firstCategory
  if (secondCategory) store.secondCategory = secondCategory
  if (longitude) store.longitude = longitude
  if (latitude) store.latitude = latitude
  if (certificates) store.certificates = certificates


  if (lastUpdate) {
    const mLastUpdate = {}
    const { lastUpdateStoreName, lastUpdateAvatarUrl, lastUpdateCoverUrl } = lastUpdate
    if(lastUpdateStoreName) mLastUpdate.storeName = lastUpdateStoreName
    if(lastUpdateAvatarUrl) mLastUpdate.avatarUrl = lastUpdateAvatarUrl
    if(lastUpdateCoverUrl) mLastUpdate.coverUrl = lastUpdateCoverUrl
    store.lastUpdate = mLastUpdate
  }

  setTimeout(() => { Store.findOneAndUpdate({ id }, store) })
}
