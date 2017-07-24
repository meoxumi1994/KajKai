import mongoose from '../datasource'

const AdminSchema = new mongoose.Schema({
  adminName: {type: String},
  password: {type: String}
})

export default AdminSchema
