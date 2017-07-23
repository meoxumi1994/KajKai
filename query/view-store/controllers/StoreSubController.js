import { Store, Image } from '../models'

export const createStore = (message) => {
  const { id, owner: userId, storeName, createdAt, urlName, avatarUrl, coverUrl, address, addressMap, phone,
    category, firstCategoryId, secondCategoryId, firstCategoryName: firstCategory, secondCategoryName: secondCategory, longitude, latitude, certificates, lastUpdate } = message.store

  const store = new Store({
    id,
    userId
  })

  const imageList = []

  if (storeName) store.storeName = storeName
  if (urlName) store.urlName = urlName
  else store.urlName = id
  if (createdAt) store.createdAt = createdAt
  if (avatarUrl) {
    store.avatarUrl = avatarUrl
    imageList.push({
      new Image({
        url: avatarUrl,
        time: Date.now()
      })
    })
  }
  if (coverUrl) {
    store.coverUrl = coverUrl
    imageList.push({
      new Image({
        url: coverUrl,
        time: Date.now()
      })
    })
  }

  store.imageList = imageList
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

  store.save(() => {})
}

export const updateStore = (message) => {
  const { id, owner: userId, storeName, createdAt, urlName, avatarUrl, coverUrl, address, addressMap, phone,
    category, firstCategoryId, secondCategoryId, firstCategory, secondCategory, longitude, latitude, certificates, lastUpdate } = message.store

  Store.findOne({ id }, (err, store) => {
    if (store) {
      if (userId) store.userId = userId
      if (storeName) store.storeName = storeName
      if (urlName) store.urlName = urlName
      if (createdAt) store.createdAt = createdAt
      if (avatarUrl) {
        store.avatarUrl = avatarUrl
        store.imageList.push({
          new Image({
            url: avatarUrl,
            time: Date.now()
          })
        })
      }
      if (coverUrl) {
        store.coverUrl = coverUrl
        store.imageList.push({
          new Image({
            url: coverUrl,
            time: Date.now()
          })
        })
      }
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

      store.save(() => {})
    }
  })
}
