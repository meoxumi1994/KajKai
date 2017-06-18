import mongoose from '../datasource'
import StorePostDetailSchema from './StorePostDetail'

const StorePostSchema = new mongoose.Schema({
    storeId: {type: String},
    list: [StorePostDetailSchema],
    createdAt: {type: Number},
    type: {type: String}
});

module.exports = StorePostSchema
