import { BasicUser, Liker, Sellpost, Comment, Reply } from '../models'

export const addLike = (message) => {
  const { likenId, likerId: userId } = message.like

  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      const liker = new Liker({
        userId,
        username: basicUser.username
      })
      if (likenId.substr(0, 3) == '012') { // sellpost
        Sellpost.findOne({ id: likenId }, (err, sellpost) => {
          if (sellpost) {
            let { likers } = sellpost
            if (!likers) {
              likers = []
            }
            likers.push(liker)
            sellpost.likers = likers
            sellpost.numberOfLike = likers.length
            sellpost.save(() => {})
          }
        })
      } else if (likenId.substr(0, 3) == '004') { // comment
        Comment.findOne({ id: likenId }, (err, comment) => {
          if (comment) {
            let { likers } = comment.replies[0]
            if (!likers) {
              likers = []
            }
            likers.push(liker)
            comment.replies[0].likers = likers
            comment.replies[0].numberOfLike = likers.length
            comment.save(() => {})

            Sellpost.findOne({ id: comment.sellpostId }, (err, sellpost) => {
              if (sellpost) {
                const { comments } = sellpost
                for (let i = 0; i < comments.length; i++) {
                  if (comments[i].id == likenId) {
                    comments[i].replies[0].likers = likers
                    comments[i].replies[0].numberOfLike = likers.length
                    break
                  }
                }
                sellpost.comments = comments
                sellpost.save(() => {})
              }
            })
          }
        })
      } else { // 005 reply
        Reply.findOne({ id:  likenId }, (err, reply) => {
          if (reply) {
            let { likers } = reply
            if (!likers) {
              likers = []
            }
            likers.push(liker)
            reply.likers = likers
            reply.numberOfLike = likers.length
            reply.save(() => {})

            Comment.findOne({ id: reply.commentId }, (err, comment) => {
              if (comment) {
                const { replies } = comment
                for (let i = 0; i < replies.length; i++) {
                  if (replies[i].id == likenId) {
                    replies[i] = reply
                    break
                  }
                }
                comment.replies = replies
                comment.save(() => {})

                Sellpost.findOne({ id: comment.sellpostId }, (err, sellpost) => {
                  if (sellpost) {
                    const { comments } = sellpost
                    for (let i = 0; i < comments.length; i++) {
                      if (comments[i].id == likenId) {
                        comments[i] = comment
                        break
                      }
                    }
                    sellpost.comments = comments
                    sellpost.save(() => {})
                  }
                })
              }
            })
          }
        })
      }
    }
  })
}

export const removeLike = (message) => {
  const { likenId, likerId: userId } = message.like

  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      if (likenId.substr(0, 3) == '012') { // sellpost
        Sellpost.findOne({ id: likenId }, (err, sellpost) => {
          if (sellpost) {
            let { likers } = sellpost
            for (let i = 0; i < likers.length; i++) {
              if (likers[i].userId == userId) {
                likers.splice(i, 1)
                break
              }
            }
            sellpost.likers = likers
            sellpost.numberOfLike = likers.length
            sellpost.save(() => {})
          }
        })
      } else if (likenId.substr(0, 3) == '004') { // comment
        Comment.findOne({ id: likenId }, (err, comment) => {
          if (comment) {
            let { likers } = comment.replies[0]
            for (let i = 0; i < likers.length; i++) {
              if (likers[i].userId == userId) {
                likers.splice(i, 1)
                break
              }
            }
            comment.replies[0].likers = likers
            comment.replies[0].numberOfLike = likers.length
            comment.save(() => {})

            Sellpost.findOne({ id: comment.sellpostId }, (err, sellpost) => {
              if (sellpost) {
                const { comments } = sellpost
                for (let i = 0; i < comments.length; i++) {
                  if (comments[i].id == likenId) {
                    comments[i] = comment
                    break
                  }
                }
                sellpost.comments = comments
                sellpost.save(() => {})
              }
            })
          }
        })
      } else { // 005 reply
        Reply.findOne({ id:  likenId }, (err, reply) => {
          if (reply) {
            let { likers } = reply
            for (let i = 0; i < likers.length; i++) {
              if (likers[i].userId == userId) {
                likers.splice(i, 1)
                break
              }
            }
            reply.likers = likers
            reply.numberOfLike = likers.length
            reply.save(() => {})

            Comment.findOne({ id: reply.commentId }, (err, comment) => {
              if (comment) {
                const { replies } = comment
                for (let i = 0; i < replies.length; i++) {
                  if (replies[i].id == likenId) {
                    replies[i] = reply
                    break
                  }
                }
                comment.replies = replies
                comment.save(() => {})

                Sellpost.findOne({ id: comment.sellpostId }, (err, sellpost) => {
                  if (sellpost) {
                    const { comments } = sellpost
                    for (let i = 0; i < comments.length; i++) {
                      if (comments[i].id == likenId) {
                        comments[i] = comment
                        break
                      }
                    }
                    sellpost.comments = comments
                    sellpost.save(() => {})
                  }
                })
              }
            })
          }
        })
      }
    }
  })
}
