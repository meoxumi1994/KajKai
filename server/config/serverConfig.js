const config = {
    ISTEST : true,
    PROTOCOL: ['http', 'http'],
    IP: ['localhost', '34.209.206.70'], // 34.209.206.70 10.20.16.137
    PORT: 8080,
    getDomain: () => {
        if(config.ISTEST)
            return config.PROTOCOL[0] + '://' + config.IP[0] + ':' + config.PORT;
        else
            return config.PROTOCOL[1] + '://' + config.IP[1] + ':' + config.PORT;
    },
    OTHERPORT: 3000
}

export default config
