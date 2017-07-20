import mongoose from '../datasource'
import AddressSchema from './Address'
import BasicUserSchema from './BasicUser'
import CategorySchema from './Category'
import CategoryAutoSchema from './CategoryAuto'
import CertificateSchema from './Certificate'
import FollowerSchema from './Follower'
import LastUpdateSchema from './LastUpdate'
import LikerSchema from './Liker'
import StoreSchema from './Store'
import SubCategorySchema from './SubCategory'

export const Address = mongoose.model('Address', AddressSchema)
export const BasicUser = mongoose.model('BasicUser', BasicUserSchema)
export const Category = mongoose.model('Category', CategorySchema)
export const CategoryAuto = mongoose.model('CategoryAuto', CategoryAutoSchema)
export const Certificate = mongoose.model('Certificate', CertificateSchema)
export const Follower = mongoose.model('Follower', FollowerSchema)
export const LastUpdate = mongoose.model('LastUpdate', LastUpdateSchema)
export const Liker = mongoose.model('Liker', LikerSchema)
export const Store = mongoose.model('Store', StoreSchema)
export const SubCategory = mongoose.model('SubCategory', SubCategorySchema)
