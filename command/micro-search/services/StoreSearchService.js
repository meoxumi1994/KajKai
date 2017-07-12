import config from '../config/elasticConfig'
import searchClient from '../datasource'

export const createStore = (store) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_STORE,
        id: store.storeId,
        body: store
    }, (error, response) => {
        console.log('insert store: error ' + error, 'response ' + JSON.stringify(response));
    });
};

export const updateStore = (store) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_STORE,
        id: store.storeId,
        body: store
    }, (error, response) => {
        console.log('update store: error ' + error, 'response ' + JSON.stringify(response));
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
                multi_match: {
                    query: keyword,
                    fuzziness: 1,
                    prefix_length: 0,
                    max_expansions: 20,
                    fields: ['storeName', 'category', 'firstCategoryName', 'secondCategoryName']
                }
            }
        }
    }, (error, response) => {
        console.log('search store: ' + error, 'response ' + JSON.stringify(response));
        next(getHitResult(response));
    })
};

export const getHitResult = (result) => {
    let res = [];
    let hits = result.hits.hits;
    for (let i = 0; i < hits.length; ++i) {
        let store = {
            storeId: hits[i]._source.storeId,
            storeName: hits[i]._source.storeName,
            avatarUrl: hits[i]._source.avatarUrl
        };
        res.push(store);
    }
    return res;
};