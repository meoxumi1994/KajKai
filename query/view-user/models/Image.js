import mongoose from '../datasource'

const ImageSchema = new mongoose.Schema({
    url: {type: String},
    time: {type: Date}
})

export default ImageSchema
