import config from '../config/elasticConfig'
import searchClient from '../datasource'

export const createUser = (user) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_USER,
        id: user.userId,
        body: user
    }, (error, response) => {
        console.log('insert user error ' + error, 'response ' + JSON.stringify(response));
    });
};

export const updateUser = (user) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_USER,
        id: user.userId,
        body: user
    }, (error, response) => {
        console.log('update user error ' + error, 'response ' + JSON.stringify(response));
    });
};

export const searchUser = (userName, next) => {
    searchClient.search({
        index: config.INDEX,
        type: config.TYPE_USER,
        body: {
            query: {
                match: {
                    body: userName
                }
            }
        }
    }, (error, response) => {
        console.log('search ' + error, 'response ' + JSON.stringify(response));
        next(response);
    })
};