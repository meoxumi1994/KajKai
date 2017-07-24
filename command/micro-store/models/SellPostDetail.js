import mongoose from '../datasource'

const SellPostDetailSchema = new mongoose.Schema({
    sellPostId: {type: String},
    content: {type: String},
    line: {type: Number},
    imageURLs: [String],
    titlesOrder: [Number],
    titles: [String],
    productOrders: [String],
    type: {type: String}
});

export default SellPostDetailSchema;

