/*format id for target
  1. user: 001*
  2. store: 002*
  3. post: 003*
*/
GET /user {
},{
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
    password: password,
    newpassword: newpassword,
},{
    status: 'failed|success',
}
PUT /user/phone {
    phone: phone
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
GET /store/:id
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
