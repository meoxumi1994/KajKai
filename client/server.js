var express = require("express")
var app = express()

app.use(express.static(__dirname + '/'))

app.get('*',function(req, res){
  res.sendFile(__dirname + '/index.html')
})

<<<<<<< HEAD
// var options = {
//   key: fs.readFileSync('./config/kajkai.key'),
//   cert: fs.readFileSync('./config/kajkai.crt')
// }


=======
>>>>>>> 54a05ca712e69c2e3fef81e0332be31fccd99022
app.listen(3000)
