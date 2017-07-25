import mongoose from '../datasource'

const IDCommentSellpostSchema = new mongoose.Schema({
  commentId: {type: String},
  sellpostId: {type: String}
})

export default IDCommentSellpostSchema
