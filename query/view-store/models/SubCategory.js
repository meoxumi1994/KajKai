import mongoose from '../datasource'

export const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true }
})

export SubCategorySchema
