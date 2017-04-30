import mongoose from '../datasource'
var UserSchema = require('./User')

var User = mongoose.model('User', UserSchema)

module.exports = {
	User
}