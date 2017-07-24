import mongoose from '../datasource'

const AdminSchema = new mongoose.Schema({
  id: {type: String},
  adminName: {type: String},
  password: {type: String}
})

export default AdminSchema
