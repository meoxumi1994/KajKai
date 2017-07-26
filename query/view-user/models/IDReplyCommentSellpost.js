import mongoose from '../datasource'

const IDReplyCommentSellpostSchema = new mongoose.Schema({
  replyId: {type: String},
  commentId: {type: String},
  sellpostId: {type: String}
})

export default IDReplyCommentSellpostSchema
