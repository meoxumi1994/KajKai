GET /user/:id {
    username: 'charity',
    email: 'prominh@gmail.com',
    avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
    coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
    address: undefined,
    phone: undefined,
    language: 'vi|en',
    sex: 'MALE|FEMALE',
    yearOfBirth: '6462636',
    lastUpdate: {
        username: ,
        phone: ,
        address: ,
    },
    blacklist: [{
        id:,
        type: 'userid|storeid|mesid',
        name: ,
    }],
}

GET /privacy/user/:id {
    address_email_phone: 'comment_store|no_one',
    another: 'yes|no'
}

POST /user {
    username: ,
    email: 'prominh@gmail.com',
    password:
},{
    status: 'success|used|error'
}

PUT /user { // tat ca cac gia tri co the undefined, thang nao co thi update
    username: 'charity',
    avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
    coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
    address: undefined,
    language: 'vi|en',
    sex: 'MALE|FEMALE',
    yearOfBirth: '6462636',
    lastUpdate: {
        username: ,
        phone: ,
        address: ,
    }
},{
    status: 'failed|success',
}

PUT /password {
    password: '123456',
    newpassword: '654321',
},{
    status: 'failed|success',
}

PUT /phone/user {
    code: '1234', // code == undefined is need get verifi-code
    phone: '0987654321'
},{
    status: 'pending|used|error|success',
}

PUT /blacklist { // blockid co thi delete ko co thi add
    blockid: ,
    idtype: 'storeid|userid|mesid' ,
},{
    blockid: ,
    idtype: 'storeid|userid|mesid' ,
    name: , // name of blockid
}

POST /login {
    phone: '',                              //
    email: 'thiennvtse90219@fpt.edu.vn',    // email hoac phone co the undefined
    password: '123456',
},{
    username: 'charity',
    avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
    coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
    address: undefined,
    phone: undefined,
    language: 'vi|en',
    sex: 'MALE|FEMALE',
    yearOfBirth: '6462636',
    lastUpdate: {
        username: ,
        phone: ,
        address: ,
    },
    blacklist: [{
        id:,
        type: 'userid|storeid|mesid',
        name: ,
    }],
}

POST /loginfacebook {
    tokenId: 'djhkayr389rbqcfacebook3bqkvrtq39ry3xbr92ycr2r9'
},{
    username: 'charity',
    avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
    coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
    address: undefined,
    phone: undefined,
    language: 'vi|en',
    sex: 'MALE|FEMALE',
    yearOfBirth: '6462636',
    lastUpdate: {
        username: ,
        phone: ,
        address: ,
    },
    blacklist: [{
        id:,
        type: 'userid|storeid|mesid',
        name: ,
    }],
}
POST /logingoogle {
    tokenId: 'djhkayr389rbqcfrgooglebqkvrtq39ry3xbr92ycr2r9'
},{
    username: 'charity',
    avatarUrl: 'https://d1z4p30mgj29.cloudfront.net/abcxyz.png',
    coverUrl: 'https://d1z4p30mgj29.cloudfront.net/xyzabc.png',
    address: undefined,
    phone: undefined,
    language: 'vi|en',
    sex: 'MALE|FEMALE',
    yearOfBirth: '6462636',
    lastUpdate: {
        username: ,
        phone: ,
        address: ,
    },
    blacklist: [{
        id:,
        type: 'userid|storeid|mesid',
        name: ,
    }],
}


GET /logout {
    status: 'success|failed'
}

GET /store/:id {
  id: , //store id
  userid: ,//owner
  storename: 'Forest',
  avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
  coverUrl: 'https://tshirtstoreonline.com/client/tshirtstore/dynamic/articles/tshirt-store-guildford-view-3_4421.png',
  lastUpdate: {
      storename: ,
      phone: ,
      addressMap:,
      address: ,
  }
  address: ,
  addressMap: ['phuong tan an', 'tp buon ma thuot', 'daklak', 'vietnam'],
  category: ,
  categoryAuto: {
      id: ,
      name: ,
  },
  latitute: '1423424',
  longitute: '453535',
  phone: '01655791025',
  certificates: {
      images: [],
      content: ,
  },
  numlike: '23',
  likes: [
    {
      avatarUrl: ,// small size 20x20
      userid: ,
      username: ,
    },
  ], // tối đa 5 thằng linh tinh
  numfollow: '43',
  follows: [
    {
      avatarUrl: // small size 20x20
      userid:
      username:
    },
  ], // tối đa 5 thằng
}

