import mongoose from '../datasource'

export const ProductSchema = new mongoose.Schema({
    productName: {type: String},
    productCategory: {type: String},
    productDescription: {type: String},
});