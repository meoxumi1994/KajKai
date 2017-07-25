const config = {
    ISTEST : 1,
    PROTOCOL: ['http', 'https','http'],
    IP: ['localhost', 'g9fd0yor1e.execute-api.ap-southeast-1.amazonaws.com/kajkai','localhost'], // 13.228.23.106 10.20.16.137 192.168.43.179
    // IP: ['localhost', '3cle5jdlb0.execute-api.ap-southeast-1.amazonaws.com/kajkai_dev','localhost'],
    // IP: ['localhost', 'aqju17j8of.execute-api.ap-southeast-1.amazonaws.com/kajkai_admin','localhost'],
    PORT: ':8080',
    getDomain: () => {
        if(config.ISTEST == 0)
            return config.PROTOCOL[0] + '://' + config.IP[0] + config.PORT;
        else if(config.ISTEST == 1)
            return config.PROTOCOL[1] + '://' + config.IP[1];
        else if(config.ISTEST == 2)
            return config.PROTOCOL[2] + '://' + config.IP[2] + config.PORT;
    },
    getSocket: () => {
        if(config.ISTEST == 0)
            return config.PROTOCOL[0] + '://' + config.IP[0] + config.PORT;
        else if(config.ISTEST == 1)
            return config.PROTOCOL[1] + '://socket.kajkai.com';
        // else if(config.ISTEST == 2)
        //     return config.PROTOCOL[2] + '://' + config.IP[2] + config.PORT;
    }
}

export default config
