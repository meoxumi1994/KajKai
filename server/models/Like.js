import mongoose from '../datasource'
import OrderSchema from './Order'
import SecondLayerCommentSchema from './SecondLayerComment'

const FirstLayerCommentSchema = new mongoose.Schema({
    userId: {type: String},
    likenId: {type: String},
    likenType: {type: String}
})

// FirstLayerCommentSchema.createIndex({postId: 1, time: 1})

module.exports = FirstLayerCommentSchema

