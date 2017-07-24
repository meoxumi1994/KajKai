import mongoose from '../datasource'
import _ from 'lodash'
import { StoreState } from '../enum'
import FollowerSchema from './Follower'
import LikerSchema from './Liker'
import CommentSchema from './Comment'
import PostrowSchema from './Postrow'

const SellpostSchema = new mongoose.Schema({
  id: {type: String},
  storeId: {type: String},
  storeName: {type: String},
  avatarUrl: {type: String},
  category: {type: String},
  title: {type: String},
  description: {type: String},
  time: {type: Date},
  storeState: {type: String, enum: _.values(StoreState)},
  shipStatus: {type: String},
  postrowsOrder: [String],
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  numerOfFollow: {type: Number},
  followers: [FollowerSchema],
  numberOfComment: {type: Number},
  comments: [CommentSchema],
  numberOfShare: {type: Number},
  postrows: [PostrowSchema]
})

export default SellpostSchema
