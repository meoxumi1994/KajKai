import config from '../config/commonConfig'
import GmailSend from 'gmail-send'

export const sendVerifyEmail = (email, token, next) => {
    const send = GmailSend({
        user: 'kajkaiverify@gmail.com',
        pass: 'verifykajkai',
        to:   email,
        subject: 'Finish your registration',
        text:    'Please click on the following link to finish you registration: \n' +
        config.getServerDomain() + '/emailverification/' + token
    });
    send({}, function(err, res){
        // console.log('* [example1] send(): err:', err, '; res:', res);
        // console.log('done');
        next()
    })
}
