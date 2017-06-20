import mongoose from '../datasource'

const LastUpdateSchema = new mongoose.Schema({
  username: {type: Date},
  phone: {type: Date},
  address: {type: Date}
});

export default LastUpdateSchema
