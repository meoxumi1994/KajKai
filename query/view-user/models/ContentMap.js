import mongoose from '../datasource'
import ProductSchema from './Product'

const ContentMapSchema = new mongoose.Schema({
  id: {type: String},
  content: {type: String},
  order: [ProductSchema]
})

export default ContentMapSchema
