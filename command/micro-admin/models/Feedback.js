import mongoose from '../datasource'

const FeedbackSchema = new mongoose.Schema({
  id: {type: String},
  adminName: {type: String},
  password: {type: String}
})

export default FeedbackSchema
