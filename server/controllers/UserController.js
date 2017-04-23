// const getAbsolutePath = getPath(__dirname)
var User = require('../services/UserService.js')
var connection = require('../config/mysqlDB.js')
var Email = require('../services/EmailService.js')

export const suckthisshit = () => {
  return (req, res) => {
    // Send the rendered page back to the client
    // res.send(serverSideRenderingDemo({login: { type: 'LOG_IN_SUCCESS' }}, chatApp, ChatAppContainer))
    console.log('a hehe');
    res.json({hello: 'hello'});
  }
}

export const registerNewUser = () => {
	return (req, res) => {
		if (req.body) {
			var body = req.body;
			// console.log(body);

			if (body.loginID && body.username && body.password) {			
				User.getUserFromEmail(body.loginID, connection, function(user){
					if (user) {
						// console.log("hehe");
						res.json({status: 'email is already registered'})
						return;
					}
					var newUser = new User.User(body.loginID, body.password, body.username, body.address,
					body.phone, '', '')

					User.saveObjectToDB(newUser, connection, function(){
						// console.log('success');
						let email = newUser.email
						Email.sendVerifyEmail(email, 
							User.getUserToken(email) ,function(){
							console.log('sent')
						})
						res.json({status: 'success'})
						return
					})
				})
			} else {
				res.json({status: 'failed'})
			} 
		} else {
			res.json({status: 'failed'})
		}
	}
}

export const sendVerifyEmail = () => {
	return (req, res) => {
		console.log(req.body)
		if (req.body && req.body.email) {
			let email = req.body.email
			Email.sendVerifyEmail(email, 
				User.getUserToken(email) ,function(){
				console.log('sent')
			})
		}
	}
}

export const comfirmEmailVerification = () => {
	return (req, res) => {
		let token = req.params.token
		var user = User.verifyToken(token)

		if (user) {
			User.verifiedUser(user.user, connection, function(){
				res.redirect('http://google.com')
			})
		} else {
			res.redirect('http://dantri.com')
		}
	}
}



