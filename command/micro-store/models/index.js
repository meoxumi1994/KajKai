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
import config from '../config/pubSubConfig'

export const Certificate = mongoose.model('Certificate', CertificateSchema);
export const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
export const Category = mongoose.model('Category', CategorySchema);
export const Product = mongoose.model('Product', ProductSchema);
export const SellPostDetail = mongoose.model('SellPostDetail', SellPostDetailSchema);
export const SellPost = mongoose.model('SellPost', SellPostSchema);
export const Store = mongoose.model('Store', StoreSchema);
export const MinorPost = mongoose.model('MinorPost', MinorPostSchema);


let fs = require('fs');
let redis = require('redis');
let redisClient = redis.createClient(config);
fs.readFile(path.resolve(__dirname, '../data/category.json'), 'utf8', (err, data) => {
    console.log('CATEGORY GET CALLED');
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
			let subCategory = new SubCategory({name: subcat.name, enName: subcat.enName});
			subCategories.push(subCategory)
		});

		let category = new Category({name: e.name, enName: e.enName, subcategory: subCategories});
		Category.findOne({name: e.name}, (err, data) => {
		    if (err || !data) {
		        category.save();
		        category.subcategory.forEach((sub) => {
		            redisClient.hset('category', sub._id.toString(), sub.name);
                })
            } else {
		        data.subcategory.forEach((sub) => {
                    redisClient.hset('category', sub._id.toString(), sub.name);
                })
            }
        });
	});
});
