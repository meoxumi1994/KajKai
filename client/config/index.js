const config = {
    PROTOCOL: 'https',
    IP: 'dyrzutxpmw2we.cloudfront.net',
    PORT: 8080,
    getDomain: () => (config.PROTOCOL + '://' + config.IP)
}

export default config
