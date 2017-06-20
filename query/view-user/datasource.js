import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/kajkai', (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
