import { Comment } from '../models'

export const getReplies = (id, offset, next) => {
  Comment.findOne({ id }, (err, comment) => {
    if (err || !comment) {
      next(null)
    } else {
      const { replies } = comment
      next(getClientFormatReplies(replies, offset))
    }
  })
}

export const getClientFormatReplies = (replies, offset) => {
  if (!replies) {
    return {
      comments: []
    }
  }
  const oneHour = 3600000
  let currentNumberOfReply = 0, rOffset = -1
  let mReplies = []

  for(let k = replies.length - 1; k > 0; k--) {
    let reply = replies[k]
    if (offset - reply.time <= oneHour && currentNumberOfReply < 2) {
      mReplies = [getClientFormatReply(reply), ...mReplies]

      rOffset = reply.time
      currentNumberOfReply++
    } else {
      break
    }
  }
  mReplies = [getClientFormatReply(replies[0]), ...mReplies]

  return {
    offset: rOffset,
    comments: mReplies
  }
}

const getClientFormatReply = (reply) => ({
  id: reply.id,
  ownerid: reply.userId,
  leadercommentid: reply.commentId,
  avatarUrl: reply.avatarUrl,
  name: reply.username,
  content: reply.content,
  time: reply.time,
  numlike: reply.numberOfLike,
})
