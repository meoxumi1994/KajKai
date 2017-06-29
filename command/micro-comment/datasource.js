import mongoose from 'mongoose'
import redis from 'redis'

export const redisClient = redis.createClient()
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/kajkai-comment', (err) => {
    if (err) {
        console.log('err', err)
    }
})
export default mongoose
