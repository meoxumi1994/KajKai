const config = {
    PROTOCOL: 'https',
    IP: 'dqp2llohmlrz8.cloudfront.net',
    PORT: 7777,
    getDomain: () => (config.PROTOCOL + '://' + config.IP),
    OTHERPORT: 3000,
    REDIRECTURL: 'https://dqp2llohmlrz8.cloudfront.net',
    FACEBOOK_API_URL: 'https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=',
    GOOGLE_API_URL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='
}

export default config
