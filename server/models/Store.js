import mongoose from '../datasource'
import StorePostSchema from './StorePost'

const StoreSchema = new mongoose.Schema({
    storename: {type: String},
    address: {type: String},
    phone: {type: String},
    category: {type: String},
    longitude: {type: Number},
    latitude: {type: Number},
    owner: {type: String},
    avatarUrl: {type: String},
    imageUrl: {type: String},
    mainPost: {type: StorePostSchema}
});

module.exports = StoreSchema
