import { BasicStore, Sellpost } from '../models'

export const checkStoreOwner = (requesterId, id, next) => {
  console.log('requesterId: ', requesterId);
  console.log('storeId: ', id);
  BasicStore.findOne({ id }, (basicStore) => {
    if (basicStore) {
      next(requesterId == basicStore.userId ? true: false)
    } else {
      next(false)
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
