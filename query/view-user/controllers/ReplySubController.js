import { User, Notification, BasicStore, IDSellpostStore, Match, CommentActor } from '../models'
import { NotificationType } from '../enum'
import { addIDReplyCommentSellpost } from '../services/IDService'
import { notify } from './NotificationPubController'

export const createReplyNotification = (message) => {
  const { parentCommentId: commentId, sCommentId: replyId, posterId: replierId, sellPostId: sellpostId, minorPostId: minorpostId, content, time, match } = message.sComment

  User.findOne({ id: replierId }, (err, user) => {
    if (user) {
      let { numberOfReply } = user
      if (!numberOfReply) {
        numberOfReply = 0
      }
      numberOfReply++
      user.numberOfReply = numberOfReply
      user.save(() => {})
    }
  })

  addIDReplyCommentSellpost(replyId, commentId, sellpostId)

  const mPromises = []
  mPromises.push(new Promise((resolve, reject) => {
    User.findOne({ id: replierId }, (err, user) => {
      if (user) {
        const replier = {
          actorId: replierId,
          name: user.username,
          avatarUrl: user.avatarUrl
        }
        resolve(replier)
      } else {
        resolve(null)
      }
    })
  }))
  mPromises.push(new Promise((resolve, reject) => {
    BasicStore.findOne({ id: replierId }, (err, basicStore) => {
      if (basicStore) {
        const replier = {
          actorId: replierId,
          name: basicStore.storeName,
          avatarUrl: basicStore.avatarUrl
        }
        resolve(replier)
      } else {
        resolve(null)
      }
    })
  }))

  Promise.all(mPromises).then((repliers) => {
    const replier = repliers[0] ? repliers[0] : repliers[1]
    if (!replier) {
      return
    }
    IDSellpostStore.findOne({ sellpostId }, (err, mIDSellpostStore) => {
      if (mIDSellpostStore) {
        BasicStore.findOne({ id: mIDSellpostStore.storeId }, (err, basicStore) => {
          if (basicStore) {
            CommentActor.findOne({ commentId }, (err, commentActor) => {
              if (commentActor) {
                User.find({}, (err, users) => {
                  if (users) {
                    for (let i = 0; i < users.length; i++) {
                      let user = users[i]
                      if (user.id == replier.actorId || !user.storeList) {
                        continue
                      }
                      let { storeList } = user
                      let flag = true
                      for (let k = 0; k < storeList.length; k++) {
                        if (storeList[k].id == replier.actorId) {
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
                          let notification = new Notification({
                            type: NotificationType.REPLY,
                            commentId,
                            replyId,
                            sellpostId,
                            ...replier,
                            content,
                            time: Date.now(),
                            storeName: basicStore.storeName,
                            urlName: basicStore.urlName,
                            storeId: basicStore.id,
                            storeAvatarUrl: basicStore.avatarUrl,
                            comment: commentActor
                          })
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
      }
    })
  })
}
