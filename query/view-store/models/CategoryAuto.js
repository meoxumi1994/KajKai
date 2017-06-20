import mongoose from '../datasource'

const CategoryAutoSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String}
})

export default CategoryAutoSchema
