import mongoose from '../datasource'
import _ from 'lodash'
import { StoreState } from '../enum'
import FollowerSchema ffrom './Follower'
import LikerSchema from './Liker'

const SellpostSchema = new mongoose.Schema({
  id: {type: String},
  storeId: {type: String},
  storeName: {type: String},
  category: {type: String},
  title: {type: String},
  description: {type: String},
  time: {type: Date},
  storeState: {type: String, enum: _.values(StoreState)},
  shipStatus: {type: String},
  postrowOrder: [String],
  postrows: [String],
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  numerOfFollow: {type: Number},
  followers: [FollowerSchema]
  numberOfComment: {type: Number},
  numberOfShare: {type: Number},
  comments: [String]
})

export default SellpostSchema
