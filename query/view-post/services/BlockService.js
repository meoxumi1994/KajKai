import { Blockee, BasicStore, Sellpost, Comment } from '../models'

export const getBlackListFromUserId = (userId, next) => {
  Blockee.find({ userId: userId }, (err, blackList) => {
    if (blackList) {
      next(blackList.map((black) => (black.blockeeId)))
    } else {
      next([])
    }
  })
}

export const getBlackListFromStoreId = (storeId, next) => {
  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
    if (basicStore) {
      getBlackListFromUserId(basicStore.userId, next)
    } else {
      next([])
    }
  })
}

export const getBlackListFromSellpostId = (sellpostId, next) => {
  Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
    if (sellpost) {
      getBlackListFromStoreId(sellpost.storeId, next)
    } else {
      next([])
    }
  })
}

export const getBlackListFromCommentId = (commentId, next) => {
  Comment.findOne({ id: commentId }, (err, comment) => {
    if (comment) {
      getBlackListFromSellpostId(comment.sellpostId, next)
    } else {
      next([])
    }
  })
}
