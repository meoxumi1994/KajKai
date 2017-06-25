import { Store } from '../models'

export const createStore = (message) => {
  const { id, storeName } = message.store

  const store = new Store({
    id
  })

  if (storeName) store.storeName = storeName

  store.save()
}

export const updateStore = (message) => {
  const { id, storeName } = message.store
  const store = {}

  if (storeName) store.storeName = storeName

  Store.findOneAndUpdate({ id }, store)
}
