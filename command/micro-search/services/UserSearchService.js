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

export const searchUser = (userName, offset, length, next) => {
    searchClient.search({
        index: config.INDEX,
        type: config.TYPE_USER,
        body: {
            from: offset,
            size: length,
            query: {
                match: {
                    username: {
                        query: userName,
                        fuzziness: 1,
                        prefix_length: 0,
                        max_expansions: 20
                    }
                }
            }
        }
    }, (error, response) => {
        console.log('search ' + error, 'response ' + JSON.stringify(response));
        next(getHitResult(response));
    })
};

export const getHitResult = (result) => {
    let res = [];
    let hits = result.hits.hits;
    for (let i = 0; i < hits.length; ++i) {
        res.push(hits[i]._source);
    }
    return res;
};