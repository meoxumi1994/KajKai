import mongoose from '../datasource'
import SubCategorySchema  from './SubCategory'

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subcategory: {type: [SubCategorySchema]}
})

export default CategorySchema
