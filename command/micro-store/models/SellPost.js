import mongoose from '../datasource'
import StorePostDetailSchema from './StorePostDetail'

const StorePostSchema = new mongoose.Schema({
    storeId: {type: String},
    category: {type: String},
    title: {type: String},
    description: {type: String},
    time: {type: String},
    status: {type: String}, //'notyet|open|sleep',
    shippable: {type: String},
});

export default StorePostSchema
