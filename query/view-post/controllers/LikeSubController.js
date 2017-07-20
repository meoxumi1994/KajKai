import { BasicUser, Liker, Sellpost, Comment, Reply } from '../models'

export const AddLike = (message) => {
  const { likenId, likerId: userId } = message.like

  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      if (likenId.substr(0, 3) == '012') { // sellpost
        const liker = new Liker({
          userId,
          username: basicUser.username
        })
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
            if (comment.replies[0].numberOfLike) {
              comment.replies[0].numberOfLike++
            } else {
              comment.replies[0].numberOfLike = 1
            }
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
            if (reply.numberOfLike) {
              reply.numberOfLike++
            } else {
              comment.numberOfLike = 1
            }
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

export const RemoveLike = (message) => {
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
            comment.replies[0].numberOfLike--
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
            reply.numberOfLike--
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
