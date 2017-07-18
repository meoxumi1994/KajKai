import { Comment } from '../models'

export const getReplies = (id, offset, next) => {
  Comment.findOne({ id }, (err, comment) => {
    if (err || !comment) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          offset,
          comments: []
        })
      }
    } else {
      const { replies } = comment
      next(getClientFormatReplies(replies, offset, false))
    }
  })
}

export const getClientFormatReplies = (replies, offset, isFirst) => {
  if (!replies) {
    return {
      status: 'success',
      offset,
      comments: []
    }
  }
  const oneHour = 3600000
  let currentNumberOfReply = 0, rOffset = Date.now(), lastIndex = -1
  let mReplies = []
  if (isFirst) {
    for(let k = replies.length - 1; k > 0; k--) {
      let reply = replies[k]
      if (offset - reply.time <= oneHour && currentNumberOfReply < 2) {
        mReplies = [getClientFormatReply(reply), ...mReplies]

        rOffset = reply.time.getTime()
        currentNumberOfReply++
      } else {
        break
      }
    }
    if (replies.length == 0 || currentNumberOfReply == replies.length) {
      rOffset = -2
    }

    mReplies = [getClientFormatReply(replies[0]), ...mReplies]
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
    if (lastIndex == 1) {
      rOffset = -2
    }
  }

  return {
    status: 'success',
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
