import { User, BasicStore, IDSellpostStore, IDCommentSellpost, IDReplyCommentSellpost } from '../models'
import { NotificationType } from '../enum'

export const createLikeSellpostNotification = (sellpostId) => {
  SellpostLiker.findOne({ sellpostId }, (err, sellpostLiker) => {
    if (sellpostLiker) {
      let { likers } = sellpostLiker
      const numberOfLike = likers.length
      const liker = likers[likers.length - 1]
      likers = likers.length <= 5 ? likers : likers.slice(likers.length - 5)
      IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
        if (mIDSellpostStore) {
          BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
            if (basicStore) {
              User.find({}, (err, users) => {
                if (users) {
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
                        let mNotification = new Notification({
                          type: NotificationType.LIKESELLPOST,
                          sellpostId,
                          actorId: liker.userId ? liker.userId : liker.storeId,
                          name: liker.username ? liker.username : liker.storeName,
                          avatarUrl: liker.avatarUrl,
                          time: Date.now(),
                          storeName: basicStore.storeName,
                          urlName: basicStore.urlName,
                          numberOfLike,
                          likers
                        })
                        for (let h = 0; h < notifications.length; h++) {
                          let notification = notifications[h]
                          if (notification.type == NotificationType.LIKESELLPOST && notification.sellpostId == sellpostId) {
                            notifications.splice(h, 1)
                            break
                          } else if (h + 1 == notifications.length) {
                            user.numberOfUnRead = user.numberOfUnRead ? (user.numberOfUnRead + 1) : 1
                          }
                        }
                        notifications.push(notification)
                        user.notifications = notifications
                        user.save(() => {})
                        break
                      }
                    }
                  }
                }
              })
            }
          })
        }
      })
    }
  })
}

export const createLikeCommentNotification = (commendId) => {
  CommentLiker.findOne({ commendId }, (err, commentLiker) => {
    if (commentLiker) {
      let { likers } = commentLiker
      const numberOfLike = likers.length
      const liker = likers[likers.length - 1]
      likers = likers.length <= 5 ? likers : likers.slice(likers.length - 5)
      IDCommentSellpost.findOne({ commentId }, (err, mIDCommentSellpost) => {
        if (mIDCommentSellpost) {
          IDSellpostStore.findOne({ sellpostId: mIDCommentSellpost.sellpostId }, (err, mIDSellpostStore) => {
            if (mIDSellpostStore) {
              BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
                if (basicStore) {
                  User.find({}, (err, users) => {
                    if (users) {
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
                            let mNotification = new Notification({
                              type: NotificationType.LIKECOMMENT,
                              sellpostId: mIDCommentSellpost.sellpostId,
                              commentId,
                              actorId: liker.userId ? liker.userId : liker.storeId,
                              name: liker.username ? liker.username : liker.storeName,
                              avatarUrl: liker.avatarUrl,
                              time: Date.now(),
                              storeName: basicStore.storeName,
                              urlName: basicStore.urlName,
                              numberOfLike,
                              likers
                            })
                            for (let h = 0; h < notifications.length; h++) {
                              let notification = notifications[h]
                              if (notification.type == NotificationType.LIKECOMMENT && notification.commentId == commentId) {
                                notifications.splice(h, 1)
                                break
                              } else if (h + 1 == notifications.length) {
                                user.numberOfUnRead = user.numberOfUnRead ? (user.numberOfUnRead + 1) : 1
                              }
                            }
                            notifications.push(notification)
                            user.notifications = notifications
                            user.save(() => {})
                            break
                          }
                        }
                      }
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}

export const createLikeReplyNotification = (replyId) => {
  ReplyLiker.findOne({ replyId }, (err, replyLiker) => {
    if (replyLiker) {
      let { likers } = replyLiker
      const numberOfLike = likers.length
      const liker = likers[likers.length - 1]
      likers = likers.length <= 5 ? likers : likers.slice(likers.length - 5)
      IDReplyCommentSellpost.findOne({ replyId }, (err, mIDReplyCommentSellpost) => {
        if (mIDReplyCommentSellpost) {
          IDSellpostStore.findOne({ sellpostId: mIDReplyCommentSellpost.sellpostId }, (err, mIDSellpostStore) => {
            if (mIDSellpostStore) {
              BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
                if (basicStore) {
                  User.find({}, (err, users) => {
                    if (users) {
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
                            let mNotification = new Notification({
                              type: NotificationType.LIKEREPLY,
                              sellpostId: mIDReplyCommentSellpost.sellpostId,
                              commentId: mIDReplyCommentSellpost.commentId,
                              replyId,
                              actorId: liker.userId ? liker.userId : liker.storeId,
                              name: liker.username ? liker.username : liker.storeName,
                              avatarUrl: liker.avatarUrl,
                              time: Date.now(),
                              storeName: basicStore.storeName,
                              urlName: basicStore.urlName,
                              numberOfLike,
                              likers
                            })
                            for (let h = 0; h < notifications.length; h++) {
                              let notification = notifications[h]
                              if (notification.type == NotificationType.LIKEREPLY && notification.replyId == replyId) {
                                notifications.splice(h, 1)
                                break
                              } else if (h + 1 == notifications.length) {
                                user.numberOfUnRead = user.numberOfUnRead ? (user.numberOfUnRead + 1) : 1
                              }
                            }
                            notifications.push(notification)
                            user.notifications = notifications
                            user.save(() => {})
                            break
                          }
                        }
                      }
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}
