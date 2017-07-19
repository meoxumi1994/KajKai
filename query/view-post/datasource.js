import mongoose from 'mongoose'
import config from './config/commonConfig'

mongoose.Promise = global.Promise
mongoose.connect(config.getDataSource(), {
  useMongoClient: true
}, (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
