import { BasicStore, Sellpost } from '../models'

export const checkStoreOwner = (requesterId, id, next) => {
  BasicStore.findOne({ id }, (basicStore) => {
    if (basicStore) {
      next(requesterId == basicStore.userId)
    } else {
      nexy(false)
    }
  })
}

export const checkSellpostOwner = (requesterId, id, next) => {
  Sellpost.findOne({ id }, (sellpost) => {
    if (sellpost) {
      checkStoreOwner(requesterId, sellpost.storeId, next)
    } else {
      next(false)
    }
  })
}
