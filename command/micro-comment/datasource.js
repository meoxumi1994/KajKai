import mongoose from 'mongoose'
import config from './config/pubSubConfig'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@localhost/kajkai-comment', {
  useMongoClient: true
}, (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
