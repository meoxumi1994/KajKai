const config = {
    SERVER_PORT: 8082,
    getServerDomain: () => ('https://3cle5jdlb0.execute-api.ap-southeast-1.amazonaws.com/kajkai_dev'),
    getClientDomain: () => ('http://localhost:3000'),
    getDataSource: () => ('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@54.254.219.177/kajkai-comment')
};

export default config
