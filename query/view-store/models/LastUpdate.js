import mongoose from '../datasource'

const LastUpdateSchema = new mongoose.Schema({
  storeName: {type: Date},
  phone: {type: Date},
  addressMap:{type: Date},
  address: {type: Date}
})

export default LastUpdateSchema
