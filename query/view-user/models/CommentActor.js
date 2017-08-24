import mongoose from '../datasource'

const CommentActorSchema = new mongoose.Schema({
  commentId: {type: String},
  id: {type: String},
  name: {type: String},
  avatarUrl: {type: String},
  type: {type: String}
})

export default CommentActorSchema
