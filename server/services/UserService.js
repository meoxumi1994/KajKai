var jwt = require('jsonwebtoken');

module.exports = {
  User,
  getUserToken,
  getUserFromEmail,
  getUserFromFacebookId,
  getUserFromGoogleId,
  verifyToken,
  saveObjectToDB,
};

function User(email, password, username, address, phone, facebookid, googleid){
	// console.log('hello '  + email);
	this.email = email;
	this.password = password;
	this.username = username;
	this.address = address;
	this.phone = phone;
	this.facebookid = facebookid;
	this.googleid = googleid;
	// console.log('hello');
}

function getUserFromEmail(email, connection, next) {
	// console.log('Select * from user where email = ' + "'" + email + "'");
	connection.query('Select * from user where email = ' + "'" + email + "'", function(error, results, fields){
		if (error) {
			console.log(error);
			next(null);
			return
		}

		if (results.length == 0) {
			next(null);
			return;
		}
		console.log(results[0].email);
		console.log(results[0].password);
		next(new User(results[0].email, results[0].password, results[0].username, results[0].address,
				results[0].phone, results[0].facebookid, results[0].googleid));
	})
}

function getUserFromFacebookId(facebookid, connection, next) {
	connection.query('Select * from user where facebookid = ' + "'" + facebookid + "'", function(error, results, fields){
		if (error) {
			console.log(error);
			next(null);
			return;
		}
		// console.log(results[0].iduser + ' ' + results[0].email)
		if (results.length == 0) {
			next(null);
			return
		}

		next(new User(results[0].email, results[0].password, results[0].username, results[0].address,
				results[0].phone, results[0].facebookid, results[0].googleid));
	})
}

function getUserFromGoogleId(googleid, connection, next) {
	connection.query('Select * from user where googleid = ' + "'" + googleid + "'", function(error, results, fields){
		if (error) {
			console.log(error);
			next(null);
			return;
		}
		// console.log(results[0].iduser + ' ' + results[0].email)
		if (results.length == 0) {
			next(null);
			return;
		}

		next(new User(results[0].email, results[0].password, results[0].username, results[0].address,
				results[0].phone, results[0].facebookid, results[0].googleid));
	})
}

function getUserToken(username) {
	var token = jwt.sign({user: username}, 'secret', { expiresIn: 60 * 60 });
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

function saveObjectToDB(user, connection) {
	var email = (user.email) ? "'" + user.email + "'" : 'null';
	var password = (user.password) ? "'" + user.password + "'" : 'null';
	var username = (user.username) ? "'" + user.username + "'" : 'null';
	var address = (user.address) ? "'" + user.address + "'" : 'null';
	var phone = (user.phone) ? "'" + user.phone + "'" : 'null';
	var facebookid = (user.facebookid) ? "'" + user.facebookid + "'" : 'null';
	var googleid = (user.googleid) ? "'" + user.googleid + "'" : 'null';


	connection.query('insert into user (email, password, username, address, phone, facebookid, googleid) '
		+ 'values (' + email + ","
							+ password + ","
							+ username + ","
							+ address + ","
							+ phone + ","
							+ facebookid + ","
							+ googleid + ")");
}

