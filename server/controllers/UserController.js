// const getAbsolutePath = getPath(__dirname)
import config from '../config/serverConfig'
import UserService from '../services/UserService.js'
import request from 'request'
import { User } from '../models'
import enums from '../enum'
// var Email = require('../services/EmailService.js')
// var request = require('request')

const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const registerNewUser = () => {
	return (req, res) => {
		if (req.body) {
			var body = req.body;
			console.log(body.loginId);
			if (body.loginId && body.username && body.password) {	

				if (emailRegrex.test(body.loginId)) {	
					UserService.getUserFromEmail(body.loginId, function(user){
						console.log(body.loginId)
						console.log(user)
						// console.log(user.length)
						if (user) {
							res.json({status: 'already registered'})
							return;
						}
						var newUser = new User({email: body.loginId, 
							password: body.password, 
							name: body.username})

						UserService.saveNewUser(newUser, function(id){
							if (!id) {
								console.log('error register phone user')
								res.json({status: 'failed'})
							} else {
								res.cookie('token', UserService.getUserToken(id))
								res.json({status: 'success'})
							}
						})
					})
					return
				}
				console.log(body.loginId);
				if (phoneRegrex.test(body.loginId)) {	
					UserService.getUserFromPhone(body.loginId, function(user){
						console.log(body.loginId)
						console.log(user)
						// console.log(user.length)
						if (user) {
							res.json({status: 'already registered'})
							return;
						}
						var newUser = new User({phone: body.loginId, 
							password: body.password, 
							name: body.username})

						UserService.saveNewUser(newUser, function(id){
							if (!id) {
								console.log('error register phone user')
								res.json({status: 'failed'})
							} else {
								res.cookie('token', UserService.getUserToken(id))
								res.json({status: 'success'})
							}
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

// export const sendVerifyEmail = () => {
// 	return (req, res) => {
// 		console.log(req.body)
// 		if (req.body && req.body.email) {
// 			let email = req.body.email
// 			Email.sendVerifyEmail(email, 
// 				User.getUserToken(email) ,function(){
// 				console.log('sent')
// 			})
// 		}
// 	}
// }

// export const comfirmEmailVerification = () => {
// 	return (req, res) => {
// 		let token = req.params.token
// 		var user = User.verifyToken(token)

// 		if (user) {
// 			User.verifiedUser(user.user, connection, function(){
// 				res.redirect('http://google.com')
// 			})
// 		} else {
// 			res.redirect('http://dantri.com')
// 		}
// 	}
// }

// export const findLoginID = () => {
// 	return (req, res) => {
// 		if (req.body && req.body.loginID) {
// 			let loginID = req.body.loginID

// 			if (phoneRegrex.test(loginID)) {

// 				User.checkPhoneExist(loginID, connection, function(result){
// 					if (result) {
// 						res.json({type: 'yes'})
// 					} else {
// 						res.json({type: 'no'})
// 					}
// 				})
// 			} else {
// 				if (emailRegrex.test(loginID)) {
// 					User.checkEmailExist(loginID, connection, function(result){
// 					if (result) {
// 						res.json({type: 'yes'})
// 					} else {
// 						res.json({type: 'no'})
// 					}
// 				})
// 				} else {
// 					res.json({type: 'no'})
// 				}
// 			}
// 		} else {
// 			res.json({type: 'no'})
// 		}
// 	}
// }

export const getUser = () => {
	return (req, res) => {
		console.log(req.decoded)
		if (req.decoded) {
			var id = req.decoded._id
			console.log('this ' + id)
			UserService.getUser(id, function(user) {
				if (user) {
					console.log(user)
					res.json({name: user.name, imageUrl: user.imageUrl})
				} else {
					res.end()
				}
			})
		} else {
			res.end()
		}
	}
}

export const authorizeUser = () => {
	return (req, res) => {
		var loginId = req.body.loginId
		var password = req.body.password
		if (loginId && password) {
			if (phoneRegrex.test(loginId)) {
				UserService.getUserFromPhone(loginId, function(user) {
					if (!user || user.password != password) {
						res.json({status : 'failed'})
						return
					}
					res.cookie('token', UserService.getUserToken(user._id))
					res.json({status: 'success'})
				})
				
			} else {
				if (emailRegrex.test(loginId)) {
					UserService.getUserFromEmail(loginId, function(user) {
						if (!user || user.password != password) {
							res.json({status : 'failed'})
							return
						}
						res.cookie('token', UserService.getUserToken(user._id))
						res.json({status: 'success'})
					})
				} else {
					res.json({status: 'failed'})
				}
			}
		} else {
			res.json({status: 'failed'})
		}

	}
}

export const getFacebookUser = () => {
	return (req, res) => {

		var headers = {
		    'User-Agent':       'Super Agent/0.0.1',
		    'Content-Type':     'application/x-www-form-urlencoded'
		}

		console.log(req.tokenId)
		var options = {
		    url: config.FACEBOOK_API_URL + req.body.tokenId, // 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmYWVjZjI5MWFhM2M4YWZiMDg2ZGUxYmU3ZGJlNmM3NjMyODI3NDYifQ.eyJhenAiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2NTAyMjA2NTA3OTYwNzUzNTMiLCJlbWFpbCI6Im1pbmh0ZHNlMDI5OTV2bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkMwT3p6QU5MN2pPQlJ5NjYzV2dhenciLCJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDkzNTU3MDgzLCJleHAiOjE0OTM1NjA2ODMsIm5hbWUiOiJtaW5oIHRyYW4gZHVjIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTzhKRmlybTc1MjAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUhhbEdob1NtWS0tQ1dBQ0FDNllPUmNYa3V2a2ExOFFYdy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoibWluaCIsImZhbWlseV9uYW1lIjoidHJhbiBkdWMiLCJsb2NhbGUiOiJlbiJ9.jQ6JH0U6q_qWhsY5KkOnWSwrViZQJ_fQ8wsGfgCrDJqlIav6thzb20UWUhjwdd2QnejpmQi2ZrNYBtOoBUEGx7qe8dDaHv_E2zKsXOu3Xv6kSS6aSGRBayNvEOJvT4M8fiWbycpuMT1yX_iXQqtgJ87nVxudHrO6FcxiVjT9SxEiPiOLVAvus0cBF5Yjlo1IU6lRmFt-_tUnVAmGTOuZkFxzgQi2EMa7YKtTbSB5tLq_kclHEv4cZztRDCJmKwFyeDxlu0nJ4kz6OjMGuwEFtwZZFSb4imL3QWg_lSdi221J5beXrFXf21DfIQROFDLmzAx4g2aremjKXqHTMQsbkg',
		    method: 'GET',
		   	headers: headers
		}

		request(options, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body)
				console.log(body)

				UserService.getUserFromFacebookId(body.id, function(user) {
					if (user) {
						res.cookie('token', UserService.getUserToken(user._id))
						console.log('facebook: ' + UserService.getUserToken(user._id))
						res.json({ username: body.name,
			        			imageUrl: body.picture.data.url})
					} else {
						var newuser = new User({socialNetworkType: enums.FACEBOOK, 
							socialNetworkId: body.id,
							name: body.name,
							imageUrl: body.picture.data.url,
							password: '1234'})
						newuser.save(function(){
							res.cookie('token', UserService.getUserToken(newuser._id))
							console.log('facebook ' + UserService.getUserToken(newuser._id))
							res.json({ username: body.name,
			        			imageUrl: body.picture.data.url})
						})
					}
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

		var options = {
		    url: config.GOOGLE_API_URL + req.body.tokenId, 
		    method: 'GET',
		   	headers: headers
		}

		request(options, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body)
				UserService.getUserFromGoogleId(body.email, function(user) {
					if (user) {
						res.cookie('token', UserService.getUserToken(user._id))
						console.log('google: ' + UserService.getUserToken(user._id))
						res.json({username: body.name,
		        				imageUrl: body.picture})
					} else {
						var newuser = new User({email : body.email,
							name: body.name,
							imageUrl: body.picture,
							password: '1234'})
						newuser.save(function(){
							res.cookie('token', UserService.getUserToken(newuser._id))
							res.json({username: body.name,
			        				imageUrl: body.picture})
						})
					}
				})
			} else {
				res.json(error: 'error')
			}
		})
	}
}


