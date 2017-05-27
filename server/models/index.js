import mongoose from '../datasource'
var UserSchema = require('./User')
var User = mongoose.model('User', UserSchema)

var CategorySchema = require('./Category')
var Category = mongoose.model('Category', CategorySchema)

var SubCategorySchema = require('./SubCategory')
var SubCategory = mongoose.model('SubCategory', SubCategorySchema)

var StorePostDetailSchema = require('./StorePostDetail')
var StorePostDetail = mongoose.model('StorePostDetail', StorePostDetailSchema)

var StorePostSchema = require('./StorePost')
var StorePost = mongoose.model('StorePost', StorePostSchema)

var StoreSchema = require('./Store')
var Store = mongoose.model('Store', StoreSchema)



module.exports = {
	User,
	Category,
	SubCategory,
	Store,
    StorePostDetail,
    StorePost
}

// var fs = require('fs')
// fs.readFile('./data/category.json', 'utf8', function(err, data){
// 	if (err) {
// 		console.log('fuck')
// 	}
// 	var obj = JSON.parse(data)
// 	obj.forEach(function(e) {
// 		console.log(e)
// 		var sub = e.subcategory
//
// 		var subCategories = []
// 		sub.forEach(function(subcat){
// 			console.log(subcat)
// 			var subCategory = new SubCategory({name: subcat.name})
// 			subCategories.push(subCategory)
// 		})
//
// 		var category = new Category({name: e.name, subcategory: subCategories})
// 		category.save()
// 	})
// })