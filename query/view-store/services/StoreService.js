import { Store } from '../models'
import { checkInside } from '../utils'
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
            next({
              status: 'success',
              store: getClientFormatStore(store)
            })
        }
    })
}

export const getStores = (swlat, swlng, nelat, nelng, length, next) => {
  Store.find({}, (err, stores) => {
    if (err || !stores) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          stores: []
        })
      }
    } else {
      let mStores = []
      for (let i = 0; i < stores.length; i++) {
        let store = stores[i]
        let { latitude, longitude } = store
        if (latitude && longitude) {
          if (checkInside(latitude, longitude, swlat, swlng, nelat, nelng)) {
            if (!store.numberOfFollow) {
              store.numberOfFollow = 0
            }
            if (!store.numberOfLike) {
              store.numberOfLike = 0
            }
            mStores.push(store)
          }
        }
      }

      mStores.sort((s1, s2) => ((2 * s2.numberOfFollow + s2.numberOfLike) - (2 * s1.numberOfFollow + s1.numberOfLike)))
      mStores = mStores.slice(0, length)

      next({
        status: 'success',
        stores: mStores.map((store) => getClientFormatStore(store))
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

const getClientFormatStore = (store) => {
  const { lastUpdate } = store

  return ({
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
      lat: store.latitude,
      lng: store.longitude,
    },
    certificates: store.certificates,
    numlike: store.numberOfLike ? store.numberOfLike : 0,
    likes: store.likers ? store.likers.slice(0, 5) : [],
    numfollow: store.numberOfFollow ? store.numerOfFollow : 0,
    follows: store.followers ? store.followers.slice(0, 5) : [],
  })
}
