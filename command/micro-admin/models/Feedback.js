import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import BasicUserSchema from './BasicUser'

const FeedbackSchema = new mongoose.Schema({
  reporter: {type: BasicUserSchema},
  content: {type: String},
  reportee: {type: BasicUserSchema},
  sellpostId: {type: String},
  status: {type: Number},
  bannedById: {type: String},
  bannedByAdminName: {type: String},
  reason: {type: String},
  time: {type: Date}
})

export default FeedbackSchema
