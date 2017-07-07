var express = require("express")
var app = express()
var cors = require('cors')
var http = require('http')
var socketIo =  require("socket.io")

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions));

var server = http.Server(app)
var sio = socketIo(server)

let product = [
    {
        postrowid: 'postrow001',
        id: 'product001',
        list: ['Ao kem', '100k'],
        detail: {
            content: 'Ao kem voi loai vai chat luong, ben lau, khong hong',
            image: 'https://www.snickersdirect.co.uk/image/cache/catalog/product-411/2522-0900-200x200.gif',
        }
    },
    {
        postrowid: 'postrow001',
        id: 'product002',
        list: ['So mi trong nang', '150k'],
        detail: {
            content: 'Ao so mi trong nang',
            image: 'https://ae01.alicdn.com/kf/HTB1sl9JKVXXXXarXpXXq6xXFXXXG/Kids-baby-Toddler-Teenage-Big-boys-Clothes-Short-Sleeve-100-Cotton-Striped-T-Shirt-Size-2.jpg_200x200.jpg',
        }
    },
    {
        postrowid: 'postrow001',
        id: 'product003',
        list: ['So mi sieu nhan', '200k'],
        detail: {
            content: undefined,
            image: 'http://www.dhresource.com/200x200/f2/albu/g5/M00/60/B1/rBVaI1lI-b6ABCkYAAGH-B5lsu0058.jpg',
        }
    },
    {
        postrowid: 'postrow001',
        id: 'product004',
        list: ['So mi trang', '135k'],
        detail: {
            content: 'so mi khong bi o mau nhe moi nguoi',
            image: 'https://static2.sdith-images.com/media/wysiwyg/men-blank2.jpg',
        }
    },
    {
        postrowid: 'postrow001',
        id: 'product005',
        list: ['So mi den', '300k'],
        detail: {
            content: 'so mi den loai 1 nhe moi nguoi, fake doi lai',
            image: 'http://www.dhresource.com/200x200s/f2-albu-g5-M00-05-F3-rBVaI1kEc3CAZubOAAI2VDIJUQ8781.jpg/2017-summer-men-women-boy-london-t-shirt.jpg',
        }
    },
    {
        postrowid: 'postrow001',
        id: 'product006',
        list: ['T-shirt xam', '99k'],
        detail: {
            content: 'T-shirt xam dam bao chat luong',
            image: 'http://www.military-print.co.uk/thumbs/200x200/images/user/Deathshead%20t-shirt%20%20reduced.jpg',
        }
    }
]

var user = [
    {
        id: 'user001',
        time: 1499177298038,
        username: 'Pornnappan Pornpenpipat',
        avatarUrl: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.90.720.720/15535065_349275098765663_3988065271083433984_n.jpg?ig_cache_key=MTQwNjk1NDcxMjY5OTQ1MTgwMA%3D%3D.2.c',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: '163 le quy don, daklak',
        storeList: ['store001'],
        age: 24,
    },
    {
        avatarUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/18920193_1939695522976279_4061663005610034505_n.jpg?oh=f66442aa2ca21a1ad4541feabe7b9d38&oe=59A53626",
        id: "593ea5bf0d346a0b68a88a74",
        username: "Long Ly",
        phone: '0989888999',
        address: 'Kham Thien',
        age: 100
    },
    {
        id: 'user003',
        time: 1499177298038,
        username: 'Ho Quynh Nhi',
        avatarUrl: 'http://lh5.googleusercontent.com/-OCkcBXO1NL8/Vfvmn7szzeI/AAAAAAAAZv4/q6477Ufg0_I/s1600/gaixinhxinh.com-nhi-quynh-ho-3.jpg',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: 'hai phong',
        age: 24,
    },
    {
        id: 'user004',
        time: 1499177298038,
        username: 'Mi du',
        avatarUrl: 'http://kenh14cdn.com/zoom/280_175/2017/18319358-10155341077660967-1554452835277664692-o-1494429543888-71-266-700-1272-crop-1494429562469.jpg',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: 'american',
        age: 24,
    },
    {
        id: 'user005',
        time: 1499177298038,
        username: 'Quynh Anh Shin',
        avatarUrl: 'http://img.saobiz.net/d/2015/12/9c62ac46-3a41-4e0b-af6f-f9ea01685dbf_02.jpg',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: 'quynh anh shin',
        age: 24,
    },
    {
        id: 'user006',
        time: 1499177298038,
        username: 'Trinh Trinh',
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',
        coverUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/19225224_1921076431471462_3129926328119034329_n.jpg?oh=ffa56d4ec244aec6cdabf00f4bd06dc2&oe=59CF07F7',
        phone: '01655791021',
        address: '145 cau giay, ha noi',
        age: 14,
    }
]

