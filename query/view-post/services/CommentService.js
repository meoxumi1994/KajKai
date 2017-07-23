import { Sellpost, Minorpost } from '../models'
import { getClientFormatReplies } from './ReplyService'

export const getComments = (postType, id, offset, next) => {
  if (postType == 'sellpost') {
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
          ...getClientFormatSellpostComments(comments, offset, false)
        })
      }
    })
  } else {
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
        next(getClientFormatMinorpostComments(comments, offset))
      }
    })
  }
}

export const getClientFormatSellpostComments = (comments, offset, isFirst) => {
  if (!comments) {
    return {
      status: 'success',
      offset,
      leadercomments: []
    }
  }
  const oneHour = 3600000

  let currentNumberOfComment = 0, cOffset = Date.now(), lastIndex = -1
  let mComments = []

  if (isFirst) {
    for (let i = comments.length - 1; i >= 0; i--) {
      let comment = comments[i]
      if (offset - comment.time <= oneHour && currentNumberOfComment < 5) {
        let { replies } = comment
        let mComment = getClientFormatReplies(replies, Date.now(), true)

        mComment.id = comment.id
        mComment.sellpostid = comment.sellpostId
        mComment.order = comment.order
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
      if (comment.time < offset) {
        if (currentNumberOfComment < 10) {
          let { replies } = comment
          let mComment = getClientFormatReplies(replies, Date.now(), true)

          mComment.id = comment.id
          mComment.sellpostid = comment.sellpostId
          mComment.order = comment.order
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

export const getClientFormatMinorpostComments = (comments, offset) => {
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
      let mComment = getClientFormatReplies(replies, Date.now())

      mComment.id = comment.id
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
