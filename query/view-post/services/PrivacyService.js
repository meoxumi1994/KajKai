import { BasicStore, Sellpost } from '../models'

export const checkStoreOwner = (requesterId, id, next) => {
  BasicStore.findOne({ id }, (err, basicStore) => {
    if (basicStore) {
      next(requesterId == basicStore.userId)
    } else {
      next(false)
    }
  })
}

export const checkSellpostOwner = (requesterId, id, next) => {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (sellpost) {
      checkStoreOwner(requesterId, sellpost.storeId, next)
    } else {
      next(false)
    }
  })
}
