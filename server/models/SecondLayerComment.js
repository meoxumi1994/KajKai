import mongoose from '../datasource'

const SecondLayerCommentSchema = new mongoose.Schema({
    posterId: {type: String},
    posterAvatar: {type: String},
    posterName: {type: String},
    content: {type: String},
    time: {type: String},
});

module.exports = SecondLayerCommentSchema
