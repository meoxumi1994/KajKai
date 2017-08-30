import config from '../config/elasticConfig'
import searchClient from '../datasource'
import { toRoot } from '../utils/utils'

export const indexStore = (store) => {
    const elasticStore = {...store,
        nonTokenStoreName: toRoot(store.storeName),
        nonTokenCategory: toRoot(store.category),
        nonTokenFCategory: toRoot(store.firstCategoryName),
        nonTokenSCategory: toRoot(store.secondCategoryName)
    };
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_STORE,
        id: store.storeId,
        body: elasticStore
    }, (error, response) => {
        console.log('insert store: error ' + error, 'response ' + JSON.stringify(response));
    });
};

export const searchStore = (keyword, offset, length, next) => {
    searchClient.search({
        index: config.INDEX,
        type: config.TYPE_STORE,
        body: {
            from: offset,
            size: length,
            query: {
                bool: {
                    should: [{
                        multi_match: {
                            query: keyword,
                            fuzziness: 1,
                            prefix_length: 0,
                            max_expansions: 20,
                            // fields: ['storeName', 'category', 'firstCategoryName', 'secondCategoryName'],
                            fields: ['storeName'],
                            boost: 10
                        }
                    }, {
                        multi_match: {
                            query: toRoot(keyword),
                            fuzziness: 1,
                            prefix_length: 0,
                            max_expansions: 20,
                            // fields: ['nonTokenStoreName', 'nonTokenCategory', 'nonTokenFCategory', 'nonTokenSCategory'],
                            fields: ['nonTokenStoreName'],
                            boost: 5
                        }
                    }
                    ,
                        {
                        match_phrase_prefix: {
                            nonTokenStoreName: toRoot(keyword)
                        }
                    }
                    // ,
                    //     {
                    //     match_all: {}
                    // }
                    ]
                }
            }
        }
    }, (error, response) => {
        console.log('search store: ' + error, 'response ' + JSON.stringify(response));
        next(getHitResult(response, offset, length));
    })
};

export const getHitResult = (result, offset, length) => {
    let res = [];
    if (!result || !result.hits || !result.hits.hits) {
        return {stores: []};
    }
    let hits = result.hits.hits;
    for (let i = 0; i < hits.length; ++i) {
        let store = {
            storeId: hits[i]._source.storeId,
            storeName: hits[i]._source.storeName,
            avatarUrl: hits[i]._source.avatarUrl
        };
        res.push(store);
    }
    return {stores: res, offset: (length == res.length) ? Number(offset) + Number(length) : -2};
};