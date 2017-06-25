import mongoose from '../datasource'

const ProductSchema = new mongoose.Schema({
  id: {type: String},
  content: {type: String},
  imageUrl: {type: String},
  list: [String],
  numberOfOrder: {type: Number}
})

export default ProductSchema
