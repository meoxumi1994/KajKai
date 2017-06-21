import mongoose from '../datasource'

const TitleSchema = new mongoose.Schema({
  id: {type: String},
  postrowId: {type: String},
  content: {type: String}
})

export default TitleSchema
