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

app.get('/who',(req,res) => {
    console.log('/who')
    res.send({
        id: '5933bda8d5e8f76039403e06',
        username: 'Duc Minh',
        avatarUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/s200x200/10354686_10150004552801856_220367501106153455_n.jpg?oh=9fd397c48503bf5c5946134de4d111ee&oe=59B05050',
        storeList: store.filter(item => item.userid == '5933bda8d5e8f76039403e06'),
        phone: '01655791021',
        address: '163 le quy don, daklak',
        age: 24,
    })
})

app.get('/getstore',(req,res) => {
    const { id } = req.query
    console.log('/getstore')
    res.send({
        status: 'success',
        store: store.filter(item => item.id == id)[0],
    })
})

sio.on('connection', (socket) => {
    socket.on('server/', (action) => {
        sio.emit('action', {
          type: 'SEND_MESSAGE',
          message: action.message,
          author: action.token,
          id: Date.now()
        })
    })
})

server.listen('8080')
