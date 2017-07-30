import mongoose from '../datasource'

const UserFollowSchema = new mongoose.Schema({
    followerId: {type: String},
    followeeId: {type: String}
});

export default UserFollowSchema