let postrow =  [
    {
        sellpostid: 'sellpost001',
        id: 'postrow001',
        titles_order: [],
        titles: undefined,
        product_order: ['product001','product002','product003','product004','product005','product005','product006'],
        products: product.filter((item) => item.postrowid == 'postrow001'),
        type: 'product',
    },
    {
        sellpostid: 'sellpost001',
        id: 'postrow002',
        content: "Bắt gặp QUÁN CAFE ĐẸP MỌI GÓC NHÌN hớp hồn mọi đối tượng Địa chỉ: https://goo.gl/di4iFG Gọi món: https://goo.gl/g9i9eE Không gian quán có 3 tầng rất rộng và lung linh. Chọn quán là nơi check-in sống ảo là đỉnh luôn, background cực phong cách luôn đó. Đặc biệt có nhiều bàn dài, thích hợp cho các bạn ghé học nhóm nha. Đồ uống thì cực kì đa dạng, bạn có thể nhờ nhân viên tư vấn 1 chút để đỡ bối rối khi nhìn menu nhé <3.",
        numline: 8,
        type: 'normal',
    },
    {
        sellpostid: 'sellpost001',
        id: 'postrow003',
        images: ['https://media.foody.vn/video/s800x450/foody-1-636060124092136779.jpg',
        'https://media.foody.vn/res/g10/99769/prof/s640x400/foody-mobile-19-2-jpg-570-635507101631026512.jpg',
        'https://media.foody.vn/res/g25/245808/prof/s640x400/foody-mobile-papa-jpg-293-636038559613441086.jpg',
        'https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg'],
        type: 'groupimage',
    }
]

let comment = [
    {
        id: 'comment001',
        ownerid: 'user006',
        leadercommentid: 'leadercomment001',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Trinh Trinh',
        content: 'Cái bánh này A mua cho e. Ăn í 🤗🤗',
        time: 1499169083942,
        numlike: 1,
        likestatus: ['haha'],
    },
    {
        id: 'comment002',
        ownerid: 'user005',
        leadercommentid: 'leadercomment001',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Quynh Anh Shin',
        content: 'Hân Vũ Tuyết Vũ sáng nói bánh này hả 🤤',
        time: 1499169470743,
        numlike: 0,
        likestatus: [],
    },
    {
        id: 'comment003',
        ownerid: 'user005',
        leadercommentid: 'leadercomment001',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Quynh Anh Shin',
        content: 'Be kind to ourself is self respect?',
        time: 1499169470743,
        numlike: 0,
        likestatus: [],
    },
    {
        id: 'comment004',
        ownerid: 'user005',
        leadercommentid: 'leadercomment002',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Quynh Anh Shin',
        content: 'Vũ Thanh Tú quán bữa t ngồi nè m, đẹp lắm ahihi',
        time: 1499169470743,
        numlike: 0,
        likestatus: [],
    },
    {
        id: 'comment005',
        ownerid: 'user006',
        leadercommentid: 'leadercomment002',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Trinh Trinh',
        content: 'Cẩm Tiên Huỳnh tag chơi thôi chứ k có tiền đi 😭',
        time: 1499169083942,
        numlike: 1,
        likestatus: ['haha'],
    },
    {
        id: 'comment006',
        ownerid: 'user006',
        leadercommentid: 'leadercomment003',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Trinh Trinh',
        content: 'Cẩm Tiên Huỳnh tag chơi thôi chứ k có tiền đi 😭',
        time: 1499169083942,
        numlike: 1,
        likestatus: ['haha'],
    },
    {
        id: 'comment007',
        ownerid: 'user006',
        leadercommentid: 'leadercomment004',//
        avatarUrl: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18882247_1915184252060680_6702771417484410787_n.jpg?oh=2f2b84ee21716259569a1dce1b10d9a9&oe=5A034642',// small size 20x20
        name: 'Trinh Trinh',
        content: 'Cẩm Tiên Huỳnh tag chơi thôi chứ k có tiền đi 😭',
        time: 1499169083942,
        numlike: 1,
        likestatus: ['haha'],
    },
]



