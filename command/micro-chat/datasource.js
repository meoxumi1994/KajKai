import mongoose from 'mongoose'
import config from './config/pubSubConfig'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@localhost/kajkai-chat', {
  useMongoClient: true
}, (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
