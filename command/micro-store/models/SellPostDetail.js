import mongoose from '../datasource'

const SellPostDetailSchema = new mongoose.Schema({
    sellPostId: {type: String},
    content: {type: String},
    line: {type: Number},
    imageURLs: {type: String},
    titlesOrder: [Number],
    titles: {type: String},
    productOrders: {type: String},
    type: {type: String}
});

export default SellPostDetailSchema;

