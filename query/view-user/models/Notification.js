import mongoose from '../datasource'
import _ from 'lodash'
import { NotificationType, StoreState } from '../enum'
import CommentActorSchema from './CommentActor'
import LikerSchema from './Liker'
import MatchSchema from './Match'
import ProductSchema from './Product'
import ReplyActorSchema from './ReplyActor'

const NotificationSchema = new mongoose.Schema({
  type: {type: String, enum: _.values(NotificationType)},
  commentId: {type: String},
  replyId: {type: String},
  sellpostId: {type: String},
  actorId: {type: String},
  name: {type: String},
  avatarUrl: {type: String},
  content: {type: String},
  time: {type: Date},
  storeName: {type: String},
  urlName: {type: String},
  storeId: {type: String},
  storeAvatarUrl: {type: String},
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  order: [ProductSchema],
  isRead: {type: Number},
  numberOfReply: {type: Number},
  match: [MatchSchema],
  comment: {type: CommentActorSchema},
  reply: {type: ReplyActorSchema},
  storeState: {type: String, enum: _.values(StoreState)}
})

export default NotificationSchema
