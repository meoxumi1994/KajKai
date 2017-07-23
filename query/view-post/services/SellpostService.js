import { Sellpost, Postrow } from '../models'
import { getClientFormatPostrows } from './PostrowService'
import { getClientFormatSellpostComments } from './CommentService'
import jwt from 'jsonwebtoken'

export const getSellpost = (id, next) => {
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
          sellpost: getClientFormatSellpost(sellpost, Date.now())
        })
      })
    }
  })
}

export const getSellposts = (storeId, offset, next) => {
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
              mSellposts.push(getClientFormatSellpost(sellpost, Date.now()))

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
        console.log('error', err)
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

const getClientFormatSellpost = (sellpost, offset) => {
  const { postrows, comments } = sellpost

  return ({
    id: sellpost.id,
    storeid: sellpost.storeId,
    storename: sellpost.storeName,
    avatarUrl: sellpost.avatarUrl,
    category: sellpost.category,
    title: sellpost.title,
    description: sellpost.description,
    time: sellpost.time.getTime(),
    status: sellpost.storeState,
    ship: sellpost.shipStatus,
    postrows_order: sellpost.postrowsOrder ? sellpost.postrowsOrder : [],
    ...getClientFormatPostrows(postrows, -1),
    numlike: sellpost.numberOfLike ? sellpost.numberOfLike : 0,
    likestatus: ['like','love','haha'],
    likes: sellpost.likers ? sellpost.likers.slice(0, 5).map((liker) => ({
      userid: liker.userId,
      username: liker.username
    })) : null,
    numfollow: sellpost.numerOfFollow ? sellpost.numerOfFollow : 0,
    follows: sellpost.followers ? sellpost.followers.slice(0, 5).map((follower) => ({
      userid: follower.userId,
      username: follower.username
    })) : null,
    numleadercomment: sellpost.numberOfComment ? sellpost.numberOfComment : 0,
    numshare: sellpost.numberOfShare ? sellpost.numberOfShare : 0,
    ...getClientFormatSellpostComments(comments, offset, true)
  })
}
