let user = [
    {
        id: '5933bda8d5e8f76039403e06',
        username: 'Duc Minh',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/s200x200/10354686_10150004552801856_220367501106153455_n.jpg?oh=9fd397c48503bf5c5946134de4d111ee&oe=59B05050',
        phone: '01655791021',
        address: '163 le quy don, daklak',
        age: 24,
    }
]

let store = [
    {
        userid: '5933bda8d5e8f76039403e06',
        id: 'store001',
        storename: 'Forest',
        avatarUrl: 'http://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/54444/_DSC3158.jpg',
        coverUrl: 'https://tshirtstoreonline.com/client/tshirtstore/dynamic/articles/tshirt-store-guildford-view-3_4421.png',
        address: 'fpt university',
        category: 'shirt',
        latitude: 1,
        longitude: 1,
        phone: '01655791025',
    }
]

let product = [
    {
        id: 'product001',
        list: ['Ao kem', '100k'],
        detail: {
            content: 'Ao kem voi loai vai chat luong, ben lau, khong hong',
            image: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_67_146209?$pdp-medium$',
        }
    },
    {
        id: 'product002',
        list: ['So mi trong nang', '150k'],
        detail: {
            content: 'Ao so mi trong nang',
            image: 'https://www.truffleshuffle.co.uk/images_high_res/TS_Mens_Charcoal_Distressed_Superman_Logo_T_Shirt_9_99_HR_1.jpg',
        }
    },
    {
        id: 'product003',
        list: ['So mi sieu nhan', '200k'],
        detail: {
            content: undefined,
            image: 'http://hstatic.net/640/1000004640/1/2016/4-6/do-nonla.png',
        }
    },
    {
        id: 'product004',
        list: ['So mi trang', '135k'],
        detail: {
            content: 'so mi khong bi o mau nhe moi nguoi',
            image: 'https://riverisland.scene7.com/is/image/RiverIsland/293140_main?$CrossSellProductPage300$',
        }
    },
    {
        id: 'product005',
        list: ['So mi den', '300k'],
        detail: {
            content: 'so mi den loai 1 nhe moi nguoi, fake doi lai',
            image: 'http://www.sunspel.com/media/catalog/product/cache/3/image/1800x/040ec09b1e35df139433887a97daa66f/4/0/4001_102_5_3.jpg',
        }
    },
    {
        id: 'product006',
        list: ['T-shirt xam', '99k'],
        detail: {
            content: 'T-shirt xam dam bao chat luong',
            image: 'https://image.spreadshirtmedia.com/image-server/v1/productTypes/815/views/1/appearances/231,width=300,height=300,backgroundColor=ffffff.jpg',
        }
    }
]

let postrow = [
    {
        sellpostid: '',
        id: 'postrow001',
        content: 'T-shirt hang moi nha cac ban',
        type: 'title',
    },
    {
        id: 'postrow002',
        content: 'hang moi nhap tu ThaiLan rat hap dan, moi nguoi vao mua ung ho cua hang nhe, thank moi nguoi nhieu',
        type: 'normal',
    },
    {
        id: 'postrow003',
        products: ['product001','product002'],
        type: 'product',
    },
    {
        id: 'postrow004',
        content: 'Tat ca san pham',
        type: 'title',
    },
    {
        id: 'postrow005',
        products: ['product001','product002','product003','product004','product005','product006',],
        type: 'listproduct',
    },
    {
        id: 'postrow006',
        content: 'Forest dam bao chat luong cua san pham, mau ma tot, re',
        images: [
            'https://www.customink.com/mms/images/catalog/styles/297300/catalog_detail_image_large.jpg',
            'http://img.romwe.com/images/goods_img_bak/romwe.com/201603/1457336175378642754.jpg'],
        type: 'textimage',
    },
    {
        id: 'postrow007',
        content: 'G-shirt nhe cac ban',
        type: 'title',
    },
    {
        id: 'postrow008',
        content: 'G-shirt kieu moi, moi nguoi vao ung ho cho shop nhe',
        type: 'content',
    },
    {
        id: 'postrow009',
        content: 'san pham G-shirt dam bao chat luong cho cac ban nhe',
        images: [
            'https://www.customink.com/mms/images/catalog/styles/297300/catalog_detail_image_large.jpg',
            'http://img.romwe.com/images/goods_img_bak/romwe.com/201603/1457336175378642754.jpg'],
        type: 'imagetext',
    }
]

let sellpost = [
    {
        storeid: 'store001',
        id: 'sellpost001',
        category: 'T-shirt',
        title: 'T-shirt from ThaiLan D&G',
        time: 1497355311330,
        isopen: true,
        ship: '500m < ship free nhe',

    },
    {
        storeid: 'store001',
        id: 'sellpost002',
        category: 'G-shirt',
        title: 'G-shirt from England Fn',
    }
]

