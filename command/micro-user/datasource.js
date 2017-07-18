import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@localhost/kajkai-user', {
mongoose.connect('mongodb://localhost/kajkai-user', {
  useMongoClient: true
}, (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})
export default mongoose
