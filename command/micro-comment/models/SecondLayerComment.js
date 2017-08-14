import mongoose from '../datasource'
import MatchSchema from './Match'

const SecondLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    postId: {type: String},
    content: {type: String},
    time: {type: Number},
    likeCounter: {type: Number},
    parentCommentId: {type: String},
    match: [MatchSchema]
});

export default SecondLayerCommentSchema;