import mongoose from '../datasource'

const ContentSchema = new mongoose.Schema({
  text: {type: String},
  type: {type: String},
  url: {type: String}
})

export default ContentSchema
