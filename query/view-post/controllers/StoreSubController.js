import { BasicStore, Sellpost, Comment } from '../models'

export const createStore = (message) => {
  const { id, owner: userId, storeName, avatarUrl, urlName } = message.store

  const basicStore = new BasicStore({
    id, userId
  })

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (urlName) basicStore.urlName = urlName

  basicStore.save(() => {})
}

export const updateStore = (message) => {
  const { id, storeName, avatarUrl, urlName } = message.store
  const basicStore = {}

  if (storeName) basicStore.storeName = storeName
  if (avatarUrl) basicStore.avatarUrl = avatarUrl
  if (urlName) basicStore.urlName = urlName

  BasicStore.findOneAndUpdate({ id }, basicStore, () => {})
  Comment.find({}, (err, comments) => {
    if (comments) {
      comments.map((comment) => {
        let { replies } = comment
        if (!replies) {
          replies = []
        }
        for (let i = 0; i < replies.length; i++) {
          let reply = replies[i]
          if (reply.userId == id) {
            reply.storeName = storeName ? storeName : reply.storeName
            reply.avatarUrl = avatarUrl ? avatarUrl : reply.avatarUrl
          }
          let { likers } = reply
          if (!likers) {
            likers = []
          }
          for (let k = 0; k < likers.length; k++) {
            let liker = likers[k]
            if (liker.storeId == id) {
              liker.storeName = storeName ? storeName : liker.storeName
              liker.avatarUrl = avatarUrl ? avatarUrl : liker.avatarUrl
            }
            likers[k] = liker
          }
          reply.likers = likers
          replies[i] = reply
        }
        comment.replies = replies
        comment.save(() => {})
      })
    }
  })
  Sellpost.find({}, (err, sellposts) => {
    if (sellposts) {
      sellposts.map((sellpost) => {
        if (sellpost.storeId == id) {
          sellpost.storeName = storeName ? storeName : sellpost.storeName
          sellpost.avatarUrl = avatarUrl ? avatarUrl : sellpost.avatarUrl
        }
        let { likers } = sellpost
        if (!likers) {
          likers = []
        }
        for (let i = 0; i < likers.length; i++) {
          let liker = likers[i]
          if (liker.storeId == id) {
            liker.storeName = storeName ? storeName : liker.storeName
            liker.avatarUrl = avatarUrl ? avatarUrl : liker.avatarUrl
          }
          likers[i] = liker
        }
        sellpost.likers = likers
        let { comments } = sellpost
        if (!comments) {
          comments = []
        }
        for (let h = 0; h < comments.length; h++) {
          let comment = comments[h]
          let { replies } = comment
          if (!replies) {
            replies = []
          }
          for (let i = 0; i < replies.length; i++) {
            let reply = replies[i]
            if (reply.userId == id) {
              reply.storeName = storeName ? storeName : reply.storeName
              reply.avatarUrl = avatarUrl ? avatarUrl : reply.avatarUrl
            }
            let { likers } = reply
            if (!likers) {
              likers = []
            }
            for (let k = 0; k < likers.length; k++) {
              let liker = likers[k]
              if (liker.storeId == id) {
                liker.storeName = storeName ? storeName : liker.storeName
                liker.avatarUrl = avatarUrl ? avatarUrl : liker.avatarUrl
              }
              likers[k] = liker
            }
            reply.likers = likers
            replies[i] = reply
          }
          comment.replies = replies
          comments[h] = comment
        }
        sellpost.comments = comments
        sellpost.save(() => {})
      })
    }
  })
}
