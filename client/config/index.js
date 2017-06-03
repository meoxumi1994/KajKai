const config = {
    ISTEST : true,
    PROTOCOL: ['http', 'http'],
    IP: ['localhost', '10.20.16.133'], // 13.228.23.106 10.20.16.137 192.168.43.179
    PORT: 8080,
    getDomain: () => {
        if(config.ISTEST)
            return config.PROTOCOL[1] + '://' + config.IP[1] + ':' + config.PORT;
        else
            return config.PROTOCOL[0] + '://' + config.IP[0] + ':' + config.PORT;
    }
}

export default config
