import { Minorpost } from '../models'
import { getClientFormatMinorpostComments } from './CommentService'

export const getMinorposts = (storeId, offset, next) => {
  Minorpost.find({ storeId }, (err, minorposts) => {
    if (err) {
      next(null)
    } else {
      const mMinorposts = []
      let currentNumberOfMinorpost = 0, mOffset = -1
      for (let i = minorposts.length - 1; i >= 0; i--) {
        let minorpost = minorposts[i]
        if (minorpost.time < offset) {
          if (currentNumberOfMinorpost < 3) {
            mMinorposts.push(getClientFormatMinorpost(minorpost, Date.now()))

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

const getClientFormatMinorpost = (minorpost, offset) => {
  const { comments } = minorpost

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
    ...getClientFormatMinorpostComments(comments, offset)
  })
}
