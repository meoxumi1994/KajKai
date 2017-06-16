import mongoose from '../datasource'

export const SecondLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    content: {type: String},
    time: {type: Number},
    likeCounter: {type: Number},
    parentCommentId: {type: String}
});
