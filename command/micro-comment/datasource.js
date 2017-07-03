import mongoose from 'mongoose'
import config from './config/pubSubConfig'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/kajkai-comment', { useMongoClient: true }, (err) => {
    if (err) {
        console.log('err', err)
    }
})
export default mongoose
