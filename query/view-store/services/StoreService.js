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
            next({
              id: store.id,
              userid: store.userId,
              storename: store.storeName,
              avatarUrl: store.avatarUrl,
              coverUrl: store.coverUrl,
              lastUpdate: store.lastUpdate,
              address: store.address,
              addressMap: store.addressMap,
              category: store.category,
              categoryAuto: store.categoryAuto,
              latitute: store.address.latitude,
              longitute: store.address.longitude,
              phone: store.phone,
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
