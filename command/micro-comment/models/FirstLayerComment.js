import mongoose from '../datasource'
import OrderSchema from './Order'
import MatchSchema from './Match'

const FirstLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    content: {type: String},
    time: {type: Number},
    order: {type: OrderSchema},
    postId: {type: String},
    likeCounter: {type: Number},
    commentCounter: {type: Number},
    status: {type: String},
    match: [MatchSchema]
});

export default FirstLayerCommentSchema;

