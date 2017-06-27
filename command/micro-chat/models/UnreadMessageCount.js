import mongoose from '../datasource'

const UnreadMessageCountSchema = new mongoose.Schema({
    userId: {type: String},
    counter: {type: Number, default: 0}
});

export default UnreadMessageCountSchema