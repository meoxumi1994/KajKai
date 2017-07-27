import { User, BasicStore, Liker, SellpostLiker, CommentLiker, ReplyLiker,  Notification, IDSellpostStore, IDCommentSellpost, IDReplyCommentSellpost } from '../models'
// import { createLikeSellpostNotification, createLikeCommentNotification, createLikeReplyNotification } from '../services/NotificationService'
import { NotificationType } from '../enum'

// import { User, BasicStore, Notification, IDSellpostStore, IDCommentSellpost, IDReplyCommentSellpost, SellpostLiker, CommentLiker, ReplyLiker } from '../models'
// import { NotificationType } from '../enum'
import { notify } from '../controllers/NotificationPubController'

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
                        notify(user.id, mNotification)
                        notifications.push(mNotification)
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
                            notify(user.id, mNotification)
                            notifications.push(mNotification)
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
                            notify(user.id, mNotification)
                            notifications.push(mNotification)
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

export const getClientFormatNotification = (notification) => ({
  id: notification._id,
  commentid: notification.replyId,
  leadercommentid: notification.commentId,
  sellpostid: notification.sellpostId,
  ownerid: notification.actorId,
  avatarUrl: notification.avatarUrl,
  name: notification.name,
  content: notification.content,
  time: notification.time.getTime(),
  numlike: notification.numberOfLike,
  likes: notification.likers.map((liker) => ({
    avatarUrl: liker.avatarUrl,
    userid: liker.userId,
    username: liker.username,
    storeid: liker.storeId,
    storename: liker.storename,
    id: liker.userId ? liker.userId : liker.storeId,
    name: liker.username ? liker.username : liker.storeName
  })),
  likestatus: ['like'],
  storename: notification.storeName,
  urlname: notification.urlName
})