let leadercomment = [
    {
        sellpostid: 'sellpost001',
        id: 'leadercomment001',
        order: [
            {
                num: 2,
                product: product.filter((item) => item.id == 'product001')[0],
            },
        ],
        numcomment: comment.filter((item) => item.leadercommentid == 'leadercomment001').length,
        comments: comment.filter((item) => item.leadercommentid == 'leadercomment001'),
    },
    {
        sellpostid: 'sellpost001',
        id: 'leadercomment002',
        numcomment: comment.filter((item) => item.leadercommentid == 'leadercomment002').length,
        comments: comment.filter((item) => item.leadercommentid == 'leadercomment002'),
    },
    {
        sellpostid: 'sellpost001',
        id: 'leadercomment003',
        numcomment: comment.filter((item) => item.leadercommentid == 'leadercomment003').length,
        comments: comment.filter((item) => item.leadercommentid == 'leadercomment003'),
    }
]

let sellpost = [
    {
      id: 'sellpost001',
      storeid: 'store001',
      storename: 'Forest',
      avatarUrl: 'https://media.timeout.com/images/102701457/image.jpg',
      category: 'R-shirt',
      title: 'noi tinh hoa hoi tu',
      description: 'Forest dam bao uy tin va chat luong, hang nhap tu Y, gia hop ly',
      time: 1499169083942, // last update
      status: 'notyet|open|sleep',
      ship: 'ship duoi 500 met nhe', // store viết vào có thể un
      postrows_order: ['postrow001','postrow002','postrow003'],
      postrows: postrow.filter((item) => item.sellpostid == 'sellpost001'),
      numlike: '23',
      likestatus: ['like','love','haha'],
      likes: [
        {
            userid: 'user001',
            username: 'Pornnappan Pornpenpipat',
        },
        {
            userid: 'user003',
            username: 'Ho Quynh Nhi',
        },
        {
            userid: 'user004',
            username: 'Mi du',
        }
      ], // tối đa 5 thằng bạn
      numfollow: '43',
      numleadercomment: 24,
      numshare: 3,
      leadercomments: leadercomment.filter((item) => item.ownerid == 'sellpost001')
    },
    {
      id: 'sellpost002',
      storeid: 'store001',
      avatarUrl: 'https://media.timeout.com/images/102701457/image.jpg',
      storename: 'Forest',
      category: 'R-shirt',
      title: 'noi tinh hoa hoi tu',
      description: 'Forest dam bao uy tin va chat luong, hang nhap tu Y, gia hop ly',
      time: 1499169083942, // last update
      status: 'notyet|open|sleep',
      ship: 'ship duoi 500 met nhe', // store viết vào có thể un
      postrows_order: [0,1,2],
      postrows: postrow.filter((item) => item.sellpostid == 'sellpost001'),
      numlike: '23',
      likestatus: ['like','love','haha'],
      likes: [
        {
            userid: 'user003',
            username: 'Ho Quynh Nhi',
        },
        {
            userid: 'user004',
            username: 'Mi du',
        }
      ], // tối đa 5 thằng bạn
      numfollow: '43',
      numleadercomment: 24,
      numshare: 3,
      leadercomments: leadercomment.filter((item) => item.ownerid == 'sellpost001')
    },
]

