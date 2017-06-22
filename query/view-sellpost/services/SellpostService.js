import { Sellpost } from '../models'
import { getClientFormatPostrows } from './PostrowService'

export const getSellpost = (id, next) => {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (err) {
      next(null)
    } else {
      next(getClientFormatSellpost(sellpost))
    }
  })
}

export const getSellposts = (storeId, next) => {
  Sellpost.find({ storeId }, (err, sellposts) => {
    if (err) {
      next(null)
    } else {
      const mSellposts = []
      let currentNumberOfSellpost = 0, sellpostTopOffset = -1, sellpostBottomOffset = -1
      for (let i = sellposts.length - 1; i >= 0; i--) {
        let sellpost = sellposts[i]
        if (currentNumberOfSellpost < 2) {
          mSellposts.push(getClientFormatSellpost(sellpost))

          if (sellpostTopOffset == -1) {
            sellpostTopOffset = sellpost.time
          }
          sellpostBottomOffset = sellpost.time
          currentNumberOfSellpost++
        } else {
          break
        }
      }

      next({
        sellposts_offsettop: sellpostTopOffset,
        sellposts_offsetbottom: sellpostBottomOffset,
        storeid: storeId,
        sellposts: mSellposts
      })
    }
  })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}

const getClientFormatSellpost = (sellpost) => {
  const { postrows, comments } = sellpost
  const now = Date.now(), oneHour = 3600000

  let currentNumberOfComment = 0, topOffset = -1, bottomOffset = -1
  let mComments = []

  for (let i = comments.length - 1; i >= 0; i--) {
    let comment = comments[i]
    if (now - comment.time <= oneHour && currentNumberOfComment < 5) {
      let { replies } = comment
      let currentNumberOfReply = 0, rTopOffset = -1, rBottomOffset = -1
      let mReplies = []

      for(let k = replies.length - 1; k > 0; k--) {
        let reply = replies[k]
        if (now - reply.time <= oneHour && currentNumberOfReply < 2) {
          mReplies = [getClientFormatReply(reply), ...mReplies]

          if (rBottomOffset == -1) {
            rBottomOffset = reply.time
          }
          rTopOffset = reply.time
          currentNumberOfReply++
        } else {
          break
        }
      }

      mReplies = [getClientFormatReply(replies[0]), ...mReplies]

      let mComment = {}
      mComment.offsettop = rTopOffset
      mComment.offsetbottom = rBottomOffset
      mComment.id = comment.id
      mComment.sellpostid = comment.sellpostId
      mComment.order = comment.order
      mComment.comments = mReplies

      mComments = [mComment, ...mComments]

      if (bottomOffset == -1) {
        bottomOffset = comment.time
      }
      topOffset = comment.time
      currentNumberOfComment++
    } else {
      break
    }
  }

  return ({
    storeid: sellpost.storeId,
    storename: sellpost.storeName,
    category: sellpost.category,
    title: sellpost.title,
    description: sellpost.description,
    time: sellpost.time,
    status: sellpost.storeState,
    ship: sellpost.shipStatus,
    ...getClientFormatPostrows(postrows),
    numlike: sellpost.numberOfLike,
    likes: sellpost.likers.slice(0, 5),
    numfollow: sellpost.numerOfFollow,
    follows: sellpost.followers.slice(0, 5),
    numcomment: sellpost.numberOfComment,
    numshare: sellpost.numberOfShare,
    offsettop: topOffset,
    offsetbottom: bottomOffset,
    leadercomments: mComments
  })
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
