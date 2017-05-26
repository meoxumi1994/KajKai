import mongoose from 'mongoose'
import redis from 'redis'

export const redisClient = redis.createClient()
mongoose.connect('mongodb://localhost/kajkai', (err) => {
    if (err) {
        console.log('err', err)
    }
})
export default mongoose
