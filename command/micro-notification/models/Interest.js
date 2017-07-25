import mongoose from '../datasource'

const InterestSchema = new mongoose.Schema({
    userId: {type: String},
    categoryId: {type: String},
    location: {type: [Number], index: '2dsphere'}
});

export default InterestSchema