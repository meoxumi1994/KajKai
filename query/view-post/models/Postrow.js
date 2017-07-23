import mongoose from '../datasource'
import _ from 'lodash'
import { PostrowType } from '../enum'
import ProductSchema from './Product'
import TitleSchema from './Title'

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
