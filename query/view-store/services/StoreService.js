import { Store } from '../models'
import jwt from 'jsonwebtoken'

export const getStore = (id, next) => {
    Store.findOne({ id },  (err, store) => {
        if (err || !store) {
          if(err) {
            next(null)
          } else {
            next({
              id
            })
          }
        } else {
          const { lastUpdate } = store
            next({
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
              numberOfLike: store.likeNumber,
              likes: store.likers ? store.likers.slice(0, 5) : null,
              numfollow: store.numerOfFollow,
              follows: store.followers ? store.followers.slice(0, 5) : null,
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
