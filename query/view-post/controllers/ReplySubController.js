import { Sellpost, Minorpost, Comment, Reply, BasicUser, BasicStore } from '../models'

export const createReply = (message) => {
  const { parentCommentId: commentId, sCommentId: id, posterId: userId, sellPostId: sellpostId, minorPostId: minorpostId, content, time } = message.sComment

  const reply = new Reply({
    commentId, id, userId
  })

  if (content) reply.content = content
  if (time) reply.time = time

  if(userId.substr(0, 3) == '001') {
    reply.type = 'user'
    BasicUser.findOne({ id: userId }, (err, basicUser) => {
      if (basicUser) {
        reply.username = basicUser.username
        reply.avatarUrl = basicUser.avatarUrl
        reply.save(() => {})

        Comment.findOne({ id: commentId }, (err, comment) => {
          if (comment) {
            comment.replies.push(reply)
            comment.numberOfReply = comment.replies.length - 1
            comment.save(() => {})
          }
        })

        if (sellpostId) {
          Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
            if (sellpost) {
              const { comments } = sellpost

              for (let i = 0; i < comments.length; i++) {
                let comment = comments[i]
                if (comment.id == commentId) {
                  comment.replies.push(reply)
                  comment.numberOfReply = comment.replies.length - 1
                  comments[i] = comment
                  break
                }
              }

              sellpost.comments = comments
              sellpost.save(() => {})
            }
          })
        } else {
          Minorpost.findOne({ id: minorpostId }, (err, minorpost) => {
            if (minorpost) {
              const { comments } = minorpost

              for (let i = 0; i < comments.length; i++) {
                let comment = comments[i]
                if (comment.id == commentId) {
                  comment.replies.push(reply)
                  comment.numberOfReply = comment.replies.length - 1
                  comments[i] = comment
                  break
                }
              }

              minorpost.comments = comments
              minorpost.save(() => {})
            }
          })
        }
      }
    })
  } else {
    reply.type = 'store'
    BasicStore.findOne({ id: userId }, (err, basicStore) => {
      if (basicStore) {
        reply.urlName = basicStore.urlName
        reply.username = basicStore.storeName
        reply.avatarUrl = basicStore.avatarUrl
        reply.save(() => {})

        Comment.findOne({ id: commentId }, (err, comment) => {
          if (comment) {
            comment.replies.push(reply)
            comment.numberOfReply = comment.replies.length - 1
            comment.save(() => {})
          }
        })

        if (sellpostId) {
          Sellpost.findOne({ id: sellpostId }, (err, sellpost) => {
            if (sellpost) {
              const { comments } = sellpost

              for (let i = 0; i < comments.length; i++) {
                let comment = comments[i]
                if (comment.id == commentId) {
                  comment.replies.push(reply)
                  comment.numberOfReply = comment.replies.length - 1
                  comments[i] = comment
                  break
                }
              }

              sellpost.comments = comments
              sellpost.save(() => {})
            }
          })
        } else {
          Minorpost.findOne({ id: minorpostId }, (err, minorpost) => {
            if (minorpost) {
              const { comments } = minorpost

              for (let i = 0; i < comments.length; i++) {
                let comment = comments[i]
                if (comment.id == commentId) {
                  comment.replies.push(reply)
                  comment.numberOfReply = comment.replies.length - 1
                  comments[i] = comment
                  break
                }
              }


              minorpost.comments = comments
              minorpost.save(() => {})
            }
          })
        }
      }
    })
  }
}
