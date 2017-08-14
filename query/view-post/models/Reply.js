import mongoose from '../datasource'
import LikerSchema from './Liker'
import MatchSchema from './Match'

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
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  match: [MatchSchema]
})

export default ReplySchema
