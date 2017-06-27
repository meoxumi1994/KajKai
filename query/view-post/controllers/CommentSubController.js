import { Sellpost, Minorpost, Comment, Reply, BasicUser } from '../models'

export const createComment = (message) => {
  const { fCommentId: id, posterId: userId, sellPostId: sellpostId, minorPostId: minorpostId, order, time, content } = message.fComment

  const comment = new Comment({
    id
  })

  if (sellpostId) comment.sellpostId = sellpostId
  if (minorpostId) comment.minorpostId = minorpostId
  if (order) comment.order = order
  if (time) comment.time = time

  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      const reply = new Reply({
        commentId: id,
        id,
        userId,
        username: basicUser.username,
        avatarUrl: basicUser.avatarUrl,
        content,
        time,
        numberOfLike: 0
      })

      comment.replies = []
      comment.replies.push(reply)

      if (sellpostId) {
        Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
          if (sellpost) {
            const { comments } = sellpost

            if (!comments) {
              comments = []
            }
            comments.push(comment)
            sellpost.numberOfComment = comments.length
            sellpost.comments = comments
            sellpost.save()
          }
        })
      } else {
        Minorpost.findOne({ id: minorpostId }, (err, minorpost) => {
          if (minorpost) {
            const { comments } = minorpost

            if (!comments) {
              comments = []
            }
            comments.push(comment)
            minorpost.numberOfComment = comments.length
            minorpost.comments = comments
            minorpost.save()
          }
        })
      }
    }
  })
}
