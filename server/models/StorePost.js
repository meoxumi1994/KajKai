import mongoose from '../datasource'
import StorePostDetailSchema from './index'

const StorePostSchema = new mongoose.Schema({
    storeId: {type: String},
    list: [StorePostDetailSchema]
});

module.exports = StorePostSchema
