import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:admin@localhost/kajkav-post', {
  useMongoClient: true
}, (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
