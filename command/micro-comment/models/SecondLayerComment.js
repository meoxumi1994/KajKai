import mongoose from '../datasource'

const SecondLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    postId: {type: String},
    content: {type: String},
    time: {type: Number},
    likeCounter: {type: Number},
    parentCommentId: {type: String}
});

export default SecondLayerCommentSchema;