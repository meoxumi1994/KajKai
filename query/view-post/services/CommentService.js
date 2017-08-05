import { Sellpost, Minorpost, Comment } from '../models'
import { getClientFormatReplies } from './ReplyService'
import { OrderStatus } from '../enum'

export const getComments = (requesterId, type, id, offset, status, length, next) => {
  if (type == 'sellpost') {
    Sellpost.findOne({ id }, (err, sellpost) => {
      if (err || !sellpost) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            offset,
            id,
            leadercomments: []
          })
        }
      } else {
        const { comments } = sellpost
        next({
          id,
          ...getClientFormatSellpostComments(requesterId, comments, offset, status, false, 10)
        })
      }
    })
  } else if (type == 'minorpost') {
    Minorpost.findOne({ id }, (err, minorpost) => {
      if (err || !minorpost) {
        if(err) {
          next(null)
        } else {
          next({
            offset,
            id,
            leadercomments: []
          })
        }
      } else {
        const { comments } = minorpost
        next(getClientFormatMinorpostComments(requesterId, comments, offset))
      }
    })
  } else if (type == 'store') {
    Comment.find({ storeId: id }, (err, comments) => {
      if (err || !comments) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            offset,
            id,
            leadercomments: []
          })
        }
      } else {
        next({
          id,
          ...getClientFormatSellpostComments(requesterId, comments, offset, status, false, length)
        })
      }
    })
  } else { // type == user
    Comment.find({ commenterId: id }, (err, comments) => {
      if (err || !comments) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            offset,
            id,
            leadercomments: []
          })
        }
      } else {
        next({
          id,
          ...getClientFormatSellpostComments(requesterId, comments, offset, status, false, length)
        })
      }
    })
  }
}

export const getClientFormatSellpostComments = (requesterId, comments, offset, status, isFirst, length) => {
  if (!comments) {
    return {
      status: 'success',
      offset: -2,
      leadercomments: []
    }
  }
  const oneHour = 3600000

  let currentNumberOfComment = 0, cOffset = Date.now(), lastIndex = -1
  let mComments = []
  let level = {
    [OrderStatus.NEW]: 1,
    [OrderStatus.RECEIVED]: 2,
    [OrderStatus.DONE]: 3
  }

  if (isFirst) {
    for (let i = comments.length - 1; i >= 0; i--) {
      let comment = comments[i]
      if (offset - comment.time <= oneHour && currentNumberOfComment < 5 && level[comment.status] <= level[status]) {
        let { replies } = comment
        let mComment = getClientFormatReplies(requesterId, replies, Date.now(), true)

        mComment.id = comment.id
        mComment.sellpostid = comment.sellpostId
        mComment.order = comment.order ? comment.order.map((product) => ({
          id: product.id,
          content: product.content ? product.content : '',
          imageUrl: product.imageUrl,
          list: product.list ? product.list : [],
          num: product.numberOfOrder
        })) : []
        mComment.time = comment.time.getTime()
        mComment.status = comment.status
        mComment.numcomment = comment.numberOfReply

        mComments = [mComment, ...mComments]

        cOffset = comment.time.getTime()
        currentNumberOfComment++
      } else {
        break
      }
    }
    if (comments.length == 0 || currentNumberOfComment == comments.length) {
      cOffset = -2
    }
  } else {
    for (let i = comments.length - 1; i >= 0; i--) {
      let comment = comments[i]
      if (comment.time < offset && level[comment.status] <= level[status]) {
        if (currentNumberOfComment < length) {
          let { replies } = comment
          let mComment = getClientFormatReplies(requesterId, replies, Date.now(), true)

          mComment.id = comment.id
          mComment.sellpostid = comment.sellpostId
          mComment.order = comment.order ? comment.order.map((product) => ({
            id: product.id,
            content: product.content ? product.content : '',
            imageUrl: product.imageUrl,
            list: product.list ? product.list : [],
            num: product.numberOfOrder
          })) : []
          mComment.time = comment.time.getTime()
          mComment.status = comment.status
          mComment.numcomment = comment.numberOfReply

          mComments = [mComment, ...mComments]

          cOffset = comment.time.getTime()
          lastIndex = i
          currentNumberOfComment++
        } else {
          break
        }
      }
    }
    if (lastIndex == 0) {
      cOffset = -2
    }
  }

  return {
    status: 'success',
    offset: cOffset,
    leadercomments: mComments
  }
}

export const getClientFormatMinorpostComments = (requesterId, comments, offset) => {
  if (!comments) {
    return {
      offset,
      leadercomments: []
    }
  }
  const oneHour = 3600000

  let currentNumberOfComment = 0, cOffset, lastIndex
  let mComments = []

  for (let i = comments.length - 1; i >= 0; i--) {
    let comment = comments[i]
    if (offset - comment.time <= oneHour && currentNumberOfComment < 5) {
      let { replies } = comment
      let mComment = getClientFormatReplies(requesterId, replies, Date.now())

      mComment.id = comment.id
      mComment.storeid = comment.storeId
      mComment.minorpostid = comment.minorPostId
      mComment.numcomment = comment.numberOfReply

      mComments = [mComment, ...mComments]

      cOffset = comment.time
      lastIndex = i
      currentNumberOfComment++
    } else {
      break
    }
  }

  if (currentNumberOfComment < 5 || lastIndex == 0) {
    cOffset = -2
  }

  return {
    offset: cOffset,
    leadercomments: mComments
  }
}
