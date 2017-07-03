import mongoose from 'mongoose'
import redis from 'redis'
import config from './config/pubSubConfig'

export const redisClient = redis.createClient(config)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/kajkai-chat', { useMongoClient: true }, (err) => {
    if (err) {
        console.log('err', err)
    }
})
export default mongoose
