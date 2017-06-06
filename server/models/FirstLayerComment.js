import mongoose from '../datasource'
import OrderSchema from './Order'
import SecondLayerCommentSchema from './SecondLayerComment'

const FirstLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    posterAvatar: {type: String},
    posterName: {type: String},
    content: {type: String},
    time: {type: Number},
    order: {type: OrderSchema},
    postId: {type: String},
    likeCounter: {type: Number},
    commentCounter: {type: Number}
})

// FirstLayerCommentSchema.createIndex({postId: 1, time: 1})

module.exports = FirstLayerCommentSchema