let store = [
    {
        userid: 'user001',
        id: 'store001',
        storename: 'Forest',
        avatarUrl: 'https://media.timeout.com/images/102701457/image.jpg',
        coverUrl: 'http://www.brandjam.it/wp-content/uploads/2016/03/cover-store.jpg',
        address: 'fpt university',
        addressMap: ['phuong tan an', 'tp buon ma thuot', 'daklak', 'vietnam'],
        category: 'R-shirt',
        phone: '01655791025',
        lastUpdate: {
            storename: '21 mins',
            phone: '19 days',
            addressMap: '20 days',
            address: '10 days',
        },
        categoryAuto: {
            id: 'category001',
            name: 'T-shirt',
        },
        latitute: '21.0258808',
        longitute: '105.8320113',
        certificates: {
            images: ['http://hstatic.net/093/1000067093/10/2016/1-17/01_gcndk_238326.jpeg'],
            content: 'giấy trứng nhận đăng ký nhãn hiệu',
        },
        numlike: '23',
        likes: [
          {
              userid: 'user003',
              username: 'Ho Quynh Nhi',
              avatarUrl: 'http://lh5.googleusercontent.com/-OCkcBXO1NL8/Vfvmn7szzeI/AAAAAAAAZv4/q6477Ufg0_I/s1600/gaixinhxinh.com-nhi-quynh-ho-3.jpg',
          },
          {
              userid: 'user004',
              username: 'Mi du',
              avatarUrl: 'http://kenh14cdn.com/zoom/280_175/2017/18319358-10155341077660967-1554452835277664692-o-1494429543888-71-266-700-1272-crop-1494429562469.jpg',
          },
          {
              userid: 'user005',
              username: 'Quynh Anh Shin',
              avatarUrl: 'http://img.saobiz.net/d/2015/12/9c62ac46-3a41-4e0b-af6f-f9ea01685dbf_02.jpg',
          }
        ], // tối đa 3 thằng linh tinh
        numfollow: '43',
        follows: [
            {
                userid: 'user003',
                username: 'Ho Quynh Nhi',
                avatarUrl: 'http://lh5.googleusercontent.com/-OCkcBXO1NL8/Vfvmn7szzeI/AAAAAAAAZv4/q6477Ufg0_I/s1600/gaixinhxinh.com-nhi-quynh-ho-3.jpg',
            },
            {
                userid: 'user004',
                username: 'Mi du',
                avatarUrl: 'http://kenh14cdn.com/zoom/280_175/2017/18319358-10155341077660967-1554452835277664692-o-1494429543888-71-266-700-1272-crop-1494429562469.jpg',
            },
            {
                userid: 'user005',
                username: 'Quynh Anh Shin',
                avatarUrl: 'http://img.saobiz.net/d/2015/12/9c62ac46-3a41-4e0b-af6f-f9ea01685dbf_02.jpg',
            }
        ], // tối đa 5 thằng
    },
    {
        userid: 'user003',
        id: 'store002',
        storename: 'Forest',
        avatarUrl: 'https://media.timeout.com/images/102701457/image.jpg',
        coverUrl: 'http://www.brandjam.it/wp-content/uploads/2016/03/cover-store.jpg',
        address: 'fpt university',
        addressMap: ['phuong tan an', 'tp buon ma thuot', 'daklak', 'vietnam'],
        category: 'R-shirt',
        phone: '01655791025',
        lastUpdate: {
            storename: '21 mins',
            phone: '19 days',
            addressMap: '20 days',
            address: '10 days',
        },
        categoryAuto: {
            id: 'category001',
            name: 'T-shirt',
        },
        latitute: '21.0258808',
        longitute: '105.8320113',
        certificates: {
            images: ['http://hstatic.net/093/1000067093/10/2016/1-17/01_gcndk_238326.jpeg'],
            content: 'giấy trứng nhận đăng ký nhãn hiệu',
        },
        numlike: '23',
        likes: [
          {
              userid: 'user003',
              username: 'Ho Quynh Nhi',
              avatarUrl: 'http://lh5.googleusercontent.com/-OCkcBXO1NL8/Vfvmn7szzeI/AAAAAAAAZv4/q6477Ufg0_I/s1600/gaixinhxinh.com-nhi-quynh-ho-3.jpg',
          },
          {
              userid: 'user004',
              username: 'Mi du',
              avatarUrl: 'http://kenh14cdn.com/zoom/280_175/2017/18319358-10155341077660967-1554452835277664692-o-1494429543888-71-266-700-1272-crop-1494429562469.jpg',
          },
          {
              userid: 'user005',
              username: 'Quynh Anh Shin',
              avatarUrl: 'http://img.saobiz.net/d/2015/12/9c62ac46-3a41-4e0b-af6f-f9ea01685dbf_02.jpg',
          }
        ], // tối đa 3 thằng linh tinh
        numfollow: '43',
        follows: [
            {
                userid: 'user003',
                username: 'Ho Quynh Nhi',
                avatarUrl: 'http://lh5.googleusercontent.com/-OCkcBXO1NL8/Vfvmn7szzeI/AAAAAAAAZv4/q6477Ufg0_I/s1600/gaixinhxinh.com-nhi-quynh-ho-3.jpg',
            },
            {
                userid: 'user004',
                username: 'Mi du',
                avatarUrl: 'http://kenh14cdn.com/zoom/280_175/2017/18319358-10155341077660967-1554452835277664692-o-1494429543888-71-266-700-1272-crop-1494429562469.jpg',
            },
            {
                userid: 'user005',
                username: 'Quynh Anh Shin',
                avatarUrl: 'http://img.saobiz.net/d/2015/12/9c62ac46-3a41-4e0b-af6f-f9ea01685dbf_02.jpg',
            }
        ], // tối đa 5 thằng
    }
]

