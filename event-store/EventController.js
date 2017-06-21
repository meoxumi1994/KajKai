import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/kajkai-event', (err) => {
    if (err) {
        console.log('error login mongoose', err)
    }
})

const EventSchema = new mongoose.Schema({
  channel: {type: String},
  message: {type: mongoose.Schema.Types.Mixed}
})

const Event = mongoose.model('Event', EventSchema)

const saveEvent = (channel, message) => {
  const event = new Event({
    channel,
    message
  })

  event.save()
}

export default saveEvent