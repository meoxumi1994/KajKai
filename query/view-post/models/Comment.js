import mongoose from '../datasource'
import _ from 'lodash'
import { OrderStatus } from '../enum'
import { MatchSchema } from './Match'
import ProductSchema from './Product'
import ReplySchema from './Reply'

const CommentSchema = new mongoose.Schema({
  id: {type: String},
  commenterId: {type: String},
  storeId: {type: String},
  sellpostId: {type: String},
  minorpostId: {type: String},
  order: [ProductSchema],
  numberOfReply: {type: Number},
  replies: [ReplySchema],
  time: {type: Date},
  status: {type: String, enum: _.values(OrderStatus)},
  match: [MatchSchema]
})

export default CommentSchema
