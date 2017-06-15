GET /user {
    username: 'charity',
    imageUrl: '',
    address: undefined,
    phone: undefined,
}
POST /user {
    username : 'chairty',
    email: 'thiennvtse90219@fpt.edu.vn',
    password: '123456',
},{
    status: 'success|used|error'
}
PUT /user {
  username: 'charity',
  avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
  coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
  address: '47 Cầu Giấy, Hà Nội',
  language: 'TIếng Việt',
  sex: 'gay',
  yearOfBirth: '6462636'
},{
    status: 'failed|success'
}
PUT /user/password {
    password: '123456',
    newpassword: '654321',
},{
    status: 'failed|success',
}
PUT /user/phone {
    phone: '0987654321'
},{
    status: 'pending|used|error'
}
POST /user/login {
    email: 'thiennvtse90219@fpt.edu.vn',
    password: '123456',
},{
    username: 'charity',
    imageUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
    address: '47 Cầu Giấy, Hà Nội',
    phone: '0123456789',
}
POST /user/loginfacebook {
    tokenId: 'djhkayr389rbqcfacebook3bqkvrtq39ry3xbr92ycr2r9'
},{
    tokenId: undefined,
    username: undefined,
    imageUrl: undefined,
    address: undefined,
    phone: undefined,
}
POST /user/logingoogle {
    tokenId: 'djhkayr389rbqcfrgooglebqkvrtq39ry3xbr92ycr2r9'
},{
    username: undefined,
    imageUrl: undefined,
    address: undefined,
    phone: undefined,
}
GET /user/logout {
},{
}
GET /store/:id {
  id: , //store id
  userid: ,//owner
  storename: 'Forest',
  avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
  coverUrl: 'https://tshirtstoreonline.com/client/tshirtstore/dynamic/articles/tshirt-store-guildford-view-3_4421.png',
  address: 'fpt university',
  category: 'shirt',
  latitute: '1423424',
  longitute: '453535',
  phone: '01655791025',
  numlike: '23',
  likes: [
    {
      avatarUrl: ,// small size 20x20
      userid: ,
      username: ,
    },
  ], // tối đa 5 thằng bạn
  numfollow: '43',
  follows: [
    {
      avatarUrl: // small size 20x20
      userid:
      username:
    },
  ], // tối đa 5 thằng bạn
}
GET /sellpost/:storeid?offset=-1 { // length = 2
  offset: ,
  storeid: ,
  sellposts: [
    {
      id: ,
      storeid: ,
      storename: ,
      category: ,
      title: ,
      description: ,
      time: , // last update
      status: 'notyet|open|sleep',
      ship: '', // store viết vào có thể null
      postrows: [ // tables lấy những thằng đầu có tổng hàng <= ???, nếu quá nửa thằng cuối thì trả về cả thằng cuối
        {
          sellpostid:,
          id: , //
          content: ,
          length: ,
          images: [
            // list of imageUrl
          ], // textimage|imagetext|groupimage
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
          id: 'leadercomment001',
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
    },
  ],
}
GET minorpost/:id?offset=-1 { // length = 3
  offset: ,
  minorposts: [
    {
      id: ,
      storeid: ,
      storename: ,
      category: ,
      title: ,
      description: ,
      time: , // last update
      status: 'notyet|open|sleep',
      ship: '', // store viết vào có thể null
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
          id: 'leadercomment001',
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
    },
  ],

}
GET /product/:id {
  id: ,
  postrowid: ,
  imageUrl: ,
  content: ,
  list: [],
  totalnum: // số lần được gọi trong leadercomment
}

POST /store/:id {
  storename: 'Táo Tàu',
  address: '47 Cầu Giáy, Hà Nội',
  phone: '0123456789',
  category: 'hoa quả táo Việt',
  longitude: '424242',
  latitude: '536363',
},{
    status: 'success|error'
}

GET /post/:id {

}
