import mongoose from '../datasource'
import FollowSchema from './Follow'

export const Follow = mongoose.model('Follow', FollowSchema);