import { Store } from '../models'

export const createStore = (message) => {
  const { id, owner: userId, storeName, avatarUrl, coverUrl, address, addressMap, category, longitude, latitude, certificates } = message.store

  const store = new Store({
    id,
    userId
  })

  if (storeName) store.storeName = storeName
  if (avatarUrl) store.avatarUrl = avatarUrl
  if (coverUrl) store.coverUrl = coverUrl
  if (address) store.address = address
  if (addressMap) store.addressMap = addressMap
  if (category) store.category = category
  if (longitude) store.longitude = longitude
  if (latitude) store.latitude = latitude
  if (certificates) store.certificates = certificates

  store.save()
}

export const updateStore = (message) => {
  const { id, storeName, avatarUrl, coverUrl, address, addressMap, category, latitute, longitute, phone, certificates } = message.store
  const store = {}

  if (storeName) store.storeName = storeName
  if (avatarUrl) store.avatarUrl = avatarUrl
  if (coverUrl) store.coverUrl = coverUrl
  if (address) store.address = address
  if (addressMap) store.addressMap = addressMap
  if (category) store.category = category
  if (latitute) store.latitute = latitute
  if (longitute) store.longitute = longitute
  if (phone) store.phone = phone
  if (certificates) store.certificates = certificates

  Store.findOneAndUpdate({ id }, store)
}
