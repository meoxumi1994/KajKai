import mongoose from '../datasource'
import LikerSchema from './Liker'

const ReplyLikerSchema = new mongoose.Schema({
  replyId: {type: String},
  likers: [LikerSchema]
})

export default ReplyLikerSchema
