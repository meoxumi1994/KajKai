import { User, BasicStore, Liker, SellpostLiker, CommentLiker, ReplyLiker } from '../models'
import { createLikeSellpostNotification, createLikeCommentNotification, createLikeReplyNotification } from '../services/NotificationService'
import { NotificationType } from '../enum'

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
        let { notifications, numberOfUnRead } = user
        if (!notifications) {
          notifications = []
        }
        if (!numberOfUnRead) {
          numberOfUnRead = 0
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
              if (k >= notifications.length - numberOfUnRead) {
                numberOfUnRead--
              }
            }
          } else {
            mNotifications.push(notification)
          }
        }
        user.notifications = mNotifications
        user.numberOfUnRead = numberOfUnRead
        user.save(() => {})
      }
    }
  })
}

const removeLike = (likenId, likerId) => {
  if (likenId.substr(0, 3) == '012') { // sellpost
    SellpostLiker.findOne({ sellpostId: likenId }, (err, sellpostLiker) => {
      if (sellpostLiker) {
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
    CommentLiker.findOne({ commentId: likenId }, (err, commentLiker) => {
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
    ReplyLiker.findOne({ replyId: likenId }, (err, replyLiker) => {
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
