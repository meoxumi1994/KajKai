import mongoose from '../datasource'
import FollowSchema from './Follow'
import LikeSchema from './Like'
import InterestSchema from './Interest'

export const Follow = mongoose.model('Follow', FollowSchema);
export const Like = mongoose.model('Like', LikeSchema);
export const Interest = mongoose.model('Interest', InterestSchema);