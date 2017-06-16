import mongoose from '../datasource'
import {OrderSchema} from './Order'

export const FirstLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    content: {type: String},
    time: {type: Number},
    order: {type: OrderSchema},
    postId: {type: String},
    likeCounter: {type: Number},
    commentCounter: {type: Number}
})

