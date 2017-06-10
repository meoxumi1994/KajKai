import mongoose from '../datasource'
import StorePostDetailSchema from './StorePostDetail'

const StorePostSchema = new mongoose.Schema({
    storeId: {type: String},
    list: [StorePostDetailSchema],
    createdAt: {type: Number},
    type: {type: String},
    emitId: {type: String},
    likeCounter: {type: Number, default: 0},
    commentCounter: {type: Number, default: 0}
});

module.exports = StorePostSchema
