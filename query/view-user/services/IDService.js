import { IDSellpostStore, IDCommentSellpost, IDReplyCommentSellpost } from '../models'

export const addIDSellpostStore = (sellpostId, storeId) => {
  const mIDSellpostStore = new IDSellpostStore({
    sellpostId,
    storeId
  })

  mIDSellpostStore.save(() => {})
}

export const removeIDSellpostStore = (sellpostId) => {
  IDSellpostStore.remove({ sellpostId }, () => {})
}

export const addIDCommentSellpost = (commentId, sellpostId) => {
  const mIDCommentSellpost = new IDCommentSellpost({
    commentId,
    sellpostId
  })

  mIDCommentSellpost.save(() => {})
}

export const removeIDCommentSellpost = (sellpostId) => {
  IDCommentSellpost.remove({ sellpostId }, () => {})
}

export const addIDReplyCommentSellpost = (replyId, commentId, sellpostId) => {
  const mIDReplyCommentSellpost = new IDReplyCommentSellpost({
    replyId,
    commentId,
    sellpostId
  })

  mIDReplyCommentSellpost.save(() => {})
}

export const removeIDReplySellpost = (sellpostId) => {
  IDReplyCommentSellpost.remove({ sellpostId }, () => {})
}
