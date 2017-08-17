import { Store, BasicUser } from '../models'
import { checkInside } from '../utils'
import jwt from 'jsonwebtoken'

export const getStore = (requesterId, id, next) => {
    Store.findOne({ urlName: id },  (err, store) => {
        if (err || !store) {
          if(err) {
            next(null)
          } else {
            Store.findOne({ id }, (err, store) => {
              if (store) {
                BasicUser.findOne({ id: store.userId }, (err, basicUser) => {
                  if (basicUser) {
                    if (!basicUser.banned || basicUser.banned == 0) {
                      next({
                        status: 'success',
                        store: getClientFormatStore(requesterId, store)
                      })
                    } else {
                      next({
                        status: 'failed',
                        banned: true,
                        reason: basicUser.reason,
                        store: {}
                      })
                    }
                  } else {
                    next({
                      status: 'noUserData',
                      store: {
                        id
                      }
                    })
                  }
                })
              } else {
                next({
                  status: 'noStoreData',
                  store: {
                    id
                  }
                })
              }
            })
          }
        } else {
          BasicUser.findOne({ id: store.userId }, (err, basicUser) => {
            if (basicUser) {
              if (!basicUser.banned || basicUser.banned == 0) {
                next({
                  status: 'success',
                  store: getClientFormatStore(requesterId, store)
                })
              } else {
                next({
                  status: 'failed',
                  banned: true,
                  reason: basicUser.reason,
                  store: {}
                })
              }
            } else {
              next({
                status: 'noUserData',
                store: {
                  id
                }
              })
            }
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

export const getStoreImageList = (requesterId, id, offset, next) => {
  Store.findOne({ id }, (err, store) => {
      if (err || !store) {
        if(err) {
          next(null)
        } else {
          next({
            status: 'nodata',
            listImage: []
          })
        }
      } else {
        BasicUser.findOne({ id: store.userId }, (err, basicUser) => {
          if (basicUser) {
            if (!basicUser.banned || basicUser.banned == 0) {
              let { imageList } = store
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
                reason: basicUser.reason,
                listImage: []
              })
            }
          } else {
            next({
              status: 'noUserData',
              listImage: []
            })
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

const getClientFormatStore = (requesterId, store) => {
  const { lastUpdate } = store
  let { followers } = store
  if (!followers) {
    followers = []
  }
  let follows = []

  if (requesterId == 'Guest') {
    follows = followers.slice(0, 5)
  } else {
    for (let i = 0; i < followers.length; i++) {
      let follower = followers[i]
      if (follower.userId == requesterId) {
        follows.push({
          userid: follower.userId,
          username: follower.username,
          avatarUrl: follower.avatarUrl
        })
        break
      }
    }

    for (let i = 0; i < followers.length && follows.length < 5; i++) {
      let follower = followers[i]
      if (follower.userId != requesterId) {
        follows.push({
          userid: follower.userId,
          username: follower.username,
          avatarUrl: follower.avatarUrl
        })
      }
    }
  }

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
    numfollow: store.numberOfFollow ? store.numberOfFollow : 0,
    follows
  })
}
