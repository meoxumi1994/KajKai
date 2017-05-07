import config from '../config/serverConfig'

module.exports = {
  sendVerifyEmail
};

function sendVerifyEmail(email, token, next) {
	var send = require('gmail-send')({
	  	user: 'kajkaiverify@gmail.com',               // Your GMail account used to send emails 
	  	pass: 'verifykajkai',             // Application-specific password 
	  	to:   email,     
	  	// from:   '"User" <user@gmail.com>'  // from: by default equals to user 
	  	// replyTo:'user@gmail.com'           // replyTo: by default undefined 
	  	subject: 'Finish your registration',
	  	text:    'Please click on following link to finish you registration: \n' + 
	  		'13.228.23.106:8080' + '/emailverification/' 
	  		+ token
	  	// html:    '<b>html text text</b>' 
	});
	console.log('hehe')
	send({}, function(err, res){
		console.log('* [example1] send(): err:', err, '; res:', res);
		console.log('done');
		next()
	})
}



