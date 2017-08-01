import { User } from '../models'
import jwt from 'jsonwebtoken'
import { getClientFormatNotification } from './NotificationService'

export const getUser = (requesterId, id, next) => {
  User.findOne({ id }, (err, user) => {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'noData',
            user: {
              id
            }
          })
        }
      } else {
        if (!user.banned || user.banned == 0) {
          next({
            status: 'success',
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              avatarUrl: user.avatarUrl,
              coverUrl: user.coverUrl,
              address: {
                city : user.address.city,
                district : user.address.district,
                street : user.address.street,
                longitude : user.address.longitude,
                latitude : user.address.latitude
              },
              phone: user.phone,
              language: user.language,
              sex: user.sex,
              yearOfBirth: user.yearOfBirth,
              lastUpdate: {
                username: user.lastUpdate.username,
                phone: user.lastUpdate.phone,
                address: user.lastUpdate.address
              },
              blacklist: user.blackList ? user.blackList.map((black) => ({
                  id: black.id,
                  type: black.type,
                  name: black.name
                })) : [],
              storeList: user.storeList ? (user.storeList.map((basicStore) => ({
                id: basicStore.id,
                storename: basicStore.storeName,
                avatarUrl: basicStore.avatarUrl,
                urlname: basicStore.urlName
              }))) : [],
              numUnreaded: user.numberOfUnRead ? user.numberOfUnRead : 0
            }
          })
        } else {
          next({
            status: 'failed',
            banned: true,
            reason: user.reason,
            user: {
              id: user.id
            }
          })
        }
      }
  })
}

// export const getUserPrivacy = (id, next) => {
//   User.findOne({ id }, (err, user) => {
//       if (err || !user) {
//         if(err) {
//           next(null)
//         } else {
//           next({
//             status: 'noData',
//             user: {
//               id
//             }
//           })
//         }
//       } else {
//         if (!user.banned || user.banned == 0) {
//           next({
//             status: 'success',
//             privacy: {
//               id: user.id,
//               address_email_phone: user.privacy.address_email_phone,
//               another: user.privacy.others
//             }
//           })
//         } else {
//           next({
//             status: 'failed',
//             banned: true,
//             reason: user.reason,
//             privacy: {
//               id: user.id
//             }
//           })
//         }
//       }
//   })
// }

export const getUserImageList = (requesterId, id, offset, next) => {
  User.findOne({ id }, (err, user) => {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'noData',
            listImage: []
          })
        }
      } else {
        if (!user.banned || user.banned == 0) {
          let { imageList } = user
          if (!imageList) {
            imageList = []
          }
          const mImageList = []
          let currentNumberOfImage = 0, mOffset, lastIndex
          for (let i = imageList.length - 1; i >= 0; i--) {
            let image = imageList[i]
            if (image.time < offset) {
              if (currentNumberOfImage < 14) {
                mImageList.push({
                  url: image.url,
                  time: image.time.getTime()
                })

                mOffset = image.time.getTime()
                lastIndex = i
                currentNumberOfImage++
              } else {
                break
              }
            }
          }

          if (currentNumberOfImage < 14 || lastIndex == 0) {
            mOffset = -2
          }

          next({
            offset: mOffset,
            status: 'success',
            listImage : mImageList
          })
        } else {
          next({
            offset,
            status: 'failed',
            banned: true,
            reason: user.reason,
            listImage: []
          })
        }
      }
  })
}

export const getNotifications = (id, offset, length, next) => {
  User.findOne({ id }, (err, user) => {
    if (err || !user) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'noData',
          offset,
          notifications: []
        })
      }
    } else {
      const { notifications } = user
      const mNotifications = []
      let currentNumberOfNotification = 0, mOffset = -2, lastIndex = -1
      for (let i = notifications.length - 1; i >= 0; i--) {
        let notification = notifications[i]
        if (notification.time < offset) {
          if (currentNumberOfNotification < length) {
            mNotifications.push(getClientFormatNotification(notification))

            mOffset = notification.time.getTime()
            lastIndex = i
            currentNumberOfNotification++
          } else {
            break
          }
        }
      }

      if (lastIndex == 0) {
        mOffset = -2
      }

      user.numberOfUnRead = 0
      user.save(() => {})

      next({
        status: 'success',
        numUnreaded: user.numberOfUnRead,
        offset: mOffset,
        notifications: mNotifications
      })
    }
  })
}

export const updateNotification = (id, notificationId, next) => {
  User.findOne({ id }, (err, user) => {
    if (err || !user) {
      if(err) {
        next('failed')
      } else {
        next('noUserData')
      }
    } else {
      const { notifications } = user
      if (notifications) {
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i]._id == notificationId) {
            notifications[i].isRead = 1
            break
          }
        }
        user.notifications = notifications
        user.save(() => {})
      }
      next('success')
    }
  })
}

export const getInterests = (id, offset, next) => {
  User.findOne({ id }, (err, user) => {
    if (err || !user) {
      if(err) {
        next({ status: 'failed' })
      } else {
        next({ status: 'noUserData' })
      }
    } else {
      let { interests } = user
      if (!interests) {
        interests = []
      }
      const mInterests = []
      let currentNumberOfInterest = 0, mOffset = -2, lastIndex = -1
      for (let i = notifications.length - 1; i >= 0; i--) {
        let interest = interests[i]
        if (notification.time < offset) {
          if (currentNumberOfInterest < 10) {
            mInterests.push({
              id: interest.id,
              categoryId: interest.categoryId,
              categoryName: interest.categoryName,
              longitude: interest.longitude,
              latitude: interest.latitude,
              time: interest.time.getTime()
            })

            mOffset = interest.time.getTime()
            lastIndex = i
            currentNumberOfInterest++
          } else {
            break
          }
        }
      }

      if (lastIndex == 0) {
        mOffset = -2
      }
      next({
        status: 'success',
        offset: mOffset,
        numberOfInterest: interests.length,
        interests: mInterests
      })
    }
  })
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}
