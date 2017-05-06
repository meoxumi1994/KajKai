import mongoose from '../datasource'

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = CategorySchema
