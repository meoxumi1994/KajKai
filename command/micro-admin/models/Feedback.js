import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import UserSchema from './User'

const FeedbackSchema = new mongoose.Schema({
  reporter: {type: UserSchema},
  content: {type: String},
  reportee: {type: UserSchema},
  sellpostId: {type: String},
  status: {type: Number},
  reason: {type: String},
  time: {type: Date}
})

export default FeedbackSchema
