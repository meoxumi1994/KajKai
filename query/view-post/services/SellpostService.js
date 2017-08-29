import { Sellpost, Postrow, BasicUser } from '../models'
import { getClientFormatPostrows } from './PostrowService'
import { getClientFormatSellpostComments } from './CommentService'
import { getBlackListFromSellpostId, getBlackListFromStoreId } from './BlockService'
import { getNotifySellposts } from './FollowService'
import jwt from 'jsonwebtoken'

export const getSellpost = (ok, targetId, requesterId, id, next) => {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (err || !sellpost) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          id
        })
      }
    } else {
      Postrow.find({ sellpostId: id }, (err, postrows) => {
        if (postrows) {
          sellpost.postrows = postrows
        } else {
          sellpost.postrows = []
        }
        getBlackListFromSellpostId(id, (blackList) => {
          getNotifySellposts(requesterId, (notifySellposts) => {
            if (targetId) {
              let { targetStatus, ...data } = getClientFormatSellpost(ok, targetId, notifySellposts, blackList, requesterId, sellpost, Date.now())
              next({
                status: targetStatus,
                sellpost: targetStatus == 'success' ? data : null
              })
            } else {
              next({
                status: 'success',
                sellpost: getClientFormatSellpost(ok, targetId, notifySellposts, blackList, requesterId, sellpost, Date.now())
              })
            }
          })
        })
      })
    }
  })
}

export const getSellposts = (ok, requesterId, storeId, offset, next) => {
  Sellpost.find({ storeId }, (err, sellposts) => {
    if (err || !sellposts) {
      if(err) {
        next(null)
      } else {
        next({
          status: 'nodata',
          offset,
          storeid: storeId,
          sellposts: []
        })
      }
    } else {
      getBlackListFromStoreId(storeId, (blackList) => {
        getNotifySellposts(requesterId, (notifySellposts) => {
          getClientFormatSellposts(ok, notifySellposts, blackList, requesterId, storeId, sellposts, offset, next)
        })
      })
    }
  })
}

