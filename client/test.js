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

var user = [
    {
        id: 'user001',
        username: 'Pornnappan Pornpenpipat',
        avatarUrl: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.90.720.720/15535065_349275098765663_3988065271083433984_n.jpg?ig_cache_key=MTQwNjk1NDcxMjY5OTQ1MTgwMA%3D%3D.2.c',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: '163 le quy don, daklak',
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
        username: 'Ho Quynh Nhi',
        avatarUrl: 'http://lh5.googleusercontent.com/-OCkcBXO1NL8/Vfvmn7szzeI/AAAAAAAAZv4/q6477Ufg0_I/s1600/gaixinhxinh.com-nhi-quynh-ho-3.jpg',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: '163 le quy don, daklak',
        age: 24,
    },
    {
        id: 'user004',
        username: 'Mi du',
        avatarUrl: 'http://kenh14cdn.com/zoom/280_175/2017/18319358-10155341077660967-1554452835277664692-o-1494429543888-71-266-700-1272-crop-1494429562469.jpg',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: '163 le quy don, daklak',
        age: 24,
    },
    {
        id: 'user005',
        username: 'Quynh Anh Shin',
        avatarUrl: 'http://img.saobiz.net/d/2015/12/9c62ac46-3a41-4e0b-af6f-f9ea01685dbf_02.jpg',
        coverUrl: 'http://www.trendycovers.com/covers/Hand_Heart_facebook_cover_1331287340.jpg',
        phone: '01655791021',
        address: '163 le quy don, daklak',
        age: 24,
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
    const { id } = req.query
    if(id){
        console.log('/user', user.filter(item => item.id == id)[0])
        res.json({
            status: 'success',
            user: user.filter(item => item.id == id)[0],
        })
    }else{
        res.json({
            status: 'success',
            user: user[0]
        })
    }
})

app.get('/store',(req,res) => {
    const { id } = req.query
    console.log('/store', id, store.filter(item => item.id == id)[0])
    res.json({
        status: 'success',
        store: store.filter(item => item.id == id)[0],
    })
})

app.get('/sellpost/store/:storeid?offset=-1', (req,res) => { // length = 2
    const { storeid } = req.query
    const { offset } = req.params
    console.log(storeid, offset)
    res.json({
        status: 'success',
    })
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
