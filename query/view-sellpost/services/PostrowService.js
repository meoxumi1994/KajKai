import { Sellpost } from '../models'

export const getPostrow = (id, next) {
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
        postrows: [ // tables lấy những thằng đầu có tổng hàng <= 30, nếu quá nửa thằng cuối thì trả về cả thằng cuối
        {
            id: , //
            content: ,
            numline: , // numline of row <= 30
            images: [
            // list of imageUrl
            ], // textimage|imagetext|groupimage
            titles_order: [],
            titles: [ // for product|listproduct otherwise  null

            ],
            products: [ // for product|listproduct otherwise  null
                {
                  id: 'product002',
                  content: ,
                  imageUrl: , // 20x20
                  list: [],
                  totalnum: // số lần được gọi trong leadercomment
                },
            ],
            type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
        },
        ],
        numlike: '23',
        likes: [
        {
          userid: ,
          username: ,
        },
        ], // tối đa 5 thằng bạn
        numfollow: '43',
        follows: [
        {
          userid: ,
          username: ,
        },
        ], // tối đa 5 thằng bạn
        numcomment: ,
        numshare: ,
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

export const getSellposts = (storeId, next) => {

}
