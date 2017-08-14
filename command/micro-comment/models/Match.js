import mongoose from '../datasource'

const MatchSchema = new mongoose.Schema({
    name: {type: String},
    link: {type: String},
    id: {type: String}
});

export default MatchSchema;
