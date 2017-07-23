import mongoose from '../datasource'
import SubCategorySchema from './SubCategory'
import CategorySchema from './Category'
import ProductSchema from './Product'
import SellPostDetailSchema from './SellPostDetail'
import SellPostSchema from './SellPost'
import StoreSchema from './Store'
import CertificateSchema from './Certificate'
import MinorPostSchema from './MinorPost'
import path from 'path'

export const Certificate = mongoose.model('Certificate', CertificateSchema);
export const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
export const Category = mongoose.model('Category', CategorySchema);
export const Product = mongoose.model('Product', ProductSchema);
export const SellPostDetail = mongoose.model('SellPostDetail', SellPostDetailSchema);
export const SellPost = mongoose.model('SellPost', SellPostSchema);
export const Store = mongoose.model('Store', StoreSchema);
export const MinorPost = mongoose.model('MinorPost', MinorPostSchema);


let fs = require('fs');
fs.readFile(path.resolve(__dirname, '../data/category.json'), 'utf8', (err, data) => {
	if (err) {
		console.log('fuck');
        return;
	}
	let obj = JSON.parse(data);
	obj.forEach((e) => {
		// console.log(e);
		let sub = e.subcategory;

		let subCategories = [];
		sub.forEach((subcat) => {
			// console.log(subcat);
			let subCategory = new SubCategory({name: subcat.name});
			subCategories.push(subCategory)
		});

		let category = new Category({name: e.name, subcategory: subCategories});
		Category.findOne({name: e.name}, (err, data) => {
		    if (err || !data) {
		        category.save();
            }
        });
	});
});