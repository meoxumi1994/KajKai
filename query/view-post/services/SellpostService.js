import { Sellpost } from '../models'
import { getClientFormatPostrows } from './PostrowService'
import { getClientFormatReply } from './ReplyService'

export const getSellpost = (id, next) => {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (err) {
      next(null)
    } else {
      next(getClientFormatSellpost(sellpost))
    }
  })
}

export const getSellposts = (storeId, offset, next) => {
  Sellpost.find({ storeId }, (err, sellposts) => {
    if (err) {
      next(null)
    } else {
      const mSellposts = []
      let currentNumberOfSellpost = 0, mOffset = -1
      for (let i = sellposts.length - 1; i >= 0; i--) {
        let sellpost = sellposts[i]
        if (sellpost.time < offset) {
          if (currentNumberOfSellpost < 2) {
            mSellposts.push(getClientFormatSellpost(sellpost))

            mOffset = sellpost.time
            currentNumberOfSellpost++
          } else {
            break
          }
        }
      }

      next({
        offset: mOffset,
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

  let currentNumberOfComment = 0, offset = -1
  let mComments = []

  for (let i = comments.length - 1; i >= 0; i--) {
    let comment = comments[i]
    if (now - comment.time <= oneHour && currentNumberOfComment < 5) {
      let { replies } = comment
      let currentNumberOfReply = 0, rOffset = -1
      let mReplies = []

      for(let k = replies.length - 1; k > 0; k--) {
        let reply = replies[k]
        if (now - reply.time <= oneHour && currentNumberOfReply < 2) {
          mReplies = [getClientFormatReply(reply), ...mReplies]

          rOffset = reply.time
          currentNumberOfReply++
        } else {
          break
        }
      }

      mReplies = [getClientFormatReply(replies[0]), ...mReplies]

      let mComment = {}
      mComment.offset = rOffset
      mComment.id = comment.id
      mComment.sellpostid = comment.sellpostId
      mComment.order = comment.order
      mComment.numcomment = comment.numberOfReply
      mComment.comments = mReplies

      mComments = [mComment, ...mComments]

      offset = comment.time
      currentNumberOfComment++
    } else {
      break
    }
  }

  return ({
    id: sellpost.id,
    storeid: sellpost.storeId,
    storename: sellpost.storeName,
    category: sellpost.category,
    title: sellpost.title,
    description: sellpost.description,
    time: sellpost.time,
    status: sellpost.storeState,
    ship: sellpost.shipStatus,
    ...getClientFormatPostrows(postrows, -1),
    numlike: sellpost.numberOfLike ? sellpost.numberOfLike : 0,
    likes: sellpost.likers ? sellpost.likers.slice(0, 5) : null,
    numfollow: sellpost.numerOfFollow ? sellpost.numerOfFollow : 0,
    follows: sellpost.followers ? sellpost.followers.slice(0, 5) : null,
    numleadercomment: sellpost.numberOfComment ? sellpost.numberOfComment : 0,
    numshare: sellpost.numberOfShare ? sellpost.numberOfShare : 0,
    offset: offset,
    leadercomments: mComments
  })
}
