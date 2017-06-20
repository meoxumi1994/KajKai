const config = {
    DEBUG : true,
    PROTOCOL: 'http',
    IP: ['localhost', '13.228.23.106'], // 34.209.206.70 10.20.16.137
    PORT: 8080,
    getDomain: () => {
        if (config.DEBUG)
            return config.PROTOCOL + '://' + config.IP[0] + ':' + config.PORT;
        else
            return config.PROTOCOL + '://' + config.IP[1] + ':' + config.PORT;
    },
    CLIENT_PORT: 8080,
    REDIRECT_URL: 'http://www.kajkai.com',
    FACEBOOK_API_URL: 'https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=',
    GOOGLE_API_URL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='
}

export default config
