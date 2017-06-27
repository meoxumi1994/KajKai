import { BasicStore } from '../models'

export const createStore = (message) => {
  const { id, storeName } = message.store

  const basicStore = new BasicStore({
    id
  })

  if (storeName) basicStore.storeName = storeName

  basicStore.save()
}

export const updateStore = (message) => {
  const { id, storeName } = message.store
  const basicStore = {}

  if (storeName) basicStore.storeName = storeName

  BasicStore.findOneAndUpdate({ id }, basicStore)
}
