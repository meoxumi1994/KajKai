import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/kajkai', (err) => {
  if (err) {
    console.log('err', err)
  }
})
export default mongoose
