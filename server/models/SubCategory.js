import mongoose from '../datasource'

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = SubCategorySchema
