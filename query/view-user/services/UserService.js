import { User, Address } from '../models'
import jwt from 'jsonwebtoken'

export const getUser = (id, next) => {
  User.findOne({ id }, function(err, user) {
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
              avatarUrl: basicStore.avatarUrl
            }))) : []
          }
        })
      }
  })
}

export const getUserPrivacy = (id, next) => {
  User.findOne({ id }, function(err, user) {
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

export const getUserImageList = (id, offset, next) => {
  User.findOne({ id }, function(err, user) {
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
        const { imageList } = user
        const mImageList = []
        let currentNumberOfImage = 0, mOffset = -2
        for (let i = imageList.length - 1; i >= 0; i--) {
          let image = imageList[i]
          if (image.time < offset) {
            if (currentNumberOfImage < 14) {
              mImageList.push(image.url)

              mOffset = image.time
              currentNumberOfImage++
            } else {
              break
            }
          }
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
