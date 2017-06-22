import mongoose from '../datasource'
import BasicUserSchema from './Chat'

const BasicUserSchema = new mongoose.Schema({
  id: {type: String},
  username: {type: String},
  avatarUrl: {type: String}
})

export default BasicUserSchema
