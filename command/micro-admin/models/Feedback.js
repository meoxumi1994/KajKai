import mongoose from '../datasource'
import BasicStoreSchema from './BasicStore'
import BasicUserSchema from './BasicUser'

const FeedbackSchema = new mongoose.Schema({
  reporter: {type: BasicUserSchema},
  content: {type: String},
  reportee: {type: BasicUserSchema},
  store: {type: BasicStoreSchema},
  bannedBy: {type: AdminSchema},
  reason: {type: String},
  time: {type: Date}
})

export default FeedbackSchema
