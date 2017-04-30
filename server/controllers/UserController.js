// const getAbsolutePath = getPath(__dirname)
import config from '../config/serverConfig'
var User = require('../services/UserService.js')
var connection = require('../config/mysqlDB.js')
var Email = require('../services/EmailService.js')
var request = require('request')


const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

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

				if (emailRegrex.test(body.loginID)) {	
					User.getUserFromEmail(body.loginID, connection, function(user){
						if (user) {
							// console.log("hehe");
							res.json({status: 'already registered'})
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
					return
				}
				console.log(body.loginID);
				if (phoneRegrex.test(body.loginID)) {	

					User.getUserFromPhone(body.loginID, connection, function(user){
						if (user) {
							// console.log("hehe");
							res.json({status: 'already registered'})
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
					return
				} 
				res.json({status: 'failed'})
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

export const findLoginID = () => {
	return (req, res) => {
		if (req.body && req.body.loginID) {
			let loginID = req.body.loginID

			if (phoneRegrex.test(loginID)) {

				User.checkPhoneExist(loginID, connection, function(result){
					if (result) {
						res.json({type: 'yes'})
					} else {
						res.json({type: 'no'})
					}
				})
			} else {
				if (emailRegrex.test(loginID)) {
					User.checkEmailExist(loginID, connection, function(result){
					if (result) {
						res.json({type: 'yes'})
					} else {
						res.json({type: 'no'})
					}
				})
				} else {
					res.json({type: 'no'})
				}
			}
		} else {
			res.json({type: 'no'})
		}
	}
}

export const getUser = () => {
	return (req, res) => {
		console.log(req.decoded)
		if (req.decoded) {
			var email = req.decoded.user
			User.getUserFromEmail(email, connection, function(user){
				res.json({username : user.username})
			})
		} else {
			res.json({error: 'unknown'})
		}
	}
}



export const getFacebookUser = () => {
	return (req, res) => {

		var headers = {
		    'User-Agent':       'Super Agent/0.0.1',
		    'Content-Type':     'application/x-www-form-urlencoded'
		}

		// Configure the request
		console.log(req.tokenId)
		var options = {
		    url: config.FACEBOOK_API_URL + req.body.tokenId, // 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmYWVjZjI5MWFhM2M4YWZiMDg2ZGUxYmU3ZGJlNmM3NjMyODI3NDYifQ.eyJhenAiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2NTAyMjA2NTA3OTYwNzUzNTMiLCJlbWFpbCI6Im1pbmh0ZHNlMDI5OTV2bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkMwT3p6QU5MN2pPQlJ5NjYzV2dhenciLCJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDkzNTU3MDgzLCJleHAiOjE0OTM1NjA2ODMsIm5hbWUiOiJtaW5oIHRyYW4gZHVjIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTzhKRmlybTc1MjAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUhhbEdob1NtWS0tQ1dBQ0FDNllPUmNYa3V2a2ExOFFYdy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoibWluaCIsImZhbWlseV9uYW1lIjoidHJhbiBkdWMiLCJsb2NhbGUiOiJlbiJ9.jQ6JH0U6q_qWhsY5KkOnWSwrViZQJ_fQ8wsGfgCrDJqlIav6thzb20UWUhjwdd2QnejpmQi2ZrNYBtOoBUEGx7qe8dDaHv_E2zKsXOu3Xv6kSS6aSGRBayNvEOJvT4M8fiWbycpuMT1yX_iXQqtgJ87nVxudHrO6FcxiVjT9SxEiPiOLVAvus0cBF5Yjlo1IU6lRmFt-_tUnVAmGTOuZkFxzgQi2EMa7YKtTbSB5tLq_kclHEv4cZztRDCJmKwFyeDxlu0nJ4kz6OjMGuwEFtwZZFSb4imL3QWg_lSdi221J5beXrFXf21DfIQROFDLmzAx4g2aremjKXqHTMQsbkg',
		    method: 'GET',
		   	headers: headers
		    // form: {'key1': 'xxx', 'key2': 'yyy'}
		}

		// console.log(options.url);
		request(options, function(error, response, body) {
			// console.log(body)
			if (!error && response.statusCode == 200) {
				// console.log(body)
				body = JSON.parse(body)
				res.json(
				{
					username: body.name,
        			imageUrl: body.picture.data.url
        		})
			} else {
				res.json(error: 'error')
			}
		})
	}
}



export const getGoogleUser = () => {
	return (req, res) => {

		var headers = {
		    'User-Agent':       'Super Agent/0.0.1',
		    'Content-Type':     'application/x-www-form-urlencoded'
		}

		// Configure the request
		var options = {
		    url: config.GOOGLE_API_URL + req.body.tokenId, // 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmYWVjZjI5MWFhM2M4YWZiMDg2ZGUxYmU3ZGJlNmM3NjMyODI3NDYifQ.eyJhenAiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2NTAyMjA2NTA3OTYwNzUzNTMiLCJlbWFpbCI6Im1pbmh0ZHNlMDI5OTV2bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkMwT3p6QU5MN2pPQlJ5NjYzV2dhenciLCJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDkzNTU3MDgzLCJleHAiOjE0OTM1NjA2ODMsIm5hbWUiOiJtaW5oIHRyYW4gZHVjIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTzhKRmlybTc1MjAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUhhbEdob1NtWS0tQ1dBQ0FDNllPUmNYa3V2a2ExOFFYdy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoibWluaCIsImZhbWlseV9uYW1lIjoidHJhbiBkdWMiLCJsb2NhbGUiOiJlbiJ9.jQ6JH0U6q_qWhsY5KkOnWSwrViZQJ_fQ8wsGfgCrDJqlIav6thzb20UWUhjwdd2QnejpmQi2ZrNYBtOoBUEGx7qe8dDaHv_E2zKsXOu3Xv6kSS6aSGRBayNvEOJvT4M8fiWbycpuMT1yX_iXQqtgJ87nVxudHrO6FcxiVjT9SxEiPiOLVAvus0cBF5Yjlo1IU6lRmFt-_tUnVAmGTOuZkFxzgQi2EMa7YKtTbSB5tLq_kclHEv4cZztRDCJmKwFyeDxlu0nJ4kz6OjMGuwEFtwZZFSb4imL3QWg_lSdi221J5beXrFXf21DfIQROFDLmzAx4g2aremjKXqHTMQsbkg',
		    method: 'GET',
		   	headers: headers
		}

		request(options, function(error, response, body) {
			
			if (!error && response.statusCode == 200) {
				// console.log(body.name)
				body = JSON.parse(body)
				res.json(
				{
					username: body.name,
        			imageUrl: body.picture
        		})

			} else {
				res.json(error: 'error')
			}
		})
	}
}


