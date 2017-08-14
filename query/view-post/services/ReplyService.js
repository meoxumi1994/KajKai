import { Comment } from '../models'
import { getBlackList } from './BlockService'

export const getReplies = (requesterId, id, offset, next) => {
  getBlackList((blackList) => {
    Comment.findOne({ id }, (err, comment) => {
      if (err || !comment) {
        if(err) {
          next(null)
        } else {
          next({
            id,
            status: 'nodata',
            offset,
            comments: []
          })
        }
      } else {
        let { replies } = comment
        const mReplies = []
        if (!replies) {
          replies = []
        }
        replies.map((reply) => {
          if (blackList.indexOf(reply.userId) == -1) {
            mReplies.push(reply)
          }
        })
        next({
          id,
          ...getClientFormatReplies(null, requesterId, mReplies, offset, false)
        })
      }
    })
  })
}

export const getClientFormatReplies = (targetId, requesterId, replies, offset, isFirst) => {
  if (!replies) {
    return {
      status: 'success',
      offset: -2,
      comments: []
    }
  }
  const oneHour = 3600000
  let currentNumberOfReply = 0, rOffset = Date.now(), lastIndex = -1
  let mReplies = []
  if (targetId) {
    for (let i = 0; i < replies.length; i++) {
      let reply = replies[i]
      if (reply.id == targetId) {
        mReplies = replies.splice(0, i + 6)
        break
      } else if (i + 1 == replies.length) {
        mReplies = replies.splice(0, 5)
      }
    }
    replies = mReplies
    mReplies = []
    for(let k = replies.length - 1; k > 0; k--) {
      let reply = replies[k]
      mReplies = [getClientFormatReply(requesterId, reply), ...mReplies]

      rOffset = reply.time.getTime()
    }

    if (replies.length > 0) {
      mReplies = [getClientFormatReply(requesterId, replies[0]), ...mReplies]
    }
  } else {
    if (isFirst) {
      for(let k = replies.length - 1; k > 0; k--) {
        let reply = replies[k]
        if (offset - reply.time <= oneHour && currentNumberOfReply < 2) {
          mReplies = [getClientFormatReply(requesterId, reply), ...mReplies]

          rOffset = reply.time.getTime()
          currentNumberOfReply++
        } else {
          break
        }
      }
      if (replies.length == 0 || currentNumberOfReply == replies.length) {
        rOffset = -2
      }

      if (replies.length > 0) {
        mReplies = [getClientFormatReply(requesterId, replies[0]), ...mReplies]
      }
    } else {
      for(let k = replies.length - 1; k > 0; k--) {
        let reply = replies[k]
        if (reply.time < offset) {
          if (currentNumberOfReply < 10) {
            mReplies = [getClientFormatReply(requesterId, reply), ...mReplies]

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
  }

  return {
    status: 'success',
    offset: rOffset,
    comments: mReplies
  }
}

const getClientFormatReply = (requesterId, reply) => {
  let { likers } = reply
  if (!likers) {
    likers = []
  }
  let likes = []

  if (requesterId == 'Guest') {
    likes = likers.slice(0, 5)
  } else {
    for (let i = 0; i < likers.length; i++) {
      let liker = likers[i]
      if (liker.userId == requesterId) {
        likes.push({
          userid: liker.userId,
          username: liker.username,
          storeid: liker.storeId,
          storename: liker.storeName,
          avatarUrl: liker.avatarUrl,
          id: liker.userId ? liker.userId : liker.storeId,
          name: liker.username ? liker.username : liker.storeName
        })
        break
      }
    }

    for (let i = 0; i < likers.length && likers.length < 5; i++) {
      let liker = likers[i]
      if (liker.userId != requesterId) {
        likes.push({
          userid: liker.userId,
          username: liker.username,
          storeid: liker.storeId,
          storename: liker.storeName,
          avatarUrl: liker.avatarUrl,
          id: liker.userId ? liker.userId : liker.storeId,
          name: liker.username ? liker.username : liker.storeName
        })
      }
    }
  }

  return ({
    id: reply.id,
    type: reply.type,
    urlname: reply.urlName,
    commenterid: reply.userId,
    leadercommentid: reply.commentId,
    avatarUrl: reply.avatarUrl,
    name: reply.username,
    content: reply.content ? reply.content : '',
    time: reply.time.getTime(),
    numlike: reply.numberOfLike ? reply.numberOfLike : 0,
    likes
  })
}
