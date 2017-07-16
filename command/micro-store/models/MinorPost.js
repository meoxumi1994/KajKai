import mongoose from '../datasource'

const MinorPostSchema = new mongoose.Schema({
    storeId: {type: String},
    lineCount: {type: Number},
    content: {type: String},
    time: {type: Number},
    images: [String],
    video: {type: String},
});

export default MinorPostSchema
