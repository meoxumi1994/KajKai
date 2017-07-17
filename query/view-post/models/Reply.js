import mongoose from '../datasource'

const ReplySchema = new mongoose.Schema({
  commentId: {type: String},
  type: {type: String},
  urlName: {type: String},
  id: {type: String},
  userId: {type: String},
  username: {type: String},
  avatarUrl: {type: String},
  content: {type: String},
  time: {type: Date},
  numberOfLike: {type: Number}
})

export default ReplySchema
