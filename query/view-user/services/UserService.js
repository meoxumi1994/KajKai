import { User, Address } from '../models'
import jwt from 'jsonwebtoken'

export const getUser = (requesterId, id, next) => {
  User.findOne({ id }, (err, user) => {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            user: {
              id
            }
          })
        }
      } else {
        next({
          status: 'success',
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            avatarUrl: user.avatarUrl,
            coverUrl: user.coverUrl,
            address: user.address,
            phone: user.phone,
            language: user.language,
            sex: user.sex,
            yearOfBirth: user.yearOfBirth,
            lastUpdate: user.lastUpdate,
            blacklist: user.blackList,
            storeList: user.storeList ? (user.storeList.map((basicStore) => ({
              id: basicStore.id,
              storename: basicStore.storeName,
              avatarUrl: basicStore.avatarUrl,
              urlname: basicStore.urlName
            }))) : []
          }
        })
      }
  })
}

export const getUserPrivacy = (id, next) => {
  User.findOne({ id }, (err, user) => {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            user: {
              id
            }
          })
        }
      } else {
          next({
            status: 'success',
            privacy: {
              id: user.id,
              address_email_phone: user.privacy.address_email_phone,
              another: user.privacy.others
            }
          })
      }
  })
}

export const getUserImageList = (requesterId, id, offset, next) => {
  User.findOne({ id }, (err, user) => {
      if (err || !user) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            listImage: []
          })
        }
      } else {
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
                time: image.time
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
