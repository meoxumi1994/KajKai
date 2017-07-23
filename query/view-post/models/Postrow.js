import mongoose from '../datasource'
import _ from 'lodash'
import { PostrowType } from '../enum'
import TitleSchema from './Title'
import ProductSchema from './Product'

const PostrowSchema = new mongoose.Schema({
  sellpostId: {type: String},
  id: {type: String},
  content: {type: String},
  numberOfLine: {type: Number},
  images: [String],
  titles: [TitleSchema],
  products: [ProductSchema],
  type: {type: String, enum: _.values(PostrowType)}
})

export default PostrowSchema
