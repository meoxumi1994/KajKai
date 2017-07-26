import mongoose from '../datasource'

const InterestSchema = new mongoose.Schema({
  id: {type: String},
  categoryId: {type: String},
  categoryName: {type: String},
  longitude: {type: Number},
  latitude: {type: Number},
  time: {type: Date}
})

export default InterestSchema
