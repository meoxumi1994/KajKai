// const getAbsolutePath = getPath(__dirname)
import config from '../config/serverConfig'
import request from 'request'
import enums from '../enum'
import { getUserFromEmail, getUserToken, getUser, getUserInfo, getUserFromPhone, getUserFromFacebookId, validateName, validateLanguage, getUserBasicInfo, getUserFromGoogleId, validateSex} from '../services/UserService.js'
import { User } from '../models'
import {parseNum} from '../utils/NumberUtils'
import EmailService from '../services/EmailService'

const phoneRegrex = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
const emailRegrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const registerNewUser = () => {
	return (req, res) => {
		if (req.body) {
			var body = req.body;
			console.log(body.email);
			if (body.email && body.username && body.password) {
				if (emailRegrex.test(body.email)) {	
					getUserFromEmail(body.email, function(user){
						console.log(body.email)
						console.log(user)
						// console.log(user.length)
						if (user) {
							res.json({status: 'used'})
							return;
						}
						var newuser = new User({email: body.email, 
							password: body.password, 
							name: body.username,
							verified: 0})
						newuser.save(function(){
							EmailService.sendVerifyEmail(newuser.email, getUserToken(newuser._id), function(){
								res.json({status: 'success'})
							})
						})
					})
					return
				}
				// console.log(body.loginId);
				// if (phoneRegrex.test(body.loginId)) {	
				// 	UserService.getUserFromPhone(body.loginId, function(user){
				// 		console.log(body.loginId)
				// 		console.log(user)
				// 		// console.log(user.length)
				// 		if (user) {
				// 			res.json({status: 'already registered'})
				// 			return;
				// 		}
				// 		var newUser = new User({phone: body.loginId, 
				// 			password: body.password, 
				// 			name: body.username})

				// 		UserService.saveNewUser(newUser, function(id){
				// 			if (!id) {
				// 				console.log('error register phone user')
				// 				res.json({status: 'failed'})
				// 			} else {
				// 				res.cookie('token', UserService.getUserToken(id))
				// 				res.json({status: 'success'})
				// 			}
				// 		})
				// 	})
				// 	return
				// } 
				res.json({status: 'error'})
			} else {
				res.json({status: 'error'})
			} 
		} else {
			res.json({status: 'error'})
		}
	}
}

export const getUserController = () => {
	return (req, res) => {
		console.log(req.decoded)
		if (req.decoded) {
			var id = req.decoded._id
			getUser(id, function(user) {
				if (user) {
					getUserInfo(user, function(data){
						res.json(data)
					})
				} else {
					res.json({status: 'failed'})
				}
			})
		} else {
            res.json({status: 'failed'})
		}
	}
}

export const authorizeUser = () => {
	return (req, res) => {
		var loginId = req.body.loginId
		var password = req.body.password
		if (loginId && password) {
			if (phoneRegrex.test(loginId)) {
				getUserFromPhone(loginId, function(user) {
					if (!user || user.password != password) {
						res.json({status : 'failed'})
						return
					}
					// res.cookie('token', UserService.getUserToken(user._id))
					const token = getUserToken(user._id)
                    res.cookie('token', token)
					res.json({status: 'success'})
				})
				
			} 
		} 
		var email = req.body.email
		console.log(email)
		console.log(password)
		if (email && password) {
			// console.log(emailRegrex.te)
			if (emailRegrex.test(email)) {
				getUserFromEmail(email, function(user) {
					console.log(user)
					if (!user || user.password != password || user.verified == 0) {
						res.json({status : 'failed'})
						return
					}
					// res.cookie('token', UserService.getUserToken(user._id))
                    const token = getUserToken(user._id)
                    res.cookie('token', token)
                    res.json({status: 'success'})
				})
			} else {
				res.json({status: 'failed'})
			}
		}
		else {
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

		console.log(req.body.tokenId)
		var options = {
		    url: config.FACEBOOK_API_URL + req.body.tokenId, // 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmYWVjZjI5MWFhM2M4YWZiMDg2ZGUxYmU3ZGJlNmM3NjMyODI3NDYifQ.eyJhenAiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NTA0NjMyODMzODAtc2t0NGxsYXRnNDA0cnUxZTJyYTRoazZjMGllNGVpNjQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDk2NTAyMjA2NTA3OTYwNzUzNTMiLCJlbWFpbCI6Im1pbmh0ZHNlMDI5OTV2bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkMwT3p6QU5MN2pPQlJ5NjYzV2dhenciLCJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNDkzNTU3MDgzLCJleHAiOjE0OTM1NjA2ODMsIm5hbWUiOiJtaW5oIHRyYW4gZHVjIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTzhKRmlybTc1MjAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUhhbEdob1NtWS0tQ1dBQ0FDNllPUmNYa3V2a2ExOFFYdy9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoibWluaCIsImZhbWlseV9uYW1lIjoidHJhbiBkdWMiLCJsb2NhbGUiOiJlbiJ9.jQ6JH0U6q_qWhsY5KkOnWSwrViZQJ_fQ8wsGfgCrDJqlIav6thzb20UWUhjwdd2QnejpmQi2ZrNYBtOoBUEGx7qe8dDaHv_E2zKsXOu3Xv6kSS6aSGRBayNvEOJvT4M8fiWbycpuMT1yX_iXQqtgJ87nVxudHrO6FcxiVjT9SxEiPiOLVAvus0cBF5Yjlo1IU6lRmFt-_tUnVAmGTOuZkFxzgQi2EMa7YKtTbSB5tLq_kclHEv4cZztRDCJmKwFyeDxlu0nJ4kz6OjMGuwEFtwZZFSb4imL3QWg_lSdi221J5beXrFXf21DfIQROFDLmzAx4g2aremjKXqHTMQsbkg',
		    method: 'GET',
		   	headers: headers
		}

		console.log("url" + options.url)

		request(options, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				body = JSON.parse(body)
				console.log(body)

				getUserFromFacebookId(body.id, function(user) {
					if (user) {
						const token = getUserToken(user._id)
						console.log('facebook: ' + token)
						res.cookie('token', token)
						getUserInfo(user, function (data) {
                            res.json({user: data})
                        })
					} else {
						var newuser = new User({socialNetworkType: enums.FACEBOOK, 
							socialNetworkId: body.id,
							name: body.name,
							imageUrl: [body.picture.data.url],
							avatarUrl: body.picture.data.url,
							password: '1234',
							verified: 1})
						newuser.save(function(){
							const token = getUserToken(newuser._id)
							console.log('facebook ' + token + ' ' + newuser._id)
                            res.cookie('token', token)
                            getUserInfo(newuser, function (data) {
                                res.json({user: data})
                            })
						})
					}
				})
			} else {
				res.json({error: 'error'})
			}
		})
	}
}

