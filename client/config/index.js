const config = {
    ISTEST : true,
    PROTOCOL: ['http', 'https'],
    IP: ['localhost', '13.228.23.106'], // 13.228.23.106 10.20.16.136
    PORT: 8080,
    getDomain: () => {
        if(config.ISTEST)
            return config.PROTOCOL[1] + '://' + config.IP[1] + ':' + config.PORT;
        else
            return config.PROTOCOL[0] + '://' + config.IP[0] + ':' + config.PORT;
    }
}

export default config
