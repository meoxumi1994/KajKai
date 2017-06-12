const config = {
    ISTEST : true,
    PROTOCOL: ['http', 'https'],
    IP: ['localhost', 'dyrzutxpmw2we.cloudfront.net'], // 13.228.23.106 10.20.16.133 192.168.43.179
    PORT: 7777,
    getDomain: () => {
        if(config.ISTEST)
            return config.PROTOCOL[1] + '://' + config.IP[1];// + ':' + config.PORT;
        else
            return config.PROTOCOL[0] + '://' + config.IP[0] + ':' + config.PORT;
    }
}

export default config
