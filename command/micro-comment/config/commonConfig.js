const config = {
    SERVER_PORT: 8082,
    getServerDomain: () => ('https://g9fd0yor1e.execute-api.ap-southeast-1.amazonaws.com/kajkai'),
    getClientDomain: () => ('http://localhost:3000'),
    getDataSource: () => ('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@localhost/kajkai-comment')
};

export default config
