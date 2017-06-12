const config = {
    ISTEST : true,
    PROTOCOL: ['http', 'http'],
    IP: ['dyrzutxpmw2we.cloudfront.net', '13.228.23.106'], // 34.209.206.70 10.20.16.137
    PORT: 8080,
    getDomain: () => {
        if(config.ISTEST)
            return config.PROTOCOL[0] + '://' + config.IP[0];
        else
            return config.PROTOCOL[1] + '://' + config.IP[1] + ':' + config.PORT;
    },
    OTHERPORT: 3000,
    REDIRECTURL: 'http://www.kajkai.com',
    FACEBOOK_API_URL: 'https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=',
    GOOGLE_API_URL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='
}

export default config
