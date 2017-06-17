import mongoose from '../datasource'

const LikeSchema = require('../../micro-like/models/Like')
export const Like = mongoose.model('Like', LikeSchema)