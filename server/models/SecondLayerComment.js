import mongoose from '../datasource'

const SecondLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    posterAvatar: {type: String},
    posterName: {type: String},
    content: {type: String},
    time: {type: Number},
    likeCounter: {type: Number}
});

module.exports = SecondLayerCommentSchema
