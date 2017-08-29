import { User, BasicStore, Notification, IDSellpostStore, IDCommentSellpost, IDReplyCommentSellpost, SellpostLiker, CommentLiker, ReplyLiker, CommentActor, ReplyActor, ContentMap } from '../models'
import { NotificationType } from '../enum'
import { notify } from '../controllers/NotificationPubController'

export const createLikeSellpostNotification = (sellpostId) => {
  SellpostLiker.findOne({ sellpostId }, (err, sellpostLiker) => {
    if (sellpostLiker) {
      let { likers } = sellpostLiker
      const numberOfLike = likers.length
      const liker = likers[likers.length - 1]
      likers = likers.length <= 5 ? likers : likers.splice(likers.length - 5)
      IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
        if (mIDSellpostStore) {
          BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
            if (basicStore) {
              User.find({}, (err, users) => {
                if (users) {
                  for (let i = 0; i < users.length; i++) {
                    let user = users[i]
                    if (isLiker(user, liker)) {
                      continue
                    }
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
                          storeId: basicStore.id,
                          storeAvatarUrl: basicStore.avatarUrl,
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

export const createLikeCommentNotification = (commentId) => {
  CommentLiker.findOne({ commentId }, (err, commentLiker) => {
    if (commentLiker) {
      let { likers } = commentLiker
      const numberOfLike = likers.length
      const liker = likers[likers.length - 1]
      likers = likers.length <= 5 ? likers : likers.splice(likers.length - 5)
      IDCommentSellpost.findOne({ commentId }, (err, mIDCommentSellpost) => {
        if (mIDCommentSellpost) {
          IDSellpostStore.findOne({ sellpostId: mIDCommentSellpost.sellpostId }, (err, mIDSellpostStore) => {
            if (mIDSellpostStore) {
              BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
                if (basicStore) {
                  CommentActor.findOne({ commentId }, (err, commentActor) => {
                    if (commentActor) {
                      ContentMap.findOne({ id: commentId }, (err, contentMap) => {
                        User.find({}, (err, users) => {
                          if (users) {
                            for (let i = 0; i < users.length; i++) {
                              let user = users[i]
                              if (isLiker(user, liker)) {
                                continue
                              }
                              let { followingSellposts } = user
                              if (!followingSellposts) {
                                followingSellposts = []
                              }
                              for (let k = 0; k < followingSellposts.length; k++) {
                                if (followingSellposts[k] == mIDCommentSellpost.sellpostId) {
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
                                    storeId: basicStore.id,
                                    storeAvatarUrl: basicStore.avatarUrl,
                                    numberOfLike,
                                    likers,
                                    comment: commentActor
                                  })
                                  if (contentMap) {
                                    let { content, order } = contentMap
                                    if (content) mNotification.content = content
                                    if (order) mNotification.order = order
                                  }
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
  })
}

export const createLikeReplyNotification = (replyId) => {
  ReplyLiker.findOne({ replyId }, (err, replyLiker) => {
    if (replyLiker) {
      let { likers } = replyLiker
      const numberOfLike = likers.length
      const liker = likers[likers.length - 1]
      likers = likers.length <= 5 ? likers : likers.splice(likers.length - 5)
      IDReplyCommentSellpost.findOne({ replyId }, (err, mIDReplyCommentSellpost) => {
        if (mIDReplyCommentSellpost) {
          IDSellpostStore.findOne({ sellpostId: mIDReplyCommentSellpost.sellpostId }, (err, mIDSellpostStore) => {
            if (mIDSellpostStore) {
              BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
                if (basicStore) {
                  ReplyActor.findOne({ replyId }, (err, replyActor) => {
                    if (replyActor) {
                      ContentMap.findOne({ id: replyId }, (err, contentMap) => {
                        User.find({}, (err, users) => {
                          if (users) {
                            for (let i = 0; i < users.length; i++) {
                              let user = users[i]
                              if (isLiker(user, liker)) {
                                continue
                              }
                              let { followingSellposts } = user
                              if (!followingSellposts) {
                                followingSellposts = []
                              }
                              for (let k = 0; k < followingSellposts.length; k++) {
                                if (followingSellposts[k] == mIDReplyCommentSellpost.sellpostId) {
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
                                    storeId: basicStore.id,
                                    storeAvatarUrl: basicStore.avatarUrl,
                                    numberOfLike,
                                    likers,
                                    reply: replyActor
                                  })
                                  if (contentMap && contentMap.content) {
                                    mNotification.content = contentMap.content
                                  }
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
  })
}

export const getClientFormatNotification = (notification) => ({
  type: notification.type,
  id: notification._id.toString(),
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
  urlname: notification.urlName,
  avartarStore: notification.storeAvatarUrl,
  order: notification.order ? notification.order.map((product) => ({
    id: product.id,
    content: product.content ? product.content : '',
    imageUrl: product.imageUrl ? product.imageUrl : '',
    list: product.list ? product.list : [],
    num: product.numberOfOrder
  })) : [],
  isclick: notification.isRead == 1,
  match: notification.match ? notification.match : [],
  leadercomment: notification.comment ? {
    commenterid: notification.comment.id,
    name: notification.comment.name,
    avatarUrl: notification.comment.avatarUrl,
    type: notification.comment.type
  } : null,
  comment: notification.reply ? {
    commenterid: notification.reply.id,
    name: notification.reply.name,
    avatarUrl: notification.reply.avatarUrl,
    type: notification.reply.type
  } : null,
  status: notification.storeState ? notification.storeState : ''
})

const isLiker = (user, liker) => {
  if (!liker || !user) {
    return false
  }
  if (liker.userId) {
    if (user.id == liker.userId) {
      return true
    }
    return false
  }
  let { storeList } = user
  if (!storeList) {
    storeList = []
  }
  for (let k = 0; k < storeList.length; k++) {
    if (storeList[k].id == liker.storeId) {
      return true
    }
  }
  return false
}
