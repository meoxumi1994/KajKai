import mongoose from '../datasource'
import _ from 'lodash'
import { StoreState } from '../enum'
import PostrowSchema from './Postrow'
import FollowerSchema from './Follower'
import LikerSchema from './Liker'
import CommentSchema from './Comment'

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
  postrows: [PostrowSchema],
  numberOfLike: {type: Number},
  likers: [LikerSchema],
  numerOfFollow: {type: Number},
  followers: [FollowerSchema],
  numberOfComment: {type: Number},
  comments: [CommentSchema],
  numberOfShare: {type: Number}
})

export default SellpostSchema
