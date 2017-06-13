import mongoose from '../datasource'

export const StorePostDetailSchema = new mongoose.Schema({
    id: {type: String},
    type: {type: String},
    content: {type: String},
    images: [String]
});

