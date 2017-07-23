import mongoose from '../datasource'

const FollowSchema = new mongoose.Schema({
    followerId: {type: String},
    followeeId: {type: String}
});

export default FollowSchema
