require('babel-register')({
    presets: ['es2015', 'react'],
    plugins: ["transform-object-rest-spread"]
});
require('./server');
