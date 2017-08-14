import config from '../config/elasticConfig'
import searchClient from '../datasource'
import { toRoot } from '../utils/utils'

export const indexUser = (user) => {
    console.log('indexing user ' + JSON.stringify(user));
    const elasticUser = {
        userId: user.userId,
        username: user.username,
        avatarUrl: user.avatarUrl,
        nonTokenUsername: toRoot(user.username)
    };
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_USER,
        id: user.userId,
        body: elasticUser
    }, (error, response) => {
        console.log('index user error ' + error, 'response ' + JSON.stringify(response));
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
                bool: {
                    should: [{
                        match: {
                            username: {
                                query: userName,
                                fuzziness: 1,
                                prefix_length: 0,
                                max_expansions: 20
                            }
                        }
                    }, {
                        match: {
                            nonTokenUsername: {
                                query: toRoot(userName),
                                fuzziness: 1,
                                prefix_length: 0,
                                max_expansions: 20
                            }
                        }
                    }]
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
    if (!result || !result.hits || !result.hits.hits) {
        return {users: []}
    }
    let hits = result.hits.hits;
    for (let i = 0; i < hits.length; ++i) {
        res.push(hits[i]._source);
    }
    return {users: res};
};

export const delIndex = (next) => {
    searchClient.indices.delete({
        index: config.INDEX
    }, (error, response) => {
        console.log(error, response);
        next(error, response);
    });
};

export const setIndex = (next) => {
    searchClient.indices.putMapping({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        body: {
            properties: {
                location: {
                    type: 'geo_point'
                }
            }
        }
    }, (error, response) => {
        console.log(error, response);
        next(error, response);
    })
};