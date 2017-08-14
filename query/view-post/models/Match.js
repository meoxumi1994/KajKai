import mongoose from '../datasource'

const MatchSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String},
  link: {type: String}
})

export default MatchSchema
