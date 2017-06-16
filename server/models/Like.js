import mongoose from '../datasource'

const LikeSchema = new mongoose.Schema({
    userId: {type: String},
    likenId: {type: String},
    time: {type: Number}
})

module.exports = LikeSchema

