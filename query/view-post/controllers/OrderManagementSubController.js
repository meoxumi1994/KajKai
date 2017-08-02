import { Comment } from '../models'
import { getClientFormatReply } from '../services/ReplyService'

export const getCommentsInfoHandler = (message, next) => {
  const { commentIds } = message
  const mPromises = []
  commentIds.map((id) => {
    mPromises.push(new Promise((resolve, reject) => {
      Comment.findOne({ id }, (err, comment) => {
        if (comment) {
          resolve({
            id: comment.id,
            sellpostid: comment.sellpostId,
            order: comment.order ? comment.order.map((product) => ({
              id: product.id,
              content: product.content ? product.content : '',
              imageUrl: product.imageUrl,
              list: product.list ? product.list : [],
              num: product.numberOfOrder
            })) : [],
            status: comment.status,
            numcomment: comment.numberOfReply,
            comments: [getClientFormatReply(comment.replies[0])]
          })
        } else {
          resolve(null)
        }
      })
    }))
  })

  Promise.all(mPromises).then((result) => {
    console.log('result - post: ', result);
    next(result)
  })
}
