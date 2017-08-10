import config from '../config/commonConfig'

export const sendVerifyEmail = (email, token, next) => {
    var send = require('gmail-send')({
        user: 'kajkaiverify@gmail.com',
        pass: 'verifykajkai',
        to:   email,
        subject: 'ĐĂNG KÝ KAJKAI',
        text:    'Hãy truy cập đường dẫn bên dưới để hoàn thành việc đăng ký tài khoản KAJKAI của bạn: \n' +
        config.getServerDomain() + '/emailverification/' + token
    });
    send({}, function(err, res){
        // console.log('* [example1] send(): err:', err, '; res:', res);
        // console.log('done');
        next()
    })
}
