import mongoose from '../datasource'
import _ from 'lodash'
import { NotificationType } from '../enum'

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
  likers: [Ba], // con thang nao khac like nua thi` random vai thang :D
})

export default NotificationSchema
