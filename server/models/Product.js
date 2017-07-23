import mongoose from '../datasource'

const ProductSchema = new mongoose.Schema({
    productName: {type: String},
    productCategory: {type: String},
    productDescription: {type: String},
});

module.exports = ProductSchema
