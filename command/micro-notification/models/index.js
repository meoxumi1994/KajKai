import mongoose from '../datasource'
import FollowSchema from './Follow'
import LikeSchema from './Like'

export const Follow = mongoose.model('Follow', FollowSchema);
export const Like = mongoose.model('Like', LikeSchema);