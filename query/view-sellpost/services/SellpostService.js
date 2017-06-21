import { Sellpost } from '../models'

export const getSellpost = (id, next) {
  Sellpost.findOne({ id }, (err, sellpost) => {
    if (err) {
      next(null)
    } else {
      next({
        storeid: sellpost.storeId,
        storename: sellpost.storeName,
        category: sellpost.category,
        title: sellpost.title,
        description: sellpost.description,
        time: sellpost.time,
        status: sellpost.storeState,
        ship: sellpost.shipStatus,
        postrows_order: sellpost.postrowOrder,
        postrows: [], // to be continued
        numlike: sellpost.numberOfLike,
        likes: sellpost.likers.slice(0, 5),
        numfollow: sellpost.numerOfFollow,
        follows: sellpost.followers.slice(0, 5),
        numcomment: sellpost.numberOfComment,
        numshare: sellpost.numberOfShare,
        leadercomments: [ // tối đa 2 thằng trong 1 giờ
            {
              id: '7586449578',
              sellpostid: ,
              order: [
                  {
                    id: 'product002',
                    content: ,
                    imageUrl: ,
                    list: [],
                    num: 2
                  },
              ],
              comments: [ // thằng đầu tiền là comment của leader
                {
                  id: ,
                  ownerid: ,
                  leadercommentid: ,//
                  avatarUrl: // small size 20x20
                  name: ,
                  content: ,
                  time: ,
                  numlike: ,
                }
              ]
            }
        ]
      })
    }
  })
}

export const getSellposts = (storeId, offset, next) => {

}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch(err) {
        return null;
    }
}