export const createLikeNotification = (message) => {
  const { likenId, likerId } = message.like

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    User.findOne({ id: likerId }, (err, user) => {
      if (user) {
        const liker = new Liker({
          userId: likerId,
          username: user.username,
          avatarUrl: user.avatarUrl
        })
        resolve(liker)
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: likerId }, (err, basicStore) => {
      if (basicStore) {
        const liker = new Liker({
          storeId: likerId,
          storeName: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl
        })
        resolve(liker)
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((likers) => {
    const liker = likers[0] ? likers[0] : likers[1]
    if (likenId.substr(0, 3) == '012') { // sellpost
      SellpostLiker.findOne({ sellpostId: likenId }, (err, sellpostLiker) => {
        if (sellpostLiker) {
          let { likers } = sellpostLiker
          if (!likers) {
            likers = []
          }
          likers.push(liker)
          sellpostLiker.likers = likers
          sellpostLiker.save(() => {
            createLikeSellpostNotification(likenId)
          })
        } else {
          const mSellpostLiker = new SellpostLiker({
            sellpostId: likenId,
            likers: [liker]
          })
          mSellpostLiker.save(() => {
            createLikeSellpostNotification(likenId)
          })
        }
      })
    } else if (likenId.substr(0, 3) == '004') { // comment
      CommentLiker.findOne({ commentId: likenId }, (err, commentLiker) => {
        if (commentLiker) {
          let { likers } = commentLiker
          if (!likers) {
            likers = []
          }
          likers.push(liker)
          commentLiker.likers = likers
          commentLiker.save(() => {
            createLikeCommentNotification(likenId)
          })
        } else {
          const mCommentLiker = new SellpostLiker({
            commentId: likenId,
            likers: [liker]
          })
          mCommentLiker.save(() => {
            createLikeCommentNotification(likenId)
          })
        }
      })
    } else if (likenId.substr(0, 3) == '005') { // 005 reply
      ReplyLiker.findOne({ replyId:  likenId }, (err, replyLiker) => {
        if (replyLiker) {
          let { likers } = replyLiker
          if (!likers) {
            likers = []
          }
          likers.push(liker)
          replyLiker.likers = likers
          replyLiker.save(() => {
            createLikeReplyNotification(likenId)
          })
        } else {
          const mReplyLiker = new SellpostLiker({
            replyId: likenId,
            likers: [liker]
          })

          mReplyLiker.save(() => {
            createLikeReplyNotification(likenId)
          })
        }
      })
    }
  })
}

export const removeLikeNotification = (message) => {
  const { likenId, likerId } = message.like

  removeLike(likenId, likerId)

  let UNLIKETYPE = ''
  if (likenId.substr(0, 3) == '012') { // sellpost
    UNLIKETYPE = NotificationType.LIKESELLPOST
  } else if (likenId.substr(0, 3) == '004') { // comment
    UNLIKETYPE = NotificationType.LIKECOMMENT
  } else if (likenId.substr(0, 3) == '005') { // reply
    UNLIKETYPE = NotificationType.LIKEREPLY
  }

  User.find({}, (err, users) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        let user = users[i]
        let { notifications, mNumberOfUnRead } = user
        if (!notifications) {
          notifications = []
        }
        if (!mNumberOfUnRead) {
          mNumberOfUnRead = 0
        }
        let mNotifications = []
        for (let k = 0; k < notifications.length; k++) {
          let notification = notifications[k]
          let { type } = notification
          let flag = false
          if (type == UNLIKETYPE) {
            if (type == NotificationType.LIKESELLPOST && notification.sellpostId == likenId) {
              flag = true
            } else if (type == NotificationType.LIKECOMMENT && notification.commentId == likenId) {
              flag = true
            } else if (type == NotificationType.LIKEREPLY && notification.replyId == likenId) {
              flag = true
            }
          }
          if (flag) {
            let { likers } = notification
            if (!likers) {
              likers = []
            }
            for (let h = 0; h < likers.length; h++) {
              if (likers[h].userId == likerId || likers[h].storeId == likerId) {
                likers.splice(h, 1)
              }
            }
            if (likers.length > 0) {
              notification.likers = likers
              mNotifications.push(notification)
            } else {
              if (k >= notifications.length - mNumberOfUnRead) {
                mNumberOfUnRead--
              }
            }
          } else {
            mNotifications.push(notification)
          }
        }
        user.notifications = mNotifications
        user.numberOfUnRead = mNumberOfUnRead
        user.save(() => {})
      }
    }
  })
}

const removeLike = (likenId, likerId) => {
  if (likenId.substr(0, 3) == '012') { // sellpost
    SellpostLiker.find({ sellpostId: likenId }, (err, sellpostLiker) => {
      if (sellpostLiker) {
        console.log('sellpostLiker: ', sellpostLiker);
        let { likers } = sellpostLiker
        if (!likers) {
          likers = []
        }
        for (let i = 0; i < likers.length; i++) {
          if (likers[i].userId == likerId || likers[i].storeId == likerId) {
            likers.splice(i, 1)
            break
          }
        }
        sellpostLiker.likers = likers
        sellpostLiker.save(() => {})
      }
    })
  } else if (likenId.substr(0, 3) == '004') { // comment
    CommentLiker.find({ commentId: likenId }, (err, commentLiker) => {
      if (commentLiker) {
        let { likers } = commentLiker
        if (!likers) {
          likers = []
        }
        for (let i = 0; i < likers.length; i++) {
          if (likers[i].userId == likerId || likers[i].storeId == likerId) {
            likers.splice(i, 1)
            break
          }
        }
        commentLiker.likers = likers
        commentLiker.save(() => {})
      }
    })
  } else if (likenId.substr(0, 3) == '005') { // reply
    ReplyLiker.find({ replyId: likenId }, (err, replyLiker) => {
      if (replyLiker) {
        let { likers } = replyLiker
        if (!likers) {
          likers = []
        }
        for (let i = 0; i < likers.length; i++) {
          if (likers[i].userId == likerId || likers[i].storeId == likerId) {
            likers.splice(i, 1)
            break
          }
        }
        replyLiker.likers = likers
        replyLiker.save(() => {})
      }
    })
  }
}
