import mongoose from '../datasource'

const SellPostSchema = new mongoose.Schema({
    storeId: {type: String},
    category: {type: String},
    title: {type: String},
    description: {type: String},
    time: {type: String},
    status: {type: String}, //'notyet|open|sleep',
    shippable: {type: String},
    sellPostDetailOrders: [String]
});

export default SellPostSchema