export const getUserSellposts = (requesterId, userId, offset, next) => {
  BasicUser.findOne({ id: userId }, (err, basicUser) => {
    if (basicUser) {
      let { followingSellposts } = basicUser
      if (!followingSellposts) {
        followingSellposts = []
      }
      let mPromises = []
      for (let i = 0; i < followingSellposts.length; i++) {
        mPromises.push(new Promise((resolve, reject) => {
          Sellpost.findOne({ id: followingSellposts[i] }, (err, sellpost) => {
            if (sellpost) {
              resolve(sellpost)
            } else {
              resolve(null)
            }
          })
        }))
      }
      Promise.all(mPromises).then((result) => {
        let sellposts = []
        result.map((sellpost) => {
          if (sellpost) {
            sellposts.push(sellpost)
          }
        })
        sellposts.sort((s1, s2) => (s1.time - s2.time))
        const mSellposts = []
        let currentNumberOfSellpost = 0, mOffset = -2, lastIndex = -1
        for (let i = sellposts.length - 1; i >= 0; i--) {
          let sellpost = sellposts[i]
          if (sellpost.time < offset) {
            if (currentNumberOfSellpost < 2) {
              mSellposts.push({
                sellpostid: sellpost.id,
                storeid: sellpost.storeId
              })

              mOffset = sellpost.time.getTime()
              lastIndex = i
              currentNumberOfSellpost++
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
          data: mSellposts
        })

      }, (err) => {
        console.log('error promise', err)
        next(null)
      })
    } else {
      if (err) {
        next(null)
      } else {
        next({
          status: 'noUserData',
          offset,
          sellposts: []
        })
      }
    }
  })
}

export const getNearBy = (id, type, next) => {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (sellpost) {
      Sellpost.find({ storeId: sellpost.storeId }, (err, sellposts) => {
        if (sellposts) {
          const mPromises = [], sellpostById = {}
          let sellpostList = [], hasImage = []
          sellposts.map((sellpost, index) => {
            sellpostById[sellpost.id] = index
            sellpostList.push(sellpost.id)
            hasImage.push(false)
          })

          sellposts.map((sellpost) => {
            mPromises.push(new Promise((resolve, reject) => {
              Postrow.find({ sellpostId: sellpost.id }, (err, postrows) => {
                if (postrows) {
                  let flag = false
                  let { images, products } = postrow
                  if (images && images.length > 0) {
                    flag = true
                  }
                  if (products) {
                    for (let i = 0; i < products.length; i++) {
                      if (products[i].imageUrl) {
                        flag = true
                        break
                      }
                    }
                  }
                  hasImage[sellpostById[sellpost.id]] = flag
                  resolve(postrows)
                } else {
                  reject(err)
                }
              })
            }))
          })
          Promise.all(mPromises).then((postrowses) => {
              let imagaleSellposts = []
              let start = -1
              for (let i = 0; i < sellpostList.length; i++) {
                let sellpostId = sellpostList[i]
                if (hasImage[sellpostId] || sellpostId == id) {
                  if (sellpostId == id) {
                    start = imagaleSellposts.length
                  }
                  imagaleSellposts.push(sellpostId)
                }
              }
              let n = imagaleSellposts.length
              if (n == 0 || n == 1 || start == -1) {
                next(id)
              } else {
                if (type == 'next') {
                  if (start < n - 1) {
                    next(imagaleSellposts[start + 1])
                  } else {
                    next(imagaleSellposts[0])
                  }
                } else {
                  if (start > 0) {
                    next(imagaleSellposts[start - 1])
                  } else {
                    next(imagaleSellposts[n - 1])
                  }
                }
              }
            }, err => {
              next(id)
            })
        } else {
          next(id)
        }
      })
    } else {
      next(id)
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

const getClientFormatSellposts = (ok, notifySellposts, blackList, requesterId, storeId, sellposts, offset, next) => {
  const mPromises = [], sellpostById = {}
  sellposts.map((sellpost, index) => {
    sellpostById[sellpost.id] = index
  })
  sellposts.map((sellpost) => {
    mPromises.push(new Promise((resolve, reject) => {
      Postrow.find({ sellpostId: sellpost.id }, (err, postrows) => {
        if (postrows) {
          sellposts[sellpostById[sellpost.id]].postrows = postrows
          resolve(postrows)
        } else {
          reject(err)
        }
      })
    }))
  })
  Promise.all(mPromises).then((postrowses) => {
      sellposts.map((sellpost, index) => {
        let mComments = []
        let { comments } = sellpost
        if (!blackList) {
          blackList = []
        }
        comments.map((comment) => {
          if (blackList.indexOf(comment.commenterId) == -1) {
            mComments.push(comment)
          }
        })
        sellpost.comments = mComments
        sellposts[index] = sellpost
      })
      const mSellposts = []
      let currentNumberOfSellpost = 0, mOffset = -2, lastIndex = -1
      for (let i = sellposts.length - 1; i >= 0; i--) {
        let sellpost = sellposts[i]
        if (sellpost.time < offset) {
          if (currentNumberOfSellpost < 2) {
            mSellposts.push(getClientFormatSellpost(ok, null, notifySellposts, blackList ,requesterId, sellpost, Date.now()))

            mOffset = sellpost.time.getTime()
            lastIndex = i
            currentNumberOfSellpost++
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
        storeid: storeId,
        sellposts: mSellposts
      })
    }, err => {
      console.log('error promise', err)
      next({
        status: 'failed',
        offset: mOffset,
        storeid: storeId,
        sellposts: []
      })
    })
}

const getClientFormatSellpost = (ok, targetId, notifySellposts, blackList, requesterId, sellpost, offset) => {
  let { postrows, comments } = sellpost

  let { followers } = sellpost
  if (!followers) {
    followers = []
  }
  let follows = []

  if (requesterId == 'Guest') {
    follows = followers.slice(0, 5).map((follower) => ({
      userid: follower.userId,
      username: follower.username
    }))
  } else {
    for (let i = 0; i < followers.length; i++) {
      let follower = followers[i]
      if (follower.userId == requesterId) {
        follows.push({
          userid: follower.userId,
          username: follower.username
        })
        break
      }
    }

    for (let i = 0; i < followers.length && follows.length < 5; i++) {
      let follower = followers[i]
      if (follower.userId != requesterId) {
        follows.push({
          userid: follower.userId,
          username: follower.username
        })
      }
    }
  }

  let { likers } = sellpost
  if (!likers) {
    likers = []
  }
  let likes = []

  if (requesterId == 'Guest') {
    likes = likers.slice(0, 5).map((liker) => ({
      userid: liker.userId,
      username: liker.username,
      storeid: liker.storeId,
      storename: liker.storeName,
      avatarUrl: liker.avatarUrl,
      id: liker.userId ? liker.userId : liker.storeId,
      name: liker.username ? liker.username : liker.storeName
    }))
  } else {
    for (let i = 0; i < likers.length; i++) {
      let liker = likers[i]
      if (liker.userId == requesterId) {
        likes.push({
          userid: liker.userId,
          username: liker.username,
          storeid: liker.storeId,
          storename: liker.storeName,
          avatarUrl: liker.avatarUrl,
          id: liker.userId ? liker.userId : liker.storeId,
          name: liker.username ? liker.username : liker.storeName
        })
        break
      }
    }

    for (let i = 0; i < likers.length && likers.length < 5; i++) {
      let liker = likers[i]
      if (liker.userId != requesterId) {
        likes.push({
          userid: liker.userId,
          username: liker.username,
          storeid: liker.storeId,
          storename: liker.storeName,
          avatarUrl: liker.avatarUrl,
          id: liker.userId ? liker.userId : liker.storeId,
          name: liker.username ? liker.username : liker.storeName
        })
      }
    }
  }

  if (!comments) {
    comments = []
  }

  let mComments = []

  comments.map((comment) => {
    if (blackList.indexOf(comment.commenterId) == -1) {
      mComments.push(comment)
    }
  })

  let { status, ...data } = getClientFormatSellpostComments(ok, targetId, blackList, requesterId, mComments, offset, 'done', true, null)

  return ({
    id: sellpost.id,
    turnnotify: notifySellposts.indexOf(sellpost.id) != -1,
    storeid: sellpost.storeId,
    urlname: sellpost.urlName,
    storename: sellpost.storeName,
    avatarUrl: sellpost.avatarUrl,
    category: sellpost.category ? sellpost.category : '',
    title: sellpost.title ? sellpost.title : '',
    description: sellpost.description ? sellpost.description: '',
    time: sellpost.time.getTime(),
    status: sellpost.storeState ? sellpost.storeState : '',
    ship: sellpost.shipStatus ? sellpost.shipStatus : '',
    postrows_order: sellpost.postrowsOrder ? sellpost.postrowsOrder : [],
    ...getClientFormatPostrows(postrows, -1),
    numlike: sellpost.numberOfLike ? sellpost.numberOfLike : 0,
    likestatus: ['like'],
    likes,
    numfollow: sellpost.numberOfFollow ? sellpost.numberOfFollow : 0,
    follows,
    numleadercomment: mComments.length,
    numshare: sellpost.numberOfShare ? sellpost.numberOfShare : 0,
    ...data
  })
}
