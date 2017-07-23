const config = {
    SERVER_PORT: 8080,
    getServerDomain: () => ('https://sl2zt6it2h.execute-api.ap-southeast-1.amazonaws.com/kajkai_prod'),
    getClientDomain: () => ('https://www.kajkai.com'),
    getDataSource: () => ('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@172.31.28.99/kajkai-user'),
    FACEBOOK_API_URL: 'https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=',
    GOOGLE_API_URL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=',
}

export default config
