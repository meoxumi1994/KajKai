const config = {
    SERVER_PORT: 8082,
    getServerDomain: () => ('https://sl2zt6it2h.execute-api.ap-southeast-1.amazonaws.com/kajkai_prod'),
    getClientDomain: () => ('https://www.kajkai.com'),
    getDataSource: () => ('mongodb://admin:dbjfu9cyr82bt2cpqbtuiavcp49q7vp48cq09xpnbu@172.31.28.99/kajkai-comment')
}

export default config
