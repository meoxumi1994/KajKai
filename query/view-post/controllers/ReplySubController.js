import { Sellpost, Minorpost, Comment, Reply, BasicUser } from '../models'

export const createReply = (message) => {
  const { parentCommentId: commentId, sCommentId: id, posterId: userId, sellPostId: sellpostId, minorPostId: minorpostId, content, time } = message.sComment

  const reply = new Reply({
    commentId, id, userId
  })

  if (content) reply.content = content
  if (time) reply.time = time

  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      reply.username = basicUser.username
      reply.avatarUrl = basicUser.avatarUrl
      reply.save(() => {})

      if (sellpostId) {
        Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
          if (sellpost) {
            const { comments } = sellpost

            for (let i = 0; i < comments.length; i++) {
              let comment = comments[i]
              if (comment.id == commentId) {
                comments.replies.push(reply)
                break
              }
            }

            comments.numberOfReply = comments.replies.length
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
                comments.replies.push(reply)
                break
              }
            }

            comments.numberOfReply = comments.replies.length
            minorpost.comments = comments
            minorpost.save(() => {})
          }
        })
      }
    }
  })
}
