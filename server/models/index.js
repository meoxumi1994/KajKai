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

var SecondLayerCommentSchema = require('./SecondLayerComment')
var SecondLayerComment = mongoose.model('SecondLayerComment', SecondLayerCommentSchema)

var ProductSchema = require('./Product')
var Product = mongoose.model('Product', ProductSchema)

var OrderDetailSchema = require('./OrderDetail')
var OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema)

var OrderSchema = require('./Order')
var Order = mongoose.model('Order', OrderSchema)

var FirstLayerCommentSchema = require('./FirstLayerComment')
var FirstLayerComment = mongoose.model('FirstLayerComment', FirstLayerCommentSchema)

var LikeSchema = require('./Like')
var Like = mongoose.models('Like', LikeSchema)

module.exports = {
	User,
	Category,
	SubCategory,
	Store,
    StorePostDetail,
    StorePost,
	FirstLayerComment,
    SecondLayerComment,
    Like
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