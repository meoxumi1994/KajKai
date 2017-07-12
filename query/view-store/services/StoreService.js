import { Store } from '../models'
import jwt from 'jsonwebtoken'

export const getStore = (id, next) => {
    Store.findOne({ urlName: id },  (err, store) => {
        if (err || !store) {
          if(err) {
            next(null)
          } else {
            next({
              status: 'nodata',
              store: {
                id
              }
            })
          }
        } else {
          const { lastUpdate } = store
            next({
              status: 'success',
              store: {
                id: store.id,
                userid: store.userId,
                storename: store.storeName,
                urlname: store.urlName,
                time: store.createdAt,
                avatarUrl: store.avatarUrl,
                coverUrl: store.coverUrl,
                lastUpdate: {
                  storename: lastUpdate.storeName,
                  avatarUrl: lastUpdate.avatarUrl,
                  coverUrl: lastUpdate.coverUrl
                },
                address: store.address,
                addressMap: store.addressMap,
                category: store.category,
                phone: store.phone,
                firstCategoryId: store.firstCategoryId,
                firstCategory: store.firstCategory,
                secondCategoryId: store.secondCategoryId,
                secondCategory: store.secondCategory,
                position: {
                  latitute: store.latitude,
                  longitute: store.longitude,
                },
                certificates: store.certificates,
                numlike: store.likeNumber ? store.likeNumber : 0,
                likes: store.likers ? store.likers.slice(0, 5) : [],
                numfollow: store.numerOfFollow ? store.numerOfFollow : 0,
                follows: store.followers ? store.followers.slice(0, 5) : [],
              }
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
