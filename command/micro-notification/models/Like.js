import mongoose from '../datasource'

const LikeSchema = new mongoose.Schema({
    likerId: {type: String},
    likenId: {type: String}
});

export default LikeSchema