export const config = {
    SERVER_PORT: 8080,
    CLIENT_PORT: 3000,
    // EC2 I: 13.228.23.106
    getServerDomain: () => ('http://localhost' + ':' + config.SERVER_PORT),
    getClientDomain: () => ('http://localhost' + ':' + config.CLIENT_PORT),
    FACEBOOK_API_URL: 'https://graph.facebook.com/me?fields=id,name,picture.type(large)&access_token=',
    GOOGLE_API_URL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='
}
