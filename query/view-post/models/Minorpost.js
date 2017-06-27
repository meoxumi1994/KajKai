import mongoose from '../datasource'
import LikerSchema from './Liker'
import CommentSchema from './Comment'

const MinorpostSchema = new mongoose.Schema({
  id: {type: String},
  storeId: {type: String},
  storeName: {type: String},
  time: {type: Date},
  content: {type: String},
  numberOfLine: {type: Number},
  images: [String],
  video: {type: String},
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  numerOfFollow: {type: Number},
  numberOfComment: {type: Number},
  comments: [CommentSchema]
})

export default MinorpostSchema
