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
        id: '5933bda8d5e8f76039403e06',
        username: 'Duc Minh',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/s200x200/10354686_10150004552801856_220367501106153455_n.jpg?oh=9fd397c48503bf5c5946134de4d111ee&oe=59B05050',
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
        latitute: 1,
        longitute: 1,
        phone: '01655791025',
    }
]

app.get('/user',(req,res) => {
    const { id } = req.query
    if(id){
        console.log('/user', user.filter(item => item.id == id)[1])
        res.json({
            status: 'success',
            user: user.filter(item => item.id == id)[1],
        })
    }else{
        res.json(user[1])
    }
})

app.get('/getstore',(req,res) => {
    const { id } = req.query
    console.log('/getstore')
    res.json({
        status: 'success',
        store: store.filter(item => item.id == id)[0],
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
