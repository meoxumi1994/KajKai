import { Sellpost, Minorpost, Comment, Reply, BasicUser, BasicStore } from '../models'

export const createReply = (message) => {
  const { parentCommentId: commentId, sCommentId: id, posterId, sellPostId: sellpostId, minorPostId: minorpostId, content, time } = message.sComment

  const reply = new Reply({
    commentId,
    id,
    userId: posterId
  })

  if (content) reply.content = content
  if (time) reply.time = time

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    BasicUser.findOne({ id: posterId }, (err, basicUser) => {
      if (basicUser) {
        reply.type = 'user'
        reply.username = basicUser.username
        reply.avatarUrl = basicUser.avatarUrl
        resolve(reply)
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: posterId }, (err, basicStore) => {
      if (basicStore) {
        reply.type = 'store'
        reply.urlName = basicStore.urlName
        reply.username = basicStore.storeName
        reply.avatarUrl = basicStore.avatarUrl
        resolve(reply)
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((replies) => {
    const reply = replies[0] ? replies[0] : replies[1]
    reply.save(() => {})

    Comment.findOne({ id: commentId }, (err, comment) => {
      if (comment) {
        comment.replies.push(reply)
        comment.numberOfReply = comment.replies.length - 1
        comment.save(() => {})
      }
    })

    if (sellpostId) {
      Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
        if (sellpost) {
          const { comments } = sellpost

          for (let i = 0; i < comments.length; i++) {
            let comment = comments[i]
            if (comment.id == commentId) {
              comment.replies.push(reply)
              comment.numberOfReply = comment.replies.length - 1
              comments[i] = comment
              break
            }
          }

          sellpost.comments = comments
          sellpost.save(() => {})
        }
      })
    } else {
      Minorpost.findOne({ id: minorpostId }, (err, minorpost) => {
        if (minorpost) {
          const { comments } = minorpost

          for (let i = 0; i < comments.length; i++) {
            let comment = comments[i]
            if (comment.id == commentId) {
              comment.replies.push(reply)
              comment.numberOfReply = comment.replies.length - 1
              comments[i] = comment
              break
            }
          }

          minorpost.comments = comments
          minorpost.save(() => {})
        }
      })
    }
  }
}
