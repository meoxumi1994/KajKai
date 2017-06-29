const config = {
    SERVER_PORT: 7073,
    CLIENT_PORT: 3000,
    // EC2 : 13.228.23.106
    // API Gateway : https://g9fd0yor1e.execute-api.ap-southeast-1.amazonaws.com/kajkai
    // Cloudfront : https://dyrzutxpmw2we.cloudfront.net
    // getServerDomain: () => ('http://localhost' + ':' + config.SERVER_PORT),
    getServerDomain: () => ('https://g9fd0yor1e.execute-api.ap-southeast-1.amazonaws.com/kajkai'),
    // getServerDomain: () => ('https://dyrzutxpmw2we.cloudfront.net'),
    getClientDomain: () => ('http://localhost' + ':' + config.CLIENT_PORT)
}

export default config
