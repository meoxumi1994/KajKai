import mongoose from '../datasource'

const LikeSchema = new mongoose.Schema({
    userId: {type: String},
    likenId: {type: String},
    likenType: {type: String}
})

module.exports = LikeSchema

