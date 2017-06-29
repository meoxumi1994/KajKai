import express from 'express'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import config from './config/commonConfig'
import allRoutes from './routes'

const app = express();

const corsOptions = {
    origin: config.getClientDomain(),
    credentials: true
};

console.log(corsOptions);
console.log(config);
console.log(config.getClientDomain());

app.use(compression());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load all routes
for(let link in allRoutes){
    let allMethods = allRoutes[link];
    for(let requestMethod in allMethods){
        let handler = allMethods[requestMethod];
        let method = require('./controllers/' + handler.controller)[handler.method];
        console.log(method);

        app[requestMethod](link, handler.middleware || [], method())
    }
}

export default app
