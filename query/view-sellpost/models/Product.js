import mongoose from '../datasource'

const ProductSchema = new mongoose.Schema({
  id: {type: String},
  postrowId: {type: String},
  imageUrl: {type: String},
  content: {type: String},
  list: [String],
  numberOfOrder: {type: Number}
})

export default ProductSchema
