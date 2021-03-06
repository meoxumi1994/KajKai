import mongoose from '../datasource'
import _ from 'lodash'
import { Sex, Language } from '../enum'
import AddressSchema from './Address'
import BasicStoreSchema from './BasicStore'
import BlackSchema from './Black'
import ImageSchema from './Image'
import InterestSchema from './Interest'
import LastUpdateSchema from './LastUpdate'
import NotificationSchema from './Notification'
import PrivacySchema from './Privacy'

const UserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  email: {type: String},
  socialType: {type: String},
  avatarUrl: {type: String},
  coverUrl: {type: String},
  imageList: [ImageSchema],
  phone: {type: String},
  address: {type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  language: {type: String, enum: _.values(Language)},
  sex: {type: String, enum: _.values(Sex)},
  yearOfBirth: {type: Date},
  lastUpdate: {type: LastUpdateSchema},
  blackList: [BlackSchema],
  privacy: {type: PrivacySchema},
  storeList: [BasicStoreSchema],
  banned: {type: Number},
  reason: {type: String},
  followingStores: [String],
  followingSellposts: [String],
  notifications: [NotificationSchema],
  numberOfUnRead: {type: Number},
  interests: [InterestSchema],
  currentId: {type: String},
  numberOfComment: {type: Number},
  numberOfReply: {type: Number},
  numberOfLike: {type: Number},
  numberOfFollow: {type: Number},
  createdAt: {type: Date},
  lastVisitTime: {type: Date}
})

export default UserSchema
