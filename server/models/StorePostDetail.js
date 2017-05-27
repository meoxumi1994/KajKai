import mongoose from '../datasource'

const StorePostDetailSchema = new mongoose.Schema({
    id: {type: String},
    type: {type: String},
    content: {type: String},
    images: [String]
});

module.exports = StorePostDetailSchema
