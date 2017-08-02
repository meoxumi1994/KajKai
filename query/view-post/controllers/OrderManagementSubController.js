import { Comment } from '../models'

export const getCommentsAdditionalInfoHandler = (message, next) => {
  const { commentIds } = message
  const mPromises = []
  commentIds.map((id) => {
    mPromises.push(new Promise((resolve, reject) => {
      Comment.findOne({ id }, (err, comment) => {
        if (comment) {
          next({
            numberOfReply: comment.numberOfReply,
            numberOfLike: comment.replies[0].numberOfLike,
            status: comment.status
          })
        } else {
          resolve(null)
        }
      })
    }))
  })

  Promise.all(mPromises).then((result) => {
    console.log('result: ', result);
    next(result)
  })
}
