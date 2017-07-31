import mongoose from '../datasource'

const ItemSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number}
})

export default ItemSchema