app.get('/user',(req,res) => {
    res.json({
        status: 'success',
        user: user[0]
    })
})

app.get('/user/:id',(req,res) => {
    const { id } = req.params
    res.json({
        status: 'success',
        user: user.filter(item => item.id == id)[0],
    })
})

app.get('/store',(req,res) => {
    const { id } = req.query
    // console.log('/store', id, store.filter(item => item.id == id)[0])
    res.json({
        status: 'success',
        store: store.filter(item => item.id == id)[0],
    })
})

app.get('/sellpost/store/:storeid', (req,res) => { // length = 2
    const { offset } = req.query
    const { storeid } = req.params
    res.json({
        status: 'success',
        offset: -2,
        sellposts: [
            sellpost.filter((item) => item.id == 'sellpost001')[0],
            sellpost.filter((item) => item.id == 'sellpost002')[0],
        ],
    })
})

app.get('/minorpost/store/:storeid', (req,res) => { // length = 2
    const { offset } = req.query
    const { storeid } = req.params
    res.json({
        status: 'success',
        offset: -2,
        minorposts: [1,1],
    })
})

app.get('/categorylist', (req,res) => {
    res.json({
        status: 'success',
        categories: [
            {
                id: 'category001',
                name: 'Shirt',
                secondCategories: [
                    {
                        id: 'secondcategory001',
                        name: 'R-shirt',
                    },
                    {
                        id: 'secondcategory002',
                        name: 'T-shirt',
                    }
                ]
            },
            {
                id: 'category002',
                name: 'Food',
                secondCategories: [
                    {
                        id: 'secondcategory003',
                        name: 'Fast Food',
                    },
                    {
                        id: 'secondcategory004',
                        name: 'Nutri Food',
                    }
                ]
            },
        ]
    })
})

app.post('/updatephone', (req,res) => {
    console.log(req.body)
    setTimeout(function(){
        res.send({
            status: 'success',
        })
    }, 1500)
})

app.post('/verifyphone', (req,res) => {
    console.log(req.body)
    setTimeout(function(){
        res.send({
            status: 'success',
        })
    }, 1500)
})

app.get('/chatlist',(req,res) => {
    res.json(mockedChatList)
})

