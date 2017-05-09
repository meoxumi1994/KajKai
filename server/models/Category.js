import mongoose from '../datasource'
import SubCategory from './SubCategory'

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subcategory: {type: [SubCategory]}
});

module.exports = CategorySchema
