import mongoose from '../datasource'
import LikerSchema from './Liker'

const CommentLikerSchema = new mongoose.Schema({
  commentId: {type: String},
  likers: [LikerSchema]
})

export default CommentLikerSchema
