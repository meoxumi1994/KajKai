const config = {
    SERVER_PORT: 8080,
    getServerDomain: () => ('https://g9fd0yor1e.execute-api.ap-southeast-1.amazonaws.com/kajkai'),
    getClientDomain: () => ('http://localhost:3000'),
    getDataSource: () => ('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@localhost/kajkai-user'),
    FACEBOOK_API_URL: 'https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=',
    GOOGLE_API_URL: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=',
};

export default config
