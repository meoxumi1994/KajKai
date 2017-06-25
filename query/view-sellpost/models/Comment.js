import mongoose from '../datasource'
import ProductSchema from './Product'
import ReplySchema from './Reply'

const CommentSchema = new mongoose.Schema({
  id: {type: String},
  sellpostId: {type: String},
  order: [ProductSchema],
  replies: [ReplySchema],
  time: {type: Date}
})

export default CommentSchema
