import mongoose from '../datasource'
import FollowSchema from './Follow'
import LikeSchema from './Like'
import InterestSchema from './Interest'
import UserFollowSchema from './UserFollow'

export const Follow = mongoose.model('Follow', FollowSchema);
export const Like = mongoose.model('Like', LikeSchema);
export const Interest = mongoose.model('Interest', InterestSchema);
export const UserFollow = mongoose.model('UserFollow', UserFollowSchema);