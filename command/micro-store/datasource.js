import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/kajkai', (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose