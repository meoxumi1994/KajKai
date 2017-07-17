import { Comment } from '../models'

export const getReplies = (id, offset, next) => {
  Comment.findOne({ id }, (err, comment) => {
    if (err || !comment) {
      if(err) {
        next(null)
      } else {
        next({
          offset,
          comments: []
        })
      }
    } else {
      const { replies } = comment
      next(getClientFormatReplies(replies, offset, isFirst))
    }
  })
}

export const getClientFormatReplies = (replies, offset, isFirst) => {
  if (!replies) {
    return {
      offset,
      comments: []
    }
  }
  const oneHour = 3600000
  let currentNumberOfReply = 0, rOffset, lastIndex
  let mReplies = []
  if (isFirst) {
    for(let k = replies.length - 1; k > 0; k--) {
      let reply = replies[k]
      if (offset - reply.time <= oneHour && currentNumberOfReply < 2) {
        mReplies = [getClientFormatReply(reply), ...mReplies]

        rOffset = reply.time.getTime()
        lastIndex = k
        currentNumberOfReply++
      } else {
        break
      }
    }
  } else {
    for(let k = replies.length - 1; k > 0; k--) {
      let reply = replies[k]
      if (reply.time < offset) {
        if (currentNumberOfReply < 2) {
          mReplies = [getClientFormatReply(reply), ...mReplies]

          rOffset = reply.time.getTime()
          lastIndex = k
          currentNumberOfReply++
        } else {
          break
        }
      }
    }
  }

  if (currentNumberOfReply < 2 || lastIndex == 1) {
    rOffset = -2
  }
  mReplies = [getClientFormatReply(replies[0]), ...mReplies]

  return {
    offset: rOffset,
    comments: mReplies
  }
}

const getClientFormatReply = (reply) => ({
  id: reply.id,
  type: reply.type,
  urlname: reply.urlName,
  ownerid: reply.userId,
  leadercommentid: reply.commentId,
  avatarUrl: reply.avatarUrl,
  name: reply.username,
  content: reply.content,
  time: reply.time.getTime(),
  numlike: reply.numberOfLike,
})
