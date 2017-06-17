import mongoose from '../../micro-store/datasource'

export const LikeSchema = new mongoose.Schema({
    userId: {type: String},
    likenId: {type: String},
    time: {type: Number}
});

