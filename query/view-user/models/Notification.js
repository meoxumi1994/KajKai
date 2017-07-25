import mongoose from '../datasource'
import _ from 'lodash'
import { NotificationType } from '../enum'
import LikerSchema from './Liker'

const NotificationSchema = new mongoose.Schema({
  type: {type: String, enum: _.values(NotificationType)},
  commentId: {type: String},
  replyId: {type: String},
  sellpostId: {type: String},
  actorId: {type: String},
  avatarUrl: {type: String},
  username: {type: String},
  content: {type: String},
  time: {type: Date},
  storeName: {type: String},
  urlName: {type: String},
  likers: [LikerSchema]
})

export default NotificationSchema