POST /store {
    userid: ,//owner
    storename: 'Forest',
    avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
    coverUrl: 'https://tshirtstoreonline.com/client/tshirtstore/dynamic/articles/tshirt-store-guildford-view-3_4421.png',
    address: ,
    addressMap: ['phuong tan an', 'tp buon ma thuot', 'daklak', 'vietnam'],
    category: ,
    categoryAuto: {
        id: ,
        name: ,
    },
    latitute: '1423424',
    longitute: '453535',
    phone: '01655791025',
    certificates: { // co the null
        images: [],
        content: ,
    },
}

PUT /store {
  id: , //store id
  storename: 'Forest',
  avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
  coverUrl: 'https://tshirtstoreonline.com/client/tshirtstore/dynamic/articles/tshirt-store-guildford-view-3_4421.png',
  lastUpdate: {
      storename: ,
      phone: ,
      addressMap:,
      address: ,
  }
  address: ,
  addressMap: ['phuong tan an', 'tp buon ma thuot', 'daklak', 'vietnam'],
  category: ,
  categoryAuto: {
      id: ,
      name: ,
  },
  latitute: '1423424',
  longitute: '453535',
  phone: '01655791025',
  certificates: {
      images: [],
      content: ,
  },
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
      ship: '', // store viết vào có thể un
      postrows_order: [],
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
    },
  ],
}

GET /sellpost/:id {
    storeid: ,
    storename: ,
    category: ,
    title: ,
    description: ,
    time: , // last update
    status: 'notyet|open|sleep',
    ship: '', // store viết vào có thể un
    postrows_order: [],
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
}

PUT /sellpost {
    category: ,
    title: ,
    description: ,
    time: , // last update
    status: 'notyet|open|sleep',
    ship: '', // store viết vào có thể un
    postrows_order: [],
}

POST /sellpost {
  storeid: ,
  category: ,
  title: ,
  description: ,
  time: , // last update
  status: 'notyet|open|sleep',
  ship: '', // store viết vào có thể un
}

DELETE /sellpost {
    storeid:
    sellpostid:
}

POST /postrows {
    sellpostid: ,
    content: ,
    numline: , // numline of row <= 30
    images: [
    // list of imageUrl
    ], // textimage|imagetext|groupimage
    titles_order: [],
    titles: [ // for product|listproduct otherwise  null

    ],
    products_order: [],
    products: [ // for product|listproduct otherwise  null
        {
          content: ,
          imageUrl: , // 20x20
          list: [],
        },
    ],
    type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
}

PUT /postrows {
    id: ,
    content: ,
    numline: , // numline of row <= 30
    images: [
    // list of imageUrl
    ], // textimage|imagetext|groupimage
    titles_order: [],
    titles: [ // for product|listproduct otherwise  null

    ],
    products_order: [],
    type: 'title|normal|product|listproduct|textimage|imagetext|groupimage',
}

DELETE /postrows {
    sellpostid: ,
    postrows_order: [],
    id: ,
}

POST /postrows/product {
    sellpostid:
    postrowsid:
    product: {
      content: ,
      imageUrl: , // 20x20
      list: [],
    },
}

PUT /postrows/product {
    sellpostid:
    postrowsid:
    product: {
      content: ,
      imageUrl: , // 20x20
      list: [],
    },
}

DELETE /postrows/product {
    sellpostid:
    postrowsid:
    products_order: []
    productid:
}



GET /postrow/:sellpostid?offset=-1 { // numline = 30
    offset: ,
    postrow: [
        {
          sellpostid:,
          id: , //
          content: ,
          numline: , // numline of row <= 30
          images: [
            // list of imageUrl
          ], // textimage|imagetext|groupimage
          titles: [ // for product|listproduct otherwise  null

          ],
          products_order: [],
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
    ]
}

GET /minorpost/:storeid?offset=-1 { // length = 3
  offset: ,
  minorposts: [ // lay 200 ky tu dau tien cua content
    {
      id: ,
      numline: , // numline chi lien quan den content
      storeid: ,
      time: , // last update
      content:,
      images: [], //
      video: ,
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
              ownerid: , // null
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

GET /content/:minorpostid {
    content: '', // lay phan con lai cua content
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

GET /chatlist?offset=offset&length=length: {
    data: [
      {
        mesId: '',
        lastMessage: {
          id: '',                // Sender id
          time: '',
          message: {
            text: '',
            type: '',
            url: ''
          }
        },
        groupName: '',
        time: '',
        users: [
          {
            avatarUrl: '',
            id: '',
            name: '',
          }
        ]
      }
    ]
}

GET /messages/:mesid?offset=offset&length=length {
  mesId: '',
  messages: [
    {
      message: {
        text: '',
        url: '',
        type: ''
      },
      time: ''
    }
  ]
}

GET /search/user?text='char' {
    users: [
        {
            id: '',
            avatarUrl: '',
            name: ''
        }
    ]
}

GET /comment/like {
    commentid: // co the undefined
    leadercommentid: // co the undefined
    likes: [
        name
    ]
}
