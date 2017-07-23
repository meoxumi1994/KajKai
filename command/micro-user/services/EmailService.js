import config from '../config/commonConfig'

export const sendVerifyEmail = (email, token, next) => {
    var send = require('gmail-send')({
        user: 'kajkaiverify@gmail.com',
        pass: 'verifykajkai',
        to:   email,
        subject: 'KAJKAI REGISTRATION',
        text:    'Please click on following link to finish you registration: \n' +
        config.getServerDomain() + '/emailverification/' + token
    });
    send({}, function(err, res){
        // console.log('* [example1] send(): err:', err, '; res:', res);
        // console.log('done');
        next()
    })
}
