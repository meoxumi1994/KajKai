import { Minorpost } from '../models'
import { getClientFormatMinorpostComments } from './CommentService'

export const getMinorposts = (storeId, offset, next) => {
  Minorpost.find({ storeId }, (err, minorposts) => {
    if (err || !minorposts) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          offset,
          storeid: storeId,
          minorposts: []
        })
      }
    } else {
      const mMinorposts = []
      let currentNumberOfMinorpost = 0, mOffset = -2
      for (let i = minorposts.length - 1; i >= 0; i--) {
        let minorpost = minorposts[i]
        if (minorpost.time < offset) {
          if (currentNumberOfMinorpost < 3) {
            mMinorposts.push(getClientFormatMinorpost(minorpost, Date.now()))

            mOffset = minorpost.time.getTime()
            currentNumberOfMinorpost++
          } else {
            break
          }
        }
      }

      next({
        status: 'success',
        offset: mOffset,
        storeid: storeId,
        minorposts: mMinorposts
      })
    }
  })
}

export const getMinorpostContent = (id, next) => {
  Minorpost.findOne({ id }, (err, minorpost) => {
    if (err || !minorpost) {
      if(err) {
        next(null)
      } else {
        next({
          content: ''
        })
      }
    } else {
      const { content } = minorpost
      next({
        content: content ? content.substr(200) : null
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
    time: minorpost.time.getTime(),
    content: minorpost.content ? minorpost.content.substr(0, 200) : null,
    images: minorpost.images,
    video: minorpost.video,
    numlike: minorpost.numberOfLike ? minorpost.numberOfLike : 0,
    likes: minorpost.likers ? minorpost.likers.slice(0, 3) : null,
    numfollow: minorpost.numberOfFollow ? minorpost.numberOfFollow : 0,
    numleadercomment: minorpost.numberOfComment ? minorpost.numberOfComment : 0,
    ...getClientFormatMinorpostComments(comments, offset)
  })
}
