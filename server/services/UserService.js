import { User } from '../models'
import jwt from 'jsonwebtoken'
import enums from '../enum'

module.exports = {
  getUserToken,
  getUser,
  getUserFromFacebookId,
  getUserFromGoogleId,
  getUserFromEmail,
  getUserFromPhone,
  verifyToken,
  saveNewUser
};

function getUser(id, next) {
	User.findById(id, function(err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromEmail(_email, next) {
	User.findOne({email: _email}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromPhone(_phone, next) {
	User.findOne({phone: _phone}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromFacebookId(facebookid, next) {
	User.findOne({socialNetworkType: enums.FACEBOOK, socialNetworkId: facebookid}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserFromGoogleId(googleid, next) {
	User.findOne({socialNetworkType: enums.GOOGLE, socialNetworkId: googleid}, function (err, user) {
		if (err) {
			next(null)
		} else {
			next(user)
		}
	})
}

function getUserToken(id) {
	var token = jwt.sign({_id: id}, 'secret', { expiresIn: 60 * 60 });
	return token;
}

function verifyToken(token) {
	try {
		var decoded = jwt.verify(token, 'secret');
		return decoded;
	} catch(err) {
		return null;
	}
}

function saveNewUser(user, next) {
	user.save(function(err) {
		if (err) {
			next(null)
		} else {
			next(user._id)
		}
	})
}

function updateUserPhone(id, phone, next) {
	UserService.getUser(id, function(user){
		if (user) {
			user.phone = phone
			user.save(function(err){
				if (err) {
					next('failed')
				} else {
					next('success')
				}
			})
		} else {
			next('failed')
		}
	})
}

// function verifiedUser(email, connection, next) {
// 	connection.query('update user set verified = 1 where email = ' 
// 		+ "'" + email + "'", function(){
// 		next()
// 	})
// }


// function saveObjectToDB(user, connection, next) {
// 	var email = (user.email) ? "'" + user.email + "'" : 'null';
// 	var password = (user.password) ? "'" + user.password + "'" : 'null';
// 	var username = (user.username) ? "'" + user.username + "'" : 'null';
// 	var address = (user.address) ? "'" + user.address + "'" : 'null';
// 	var phone = (user.phone) ? "'" + user.phone + "'" : 'null';
// 	var facebookid = (user.facebookid) ? "'" + user.facebookid + "'" : 'null';
// 	var googleid = (user.googleid) ? "'" + user.googleid + "'" : 'null';
// 	var verified = (user.verified) ? user.verified : '';

// 	connection.query('insert into user (email, password, username, address, phone, facebookid, googleid) '
// 		+ 'values (' + email + ","
// 							+ password + ","
// 							+ username + ","
// 							+ address + ","
// 							+ phone + ","
// 							+ facebookid + ","
// 							+ googleid + ")", function(){
// 								next()
// 							});
// }

