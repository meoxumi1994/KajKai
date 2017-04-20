const config = {
  PROTOCOL: 'http',
  IP: 'localhost',
  PORT: process.env.PORT || 3000,
  getDomain: () => (config.PROTOCOL + '://' + config.IP + ':' + config.PORT)
}

export default config
