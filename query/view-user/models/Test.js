import mongoose from '../datasource'

const TestSchema = new mongoose.Schema({
  username: {type: String},
  password: {type: String}
})

export default TestSchema
