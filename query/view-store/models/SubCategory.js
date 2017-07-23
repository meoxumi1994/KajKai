import mongoose from '../datasource'

const SubCategorySchema = new mongoose.Schema({
  name: {type: String}
})

export default SubCategorySchema
