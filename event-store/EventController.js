import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@localhost/kajkas-event', {
  useMongoClient: true
}, (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})

const EventSchema = new mongoose.Schema({
  channel: {type: String},
  message: {type: mongoose.Schema.Types.Mixed},
  time: {type: Date}
})

const Event = mongoose.model('Event', EventSchema)

const saveEvent = (channel, message) => {
  const event = new Event({
    channel,
    message,
    time: Date.now()
  })

  event.save(() => {})
}

export default saveEvent
