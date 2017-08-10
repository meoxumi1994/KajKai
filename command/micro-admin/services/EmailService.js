import config from '../config/commonConfig'

export const sendBanEmail = (username, email, reason, language) => {
  if (language == 'en') {
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
  } else {
    var send = require('gmail-send')({
        user: 'kajkaiverify@gmail.com',
        pass: 'verifykajkai',
        to:   email,
        subject: 'KAJKAI BAN',
        text: 'Chào ' + username + '\n' +
        'Chúng tôi rất tiếc phải thông báo rằng tài khoản KAJKAI của bạn đã bị khóa! \n' +
        'Lí do: ' + reason + '\n' +
        'KAJKAI TEAM :D'
    });
    send({}, (err, res) => {})
  }
}

export const sendUnBanEmail = (username, email, reason, language) => {
    if (language == 'en') {
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
    } else {
      var send = require('gmail-send')({
          user: 'kajkaiverify@gmail.com',
          pass: 'verifykajkai',
          to:   email,
          subject: 'KAJKAI BAN',
          text: 'Chào ' + username + '\n' +
          'Chúng tôi rất vui khi thông báo rằng tài khoản KAJKAI của bạn đã hoạt động bình thường trở lại! \n' +
          'Lí do: ' + reason + '\n' +
          'KAJKAI TEAM :D'
      });
      send({}, (err, res) => {})
    }
}

export const sendResolveEmail = (username, email, content, language) => {
    if (language == 'en') {
      var send = require('gmail-send')({
          user: 'kajkaiverify@gmail.com',
          pass: 'verifykajkai',
          to:   email,
          subject: 'KAJKAI BAN',
          text: 'Hi ' + username + '\n' +
          'We would like to inform that your feedback has been resolved by KajKai admin! \n' +
          'Content: ' + content + '\n' +
          'KAJKAI TEAM :D'
      });
      send({}, (err, res) => {})
    } else {
      var send = require('gmail-send')({
          user: 'kajkaiverify@gmail.com',
          pass: 'verifykajkai',
          to:   email,
          subject: 'KAJKAI BAN',
          text: 'Chào ' + username + '\n' +
          'Chúng tôi muốn thông báo rằng phản hồi của bạn đã được giải quyết bởi ban quản trị KAJKAI! \n' +
          'Nội dung: ' + content + '\n' +
          'KAJKAI TEAM :D'
      });
      send({}, (err, res) => {})
    }
}
