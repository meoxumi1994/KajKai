import mongoose from '../datasource'
import CommentProductSchema from './CommentProduct'
import ReplySchema from './Reply'

const CommentSchema = new mongoose.Schema({
  id: {type: String},
  sellpostId: {type: String},
  order: [CommentProductSchema],
  replies: [ReplySchema]
})

export default CommentSchema
