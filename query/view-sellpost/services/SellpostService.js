import { Sellpost } from '../models'

export const getSellpost = (id, next) {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (err) {
      next(null)
    } else {
      const { postrows, comments } = sellpost
      const postrowOrder = [], mPostrows = []

      let currentNumberOfLine = 0, postrowOffset = -1

      for (let i = 0; i < postrows.length; i++) {
        let postrow = postrows[i]
        if (currentNumberOfLine + 0.5 * postrow.numberOfLine < 30) {
          postrowOrder.push(postrow.id)

          let mPostrow = {}
          mPostrow.id = postrow.id
          mPostrow.content = postrow.content
          mPostrow.numline = postrow.numberOfLine
          mPostrow.images = postrow.images
          mPostrow.titles_order = postrow.titles.map(title => title.id)
          mPostrow.titles = postrow.titles
          mPostrow.products = postrow.products.map(product => ({
            id: product.id,
            content: product.content,
            imageUrl: product.imageUrl,
            list: product.list,
            totalnum: product.numberOfOrder
          }))
          mPostrows.type = postrow.type

          mPostrows.push(mPostrow)
          currentNumberOfLine += postrow.numberOfLine
          postrowOffset = i
        } else {
          break
        }
      }

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

      next({
        storeid: sellpost.storeId,
        storename: sellpost.storeName,
        category: sellpost.category,
        title: sellpost.title,
        description: sellpost.description,
        time: sellpost.time,
        status: sellpost.storeState,
        ship: sellpost.shipStatus,
        postrows_offset: postrowOffset,
        postrows_order: postrowOrder,
        postrows: mPostrows,
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
  })
}

export const getSellposts = (storeId, next) => {
  
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
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
