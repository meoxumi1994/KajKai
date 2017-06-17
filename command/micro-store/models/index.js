import mongoose from '../datasource'

const AddressSchema = require('./Address')
export const Address = mongoose.model('Address', AddressSchema)

const SubCategorySchema = require('./SubCategory')
export const SubCategory = mongoose.model('SubCategory', SubCategorySchema)

const CategorySchema = require('./Category')
export const Category = mongoose.model('Category', CategorySchema)

const ProductSchema = require('./Product')
export const Product = mongoose.model('Product', ProductSchema)

const StorePostDetailSchema = require('./StorePostDetail')
export const StorePostDetail = mongoose.model('StorePostDetail', StorePostDetailSchema)

const StorePostSchema = require('./StorePost')
export const StorePost = mongoose.model('StorePost', StorePostSchema)

const StoreSchema = require('./Store')
export const Store = mongoose.model('Store', StoreSchema)