export const logOutUser = () => {
	return (req, res) => {
		console.log(req.decoded._id)
		res.cookie('token', 'invalid')
		res.json({})
	}
}

export const changeUserPhone = () => {
	return (req, res) => {
		console.log(req.body.phone)
		getUser(req.decoded._id, function(user){
			if (user) {
				user.phone = req.body.phone
				user.save(function(err){
					if (err) {
						res.json({status: 'failed'})
					} else {
						res.json({status: 'success'})
					}
				})
			} else {
				res.json({status: 'failed'})
			}
		})
	}
}

export const updateUserPassword = () => {
	return (req, res) => {
		console.log(req.decoded._id)
		var id = req.decoded._id
		// var id = req.body.id
		console.log(id)
		getUser(id, function(user){
			if (user) {
				if (user.password !== req.body.password || !req.body.newpassword || req.body.newpassword.length < 6
					|| user.password === user.newpassword) {
					res.json({status: 'failed'})
				} else {
					user.password = req.body.newpassword
					user.passwordLastUpdatedAt = new Date()
					user.save(function(){
						res.json({status: 'success'})
					})
				}
			} else {
				res.json({status: 'failed'})
			}
		})
	}
}

export const changeUserProfile = () => {
	return (req, res) => {
		getUser(req.decoded._id, function(user){
			if (user) {
				var updateName = false
				var updateAddress = false
				var updateYOB = false
				if (req.body.username) {
					if (validateName(req.body.username)) {
						user.name = req.body.username
						updateName = true
					} else {
						res.json({error: 'name error'})
						return
					}
				}
				if (req.body.avatarUrl) {
                    user.avatarUrl = req.body.avatarUrl
					if (!user.imageUrl) {
                    	user.imageUrl = [req.body.avatarUrl]
					} else {
                        if (user.imageUrl.indexOf(req.body.avatarUrl) === -1) {
                            user.imageUrl.push(user.avatarUrl)
                        }
                    }
                }
                if (req.body.coverUrl) {
					user.coverUrl = req.body.coverUrl
					if (!user.imageUrl) {
						user.imageUrl = [req.body.coverUrl]
					} else {
                        if (user.imageUrl.indexOf(req.body.coverUrl) === -1) {
                            user.imageUrl.push(req.body.coverUrl)
                        }
                    }
				}
				if (req.body.address) { // TO DO
					user.address = req.body.address
					updateAddress = true
				}
				if (req.body.language) {
					if (validateLanguage(req.body.language)) {
						user.language = req.body.language
					} else {
						res.json({error: 'language error'})
						return
					}
				}
				if (req.body.sex) {
					if (validateSex(req.body.sex)) { //
						user.sex = req.body.sex
					} else {
						res.json({error: 'sex error'})
						return
					}
				}

				if (req.body.yearOfBirth) {
					var year = parseNum(req.body.yearOfBirth)
					if (year == 'NaN') {
						res.json({error: 'year error'})
						return
					}
					if (year >= 1900 && year <= (new Date()).getYear() + 1900) {
						user.yearOfBirth = year
						updateYOB = true
					} else {
						res.json({error: 'year error'})
						return
					}
				}

				if (updateName) {
					user.nameLastUpdatedAt = new Date()
				}
  				if (updateYOB) {
  					user.yearOfBirthLastUpdateAt = new Date()
  				}
  				if (updateAddress) {
  					user.addressLastUpdateAt = new Date()
  				}


				user.save(function(err){
					if (err) {
						res.json({error: 'undefined'})
					} else {
						res.json({status: 'success'})
					}
					return
				})
			} else {
				res.json({status: 'failed'})
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
				getUserFromGoogleId(body.email, function(user) {
					if (user) {
						console.log('google: ' + getUserToken(user._id))
						var token = getUserToken(user._id)
                        res.cookie('token', token)
						getUserInfo(user, function (data) {
                            res.json({user: data})
                        })
					} else {
						var newuser = new User({email : body.email,
							name: body.name,
							imageUrl: [body.picture],
							avatarUrl: body.picture,
							password: '1234',
							verified: 1})
						newuser.save(function(){
                            var token = getUserToken(newuser._id)
                            res.cookie('token', token)
                            getUserInfo(newuser, function (data) {
                                res.json({user: data})
                            })
						})
					}
				})
			} else {
				res.json({error: 'error'})
			}
		})
	}
}

export const getUserInfoController = () => {
	return (req, res) => {
		const id = req.body.id
		getUser(id, function (user) {
			if (user) {
				res.json({status: 'success', user: getUserBasicInfo(user)})
			} else {
				res.json({status: 'failed'})
			}
        })
	}
}