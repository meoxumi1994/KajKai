import { BasicUser, Liker, Sellpost, Comment, Reply } from '../models'
import { NotificationType } from '../enum'

export const addLike = (message) => {
  const { likenId, likerId: userId } = message.like

  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      const liker = new Liker({
        userId,
        username: basicUser.username
      })
      if (likenId.substr(0, 3) == '012') { // sellpost
        User.find({}, (err, users) => {
          if (users) {
            const avatarUrlById = {}, usernameById = {}
            users.map((user) => {
              avatarUrlById[user.id] = user.avatarUrl
              usernameById[user.id] = user.username
            })
            for (let i = 0; i < users.length; i++) {
              let user = users[i]
              let { followingSellposts } = user
              if (!followingSellposts) {
                followingSellposts = []
              }
              for (let k = 0; k < followingSellposts.length; k++) {
                if (followingSellposts[k] == sellpostId) {
                  let { notifications } = user
                  if (!notifications) {
                    notifications = []
                  }
                  BasicStore.findOne({ id: storeId }, (err, basicStore) => {
                    if (basicStore) {
                      let notification = new Notification({
                        type: NotificationType.LIKE,
                        sellpostId: likenId,
                        actorId: userId,
                        username: usernameById[userId],
                        avatarUrl: avatarUrlById[userId],
                        storeName: basicStore.storeName,
                        urlName: basicStore.urlName,
                        content,
                        time: Date.now()
                      })

                      notifications.push(notification)
                      user.notifications = notifications
                      user.save(() => {})
                    }
                  })
                  break
                }
              }
            }
          }
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
                    replies[i].likers = likers
                    replies[i].numberOfLike = likers.length
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
                        comments[i].replies = replies
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
                    replies[i].likers = likers
                    replies[i].numberOfLike = likers.length
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
                        comments[i].replies = replies
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
