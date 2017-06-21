import mongoose from '../datasource'

const ProductSchema = new mongoose.Schema({
    sellPostId: {type: String},
    sellPostDetailId: {type: String},
    content: {type: String},
    imageUrl: {type: String},
    list: [String]
});

export default ProductSchema;
