import mongoose from '../datasource'

const CommentProductSchema = new mongoose.Schema({
  id: {type: String},
  commentId: {type: String},
  imageUrl: {type: String},
  content: {type: String},
  list: [String],
  numberOfOrder: {type: Number}
})

export default CommentProductSchema
