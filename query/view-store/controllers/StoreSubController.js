import { Store } from '../models'

export const createStore = (message) => {
  const { id, userId, storeName } = message

  const store = new Store({
    id,
    userId,
    StoreName
  })

  store.save()
}

export const updateStore = (message) => {
  const { avatarUrl, coverUrl, lastUpdate, address, addressMap, category, categoryAuto, latitute, longitute, phone, certificates } = message
  const store = {}

  if(avatarUrl) store.avatarUrl = avatarUrl
  if(coverUrl) store.coverUrl = coverUrl
  if(lastUpdate) store.lastUpdate = lastUpdate
  if(address) store.address = address
  if(addressMap) store.addressMap = addressMap
  if(category) store.category = category
  if(categoryAuto) store.categoryAuto = categoryAuto
  if(latitute) store.latitute = latitute
  if(longitute) store.longitute = longitute
  if(phone) store.phone = phone
  if(certificates) store.certificates = certificates

  Store.findOneAndUpdate({ id }, store)
}
