import mongoose from '../datasource'

const CertificateSchema = new mongoose.Schema({
  images: [String],
  content: {type: String}
})

export default CertificateSchema
