// import models from './models'
// var models = require('./models')
import { User } from './models'

// console.log(models.User)

var user = new User({name:'haha', password : '1234', email : 'abc@gmail.com'})

// console.log(user._id)
// user.save(function(err) {
// 	console.log(err)
// })

// console.log(user)

// models.User.find({}, function (err, u) {

// 	console.log('fuck')
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(u)
// 	}
// } )

// models.User.findById('590601c096b7620cbe7648d2', function(err, user) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(user.toObject())
// 	}
// } )