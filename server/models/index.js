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

module.exports = {
	User,
	Category,
	SubCategory,
	Store,
    StorePostDetail,
    StorePost,
	FirstLayerComment,
    SecondLayerComment
}

