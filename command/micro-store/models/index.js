import mongoose from '../datasource'
import SubCategorySchema from './SubCategory'
import CategorySchema from './Category'
import ProductSchema from './Product'
import SellPostDetailSchema from './SellPostDetail'
import SellPostSchema from './SellPost'
import StoreSchema from './Store'
import CertificateSchema from './Certificate'

export const Certificate = mongoose.model('Certificate', CertificateSchema);
export const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
export const Category = mongoose.model('Category', CategorySchema);
export const Product = mongoose.model('Product', ProductSchema);
export const SellPostDetail = mongoose.model('SellPostDetail', SellPostDetailSchema);
export const SellPost = mongoose.model('SellPost', SellPostSchema);
export const Store = mongoose.model('Store', StoreSchema);

