import { Minorpost } from '../models'
import { getClientFormatReply } from './ReplyService'

export const getMinorposts = (storeId, offset, next) => {
  Minorpost.find({ storeId }, (err, minorposts) => {
    if (err) {
      next(null)
    } else {
      const mMinorposts = []
      let currentNumberOfMinorpost = 0, mOffset = -1
      for (let i = minorposts.length - 1; i >= 0; i--) {
        let minorpost = sellposts[i]
        if (minorpost.time < offset) {
          if (currentNumberOfMinorpost < 3) {
            mMinorposts.push(getClientFormatMinorpost(minorpost))

            mOffset = minorpost.time
            currentNumberOfMinorpost++
          } else {
            break
          }
        }
      }

      next({
        offset: mOffset,
        storeid: storeId,
        minorposts: mMinorposts
      })
    }
  })
}

const getClientFormatMinorpost = (minorpost) => {
  const { comments } = minorpost
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
    id: minorpost.id,
    numline: minorpost.numberOfLine,
    storeid: minorpost.storeId,
    storename: minorpost.storeName,
    time: minorpost.time,
    content: minorpost.content,
    images: minorpost.images,
    video: minorpost.video,
    numlike: minorpost.numberOfLike ? minorpost.numberOfLike : 0,
    likes: minorpost.likers ? minorpost.likers.slice(0, 3) : null,
    numfollow: minorpost.numerOfFollow ? minorpost.numerOfFollow : 0,
    numleadercomment: minorpost.numberOfComment ? minorpost.numberOfComment : 0,
    offset: offset,
    leadercomments: mComments
  })
}
