import mongoose from '../datasource'
import LikerSchema from './Liker'

const SellpostLikerSchema = new mongoose.Schema({
  sellpostId: {type: String},
  likers: [LikerSchema]
})

export default SellpostLikerSchema
