import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/kajkai-like', (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
