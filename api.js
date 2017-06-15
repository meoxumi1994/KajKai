/*format id for target
  1. user: 001*
  2. store: 002^
*/
POST /user/register {
    username : 'chairty',
    email: 'thiennvtse90219@fpt.edu.vn',
    password: '123456',
},{
    status: 'success|used|error'
}
POST /user/login {
    email: 'thiennvtse90219@fpt.edu.vn',
    password: '123456'
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
PUT /user/updateuser {
    language: 'Tiếng Việt'
},{
    status: 'failed|success'
}
GET /user/who {
},{
    username: undefined,
    imageUrl: undefined,
    address: undefined,
    phone: undefined,
}
POST /store/registerstore {
    {
      storename: 'Táo Tàu',
      address: '47 Cầu Giáy, Hà Nội',
      phone: '0123456789',
      category: 'hoa quả táo Việt',
      longitude: '424242',
      latitude: '536363'
    },
    longitude: 1,
    latitude: 1,
},{
    status: 'success|error'
}
