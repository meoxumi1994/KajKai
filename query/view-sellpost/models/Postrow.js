import mongoose from '../datasource'
import _ from 'lodash'
import { PostrowType } from '../enum'

const PostrowSchema = new mongoose.Schema({
  id: {type: String},
  sellpostId: {type: String},
  content: {type: String},
  numberOfLine: {type: Number},
  images: [String],
  titleOrder: [String],
  titles: [String],
  productOrder: [String],
  products: [String],
  type: {type: String, enum: _.values(PostrowType)}
})

export default PostrowSchema
