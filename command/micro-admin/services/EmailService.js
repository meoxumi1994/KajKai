import config from '../config/commonConfig'

export const sendBanEmail = (username, email, reason) => {
    var send = require('gmail-send')({
        user: 'kajkaiverify@gmail.com',
        pass: 'verifykajkai',
        to:   email,
        subject: 'KAJKAI BAN',
        text: 'Hi ' + username + '\n' +
        'We would like to inform that your account has been banned! \n' +
        'Reason: ' + reason + '\n' +
        'KAJKAI TEAM :D'
    });
    send({}, (err, res) => {})
}

export const sendUnBanEmail = (username, email, reason) => {
    var send = require('gmail-send')({
        user: 'kajkaiverify@gmail.com',
        pass: 'verifykajkai',
        to:   email,
        subject: 'KAJKAI BAN',
        text: 'Hi ' + username + '\n' +
        'We would like to inform that now you can login to your KAJKAI account normally! \n' +
        'Reason: ' + reason + '\n' +
        'KAJKAI TEAM :D'
    });
    send({}, (err, res) => {})
}