app.get('/messages/:mesId', (req, res) => {
    const { mesId } = req.params
    let response
    if (mesId === "593bc3ff0607380b9934204e") {
      response = {
        mesId: "593bc3ff0607380b9934204e",
        messages: [
          {
            id: "59302a009afeed1a7f37cac0",
            message: {
              text: "Periphery is a Grammy-nominated American metal band based in Washington, D.C., formed in 2005. Their musical style has been described as progressive metal[1][2] as well as djent.",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          },
          {
            id: "593ea5bf0d346a0b68a88a74",
            message: {
              text: "Breaking Benjamin is an American rock band from Wilkes-Barre, Pennsylvania, founded in 1999 by lead singer and guitarist Benjamin Burnley and drummer Jeremy Hummel",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          }
        ]
      }
    } else if (mesId === '593e4c1a2688d830be26fc66') {
      response = {
        mesId: "593e4c1a2688d830be26fc66",
        messages: [
          {
            id: "593234a11c75513e381e5c87",
            message: {
              text: "fuck u",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          },
          {
            id: "593234a11c75513e381e5c87",
            message: {
              text: "answer me",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          },
          {
            id: "593ea5bf0d346a0b68a88a74",
            message: {
              text: "Breaking Benjamin is an American rock band from Wilkes-Barre, Pennsylvania, founded in 1999 by lead singer and guitarist Benjamin Burnley and drummer Jeremy Hummel",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          }
        ]
      }
    } else {
      response = {
        mesId: "593e4c1a2688d830be26fc00",
        messages: [
          {
            id: "593234a11c75513e381e5c87",
            message: {
              text: "Periphery is a Grammy-nominated American metal band based in Washington, D.C., formed in 2005. Their musical style has been described as progressive metal[1][2] as well as djent.",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          },
          {
            id: "59302a009afeed1a7f37cac0",
            message: {
              text: "answer me",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          },
          {
            id: "593ea5bf0d346a0b68a88a74",
            message: {
              text: "hi there",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          },
          {
            id: "59302a009afeed1a7f37cac0",
            message: {
              text: "ahihi",
              type: "msg",
              url: ""
            },
            time: 1497089078194
          }
        ]
      }
    }
    res.json({data: response})
})

let unreadMessages = [
    "593e4c1a2688d830be26fc00",
    "593e4c1a2688d830be26fc66"
]

sio.on('connection', (socket) => {
    socket.on('server/READ_CHAT', (action) => {
        unreadMessages.splice(action.mesId, 1)
        sio.emit('action', {
            type: 'global/UNREAD_CHAT',
            data: {
              quantity: unreadMessages.length,
              messages: unreadMessages
            }
        })
    })
    sio.emit('action', {
        type: 'global/UNREAD_CHAT',
        data: {
          quantity: unreadMessages.length,
          messages: unreadMessages
        }
    })
})

const mockedChatList = {
    lazyLoad: {
      offset: Date.now()
    },
    data: [
      {
        lastMessage: {
          id: "593ea5bf0d346a0b68a88a74",
          time: 1497089078194,
          message: {
            text: "Periphery is a Grammy-nominated American metal band based in Washington, D.C., formed in 2005. Their musical style has been described as progressive metal[1][2] as well as djent",
            type: "msg",
            url: ""
          }
        },
        mesId: "593e4c1a2688d830be26fc00",
        displayLabel: "",
        users: [
          {
            avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg",
            id: "593234a11c75513e381e5c87",
            username: "Long FU"
          },{
            avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/0cac73f7a1deefa900a203950924437e54fa5358be8c3d6b863b971a.jpg",
            id: "59302a009afeed1a7f37cac0",
            username: "Long Gmail"
          }
        ]
      },
      {
        lastMessage: {
          id: "59302a009afeed1a7f37cac0",
          time: Date.now(),
          message: {
            text: "hello",
            type: "msg",
            url: ""
          }
        },
        mesId: "593bc3ff0607380b9934204e",
        displayLabel: "",
        users: [
          {
            avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/0cac73f7a1deefa900a203950924437e54fa5358be8c3d6b863b971a.jpg",
            id: "59302a009afeed1a7f37cac0",
            username: "Long Gmail"
          }
        ]
      },
      {
        lastMessage: {
          id: "593234a11c75513e381e5c87",
          time: Date.now() - 1523000,
          message: {
            text: "fuck u",
            type: "msg",
            url: ""
          }
        },
        mesId: "593e4c1a2688d830be26fc66",
        displayLabel: "",
        users: [
          {
            avatarUrl: "http://kajkai-avatar.s3-ap-southeast-1.amazonaws.com/78c5e183e31557c11a43239526a3c91b3b8d1608e4b32d4e3fa2f8ee.jpg",
            id: "593234a11c75513e381e5c87",
            username: "Long FU"
          }
        ]
      },
    ]
}

server.listen('8080')
