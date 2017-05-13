import mongoose from '../datasource'

const StoreSchema = new mongoose.Schema({
    storename: {type: String},
    address: {type: String},
    phone: {type: String},
    category: {type: String},
    longitude: {type: Number},
    latitude: {type: Number},
    owner: {type: String}
});

module.exports = StoreSchema
