import mongoose from '../datasource'

const ProductSchema = new mongoose.Schema({
    productId : {type: String},
    content: {type: String},
    imageUrl: {type: String},
    list: [String]
});

export default ProductSchema;