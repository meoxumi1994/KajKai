import mongoose from '../datasource'
var UserSchema = require('./User')
var User = mongoose.model('User', UserSchema)

var CategorySchema = require('./Category')
var Category = mongoose.model('Category', CategorySchema)

module.exports = {
	User,
	Category
}

// var fs = require('fs')
// fs.readFile('./data/category.json', 'utf8', function(err, data){
// 	if (err) {
// 		console.log('fuck')
// 	}
// 	var obj = JSON.parse(data)
// 	obj.forEach(function(e) {
// 		console.log(e)
// 		var cat = new Category({name: e.name})
// 		cat.save()
// 	})
// })