import { Sellpost, Postrow, BasicUser } from '../models'
import { getClientFormatPostrows } from './PostrowService'
import { getClientFormatSellpostComments } from './CommentService'
import jwt from 'jsonwebtoken'

export const getSellpost = (requesterId, id, next) => {
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

        next({
          status: 'success',
          sellpost: getClientFormatSellpost(requesterId, sellpost, Date.now())
        })
      })
    }
  })
}

export const getSellposts = (requesterId, storeId, offset, next) => {
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
      getClientFormatSellposts(requesterId, storeId, sellposts, offset, next)
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
        getClientFormatSellposts(requesterId, '', sellposts, offset, next)
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

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}

const getClientFormatSellposts = (requesterId, storeId, sellposts, offset, next) => {
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
    const mSellposts = []
    let currentNumberOfSellpost = 0, mOffset = -2, lastIndex = -1
    for (let i = sellposts.length - 1; i >= 0; i--) {
      let sellpost = sellposts[i]
      if (sellpost.time < offset) {
        if (currentNumberOfSellpost < 2) {
          mSellposts.push(getClientFormatSellpost(requesterId, sellpost, Date.now()))

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

const getClientFormatSellpost = (requesterId, sellpost, offset) => {
  const { postrows, comments } = sellpost

  let { followers } = sellpost
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

  return ({
    id: sellpost.id,
    storeid: sellpost.storeId,
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
    likes: sellpost.likers ? sellpost.likers.slice(0, 5).map((liker) => ({
      userid: liker.userId,
      username: liker.username,
      storeid: liker.storeId,
      storename: liker.storeName,
      avatarUrl: liker.avatarUrl,
      id: liker.userId ? liker.userId : liker.storeId,
      name: liker.username ? liker.username : liker.storeName
    })) : null,
    numfollow: sellpost.numberOfFollow ? sellpost.numberOfFollow : 0,
    follows,
    numleadercomment: sellpost.numberOfComment ? sellpost.numberOfComment : 0,
    numshare: sellpost.numberOfShare ? sellpost.numberOfShare : 0,
    ...getClientFormatSellpostComments(comments, offset, true)
  })
}
