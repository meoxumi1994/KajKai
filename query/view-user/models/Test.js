import mongoose from '../datasource'
import ItemSchema from './Item'

const TestSchema = new mongoose.Schema({
  username: {type: String},
  password: {type: String},
  list: [ItemSchema]
})

export default TestSchema
