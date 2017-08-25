import { User, Notification, BasicStore, IDSellpostStore, Match, CommentActor, ContentMap } from '../models'
import { NotificationType } from '../enum'
import { addIDCommentSellpost } from '../services/IDService'
import { notify } from './NotificationPubController'

export const createCommentNotification = (message) => {
  const { fCommentId: commentId, posterId: commenterId, sellPostId: sellpostId, time, content, order, match } = message.fComment

  User.findOne({ id: commenterId }, (err, user) => {
    if (user) {
      let { numberOfComment } = user
      if (!numberOfComment) {
        numberOfComment = 0
      }
      numberOfComment++
      user.numberOfComment = numberOfComment
      user.save(() => {})
    }
  })

  let contentMap = new ContentMap()
  if (content) contentMap.content = content
  if (order) contentMap.order = order.map((product) => ({
    id: product.id,
    content: product.content,
    imageUrl: product.imageUrl,
    list: product.list,
    numberOfOrder: product.num
  }))

  contentMap.save(() => {})

  addIDCommentSellpost(commentId, sellpostId)

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    User.findOne({ id: commenterId }, (err, user) => {
      if (user) {
        const commenter = {
          actorId: commenterId,
          name: user.username,
          avatarUrl: user.avatarUrl
        }
        let commentActor = new CommentActor({
          commentId,
          id: commenterId,
          name: user.username,
          avatarUrl: user.avatarUrl,
          type: 'user'
        })

        commentActor.save(() => {})
        resolve(commenter)
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: commenterId }, (err, basicStore) => {
      if (basicStore) {
        const commenter = {
          actorId: commenterId,
          name: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl
        }
        let commentActor = new CommentActor({
          commentId,
          id: commenterId,
          name: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl,
          type: 'store'
        })

        commentActor.save(() => {})
        resolve(commenter)
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((commenters) => {
    const commenter = commenters[0] ? commenters[0] : commenters[1]
    if (!commenter) {
      return
    }
    console.log('commenter: ', commenter);
    IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
      if (mIDSellpostStore) {
        BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
          if (basicStore) {
            let notification = new Notification({
              type: NotificationType.COMMENT,
              commentId,
              sellpostId,
              ...commenter,
              content,
              time: Date.now(),
              storeName: basicStore.storeName,
              urlName: basicStore.urlName,
              storeId: basicStore.id,
              storeAvatarUrl: basicStore.avatarUrl
            })
            if (order) notification.order = order.map((product) => ({
              id: product.id,
              content: product.content,
              imageUrl: product.imageUrl,
              list: product.list,
              numberOfOrder: product.num
            }))
            if (match) {
              let tags = []
              match.map((item) => {
                tags.push(
                  new Match({
                    id: item.id,
                    name: item.name,
                    link: item.link
                  })
                )
              })
              notification.match = tags
            }
            notification.save(() => {})

            User.find({}, (err, users) => {
              if (users) {
                for (let i = 0; i < users.length; i++) {
                  let user = users[i]
                  if (user.id == commenter.actorId || !user.storeList) {
                    continue
                  }
                  let { storeList } = user
                  let flag = true
                  for (let k = 0; k < storeList.length; k++) {
                    if (storeList[k].id == commenter.actorId) {
                      flag = false
                      break
                    }
                  }
                  if (!flag) {
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

                      notify(user.id, notification)
                      notifications.push(notification)
                      user.notifications = notifications
                      user.numberOfUnRead = user.numberOfUnRead ? (user.numberOfUnRead + 1) : 1
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
  })
}

export const createReceiveNotification = (message) => {
  const { fCommentId: id, status } = message.fComment

  if (status == NotificationType.RECEIVED) {
    Notification.findOne({ commentId: id }, (err, notification) => {
      if (notification) {
        IDSellpostStore.findOne({ sellpostId: notification.sellpostId }, (err, mIDSellpostStore) => {
          if (mIDSellpostStore) {
            CommentActor.findOne({ commentId: id }, (err, commentActor) => {
              if (commentActor) {
                ContentMap.findOne({ id }, (err, contentMap) => {
                  notification.type = NotificationType.RECEIVED
                  let mNotification = new Notification({
                    type: NotificationType.RECEIVED,
                    commentId: notification.commentId,
                    replyId: notification.replyId,
                    sellpostId: notification.sellpostId,
                    actorId: mIDSellpostStore.storeId,
                    name: notification.storeName,
                    avatarUrl: notification.storeAvatarUrl,
                    content: notification.content,
                    time: Date.now(),
                    storeName: notification.storeName,
                    urlName: notification.urlName,
                    storeId: notification.storeId,
                    storeAvatarUrl: notification.storeAvatarUrl,
                    numberOfLike: notification.numberOfLike,
                    likers: notification.likers,
                    order: notification.order,
                    match: notification.match,
                    isRead: 0,
                    comment: commentActor
                  })
                  if (contentMap) {
                    let { content, order } = contentMap
                    if (content) mNotification.content = content
                    if (order) mNotification.order = order
                  }
                  User.find({}, (err, users) => {
                    if (users) {
                      for (let i = 0; i < users.length; i++) {
                        let user = users[i]
                        let { followingSellposts } = user
                        if (!followingSellposts) {
                          followingSellposts = []
                        }
                        for (let k = 0; k < followingSellposts.length; k++) {
                          if (followingSellposts[k] == notification.sellpostId) {
                            let { notifications } = user
                            if (!notifications) {
                              notifications = []
                            }

                            if (user.id == notification.actorId) {
                              notify(user.id, mNotification)
                              notifications.push(mNotification)
                              user.notifications = notifications
                              user.numberOfUnRead = user.numberOfUnRead ? user.numberOfUnRead + 1 : 1
                              user.save(() => {})
                            }
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
}