let minorpost = [
    {
        storeid: 'store001',
        id: 'minorpost001',
        content: 'hello every one, today we have T-shirt size L,M,K \n sale 50%, and ship all fpt-university',
        images: [
            'http://www.shop.climbersagainstcancer.org/ekmps/shops/climbersac/images/men-s-orange-blue-cac-t-shirt-131-p.jpg',
            'https://store.bethsoft.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/e/tee-fo-4logo-front.jpg'],
        time: 1497355311330,
    },
    {
        storeid: 'store001',
        id: 'minorpost002',
        content: 'omg best T-shirt ever :D',
        images: [
            'http://caeinterior.com/wp-content/uploads/2016/03/8954f155-284e-4419-a7c2-210f76b2f736.jpg'],
        time: 1497355312330,
    },
    {
        storeid: 'store001',
        id: 'minorpost003',
        content: 'welcome back to T-shirt Forest, are u ready',
        images: [
            'http://neurosciencenews.com/files/2014/09/Coffee-Life-Heartbeat-Adult-T-Shirt-0.jpg',
            'http://www.decathlon.vn/1397/run-dry-men-s-running-t-shirt-black.jpg',
            'https://4.imimg.com/data4/ME/CO/MY-4126280/corporate-t-shirts-500x500.jpg'],
        time: 1497355313330,
    }
]

let leadercomment = [
    {
        id: 'leadercomment001',
        order: [
            {   productId: 'product002', num: 2 },
            {   productId: 'product003', num: 3 },
        ]
    },
    {
        id: 'leadercomment002',
        order: undefined,
    },
    {
        id: 'leadercomment003',
        order: undefined,
    },
    {
        id: 'leadercomment004',
        order: undefined,
    },
    {
        id: 'leadercomment005',
        order: undefined,
    },
    {
        id: 'leadercomment006',
        order: undefined,
    },
]

let comment = [
    {
        leadercommentid: 'leadercomment001',
        id: 'comment001',
        ownerid: '5933bda8d5e8f76039403e11',
        name: 'Thien Gay',
        avatarUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/04/15/harry-potter-philosophers-stone.jpg',
        content: 'let me size L please',
        time: 1497355313330,
        numlike: 13,
    },
    {
        id: 'comment002',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
    {
        id: 'comment003',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 1,
    },
    {
        id: 'comment004',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 2,
    },
    {
        id: 'comment005',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 3,
    },
    {
        id: 'comment006',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 1,
    },
    {
        id: 'comment007',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
    {
        id: 'comment008',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
    {
        id: 'comment009',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
    {
        id: 'comment010',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
    {
        id: 'comment011',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
    {
        id: 'comment012',
        userid: '5933bda8d5e8f76039403e00',
        name: 'Canh Gay',
        avatar: 'http://anh.eva.vn/upload/4-2013/images/2013-11-05/1383619856-17.jpg',
        content: 'let me size M please',
        time: 1497355310330,
        numlike: 0,
    },
]

const api = {
    who: (body) => ({
        id: '5933bda8d5e8f76039403e06',
        username: 'Duc Minh',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/s200x200/10354686_10150004552801856_220367501106153455_n.jpg?oh=9fd397c48503bf5c5946134de4d111ee&oe=59B05050',
        storeList: store.filter(item => item.userid == '5933bda8d5e8f76039403e06'),
        phone: '01655791021',
        address: '163 le quy don, daklak',
        age: 24,
    }),
    gettarget: (body) => {
        if(body.id.substr(0,5) == 'store'){
            return {
                status: 'success',
                type: 'store',
                store: store.filter(item => item.id == body.id)[0],
            }
        }else{
            return{
                status: 'success',
                type: 'user',
                user: user.filter(item => item.id == body.id)[0],
            }
        }
    },
    getstore: (body) => {
        return {
            status: 'success',
            store: store.filter(item => item.id == body.id)[0],
        }
    },
    getuser: (body) => {
        return{
            status: 'success',
            user: user.filter(item => item.id == body.id)[0],
        }
    },
    getstoresellposts: (body) => {
        const list_sellposts = sellpost.filter(item => item.storeid == body.storeid)
        const offset = (body.offset == -1)? list_sellposts.length : body.offset
        const newoffset = Math.max(0, offset - 1)
        return {
            storeid: body.storeid,
            offset: newoffset,
            sellposts: list_sellposts.slice(newoffset, offset),
        }
    },
    getstoreminorposts: (body) => {
        const list_minorposts = minorpost.filter(item => item.storeid == body.storeid)
        const offset = (body.offset == -1)? list_minorposts.length : body.offset
        const newoffset = Math.max(0, offset - 1)
        return {
            storeid: body.storeid,
            offset: newoffset,
            sellposts: list_sellposts.slice(newoffset, offset),
        }
    }
}

const socket = {
    JOIN_SELL_POST: (data) => {
        return {
        }
    },
    JOIN_MINOR_POST: (data) => {
        return {
            data: {
                id: data.id,
                content: 'hello every one, today we have T-shirt size L,M,K \n sale 50%, and ship all fpt-university',
                time: 213,
            }
        }
    },
    JOIN_GROUPCOMMENTS: (data) => {

    },
}

export const getAPI = (url, body) => {
    console.log(api[url.substr(1)](body))
    return new Promise((resolve, reject) => {
       setTimeout(() => resolve(api[url.substr(1)](body)), 100)
    })
}

export const socketIO = (action, dispatch) => {
    console.log(action.type.substr(7))
}

// getAPI('/loginfacebook', { id: '543b32'}).then((res) => console.log(res))

// flet('/loginfacebook',{
//     tokenId: tokenId
// },{
//     tokenId: undefined,
//     username: undefined,
//     imageUrl: undefined,
//     address: undefined,
//     phone: undefined,
// })
// .then(({ user }) => {
//     console.log(user)
//     if(user.username){
//         dispatch(authData('LOGIN_SUCCESS', user))
//     }else{
//         dispatch(authAction('LOGIN_FAILED'))
//     }
// })
