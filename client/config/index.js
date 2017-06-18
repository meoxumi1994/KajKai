const config = {
    ISTEST : 0,
    PROTOCOL: ['http', 'http','http'],
    IP: ['localhost', '13.228.23.106','localhost'], // 13.228.23.106 10.20.16.137 192.168.43.179
    PORT: 8080,
    getDomain: () => {
        if(config.ISTEST == 0)
            return config.PROTOCOL[0] + '://' + config.IP[0] + ':' + config.PORT;
        else if(config.ISTEST == 1)
            return config.PROTOCOL[1] + '://' + config.IP[1] + ':' + config.PORT;
        else if(config.ISTEST == 2)
            return config.PROTOCOL[2] + '://' + config.IP[2] + ':' + config.PORT;
    }
}

export default config
