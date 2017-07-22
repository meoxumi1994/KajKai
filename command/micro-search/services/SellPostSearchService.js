import config from '../config/elasticConfig'
import searchClient from '../datasource'
import category from "../../../client/reducers/inst/category/index";

export const indexSellPost = (sellpost) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        id: sellpost.sellPostId,
        body: sellpost
    }, (error, response) => {
        console.log('insert sellpost error ' + error, 'response ' + JSON.stringify(response));
    });
};

export const getSellPost = (sellPostId, next) => {
    searchClient.get({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        id: sellPostId
    }, (error, response) => {
        console.log('get sell post: ', 'error ' + error, 'response ' + JSON.stringify(response));
        // let res = getHitResult(response);
        if (response.found) {
            next(response._source);
        } else {
            next(null);
        }
    })
};

export const getHitResult = (result) => {
    let res = [];
    if (!result || !result.hits || !result.hits.hits) {
        return {sellPosts: []};
    }
    let hits = result.hits.hits;
    for (let i = 0; i < hits.length; ++i) {
        res.push(hits[i]._source);
    }
    return {sellPosts: res};
};

export const getDisplayResult = (hitsResult) => {
    let res = [];
    if (!hitsResult || !hitsResult.sellPosts || hitsResult.sellPosts.length === 0) {
        return {sellPosts: res}
    }
    for (let i = 0; i < hitsResult.sellPosts.length; ++i) {
        let sellPost = {
            sellPostId: hitsResult.sellPosts[i].sellPostId,
            avatarUrl: hitsResult.sellPosts[i].avatarUrl,
            title: hitsResult.sellPosts[i].category
        };
        res.push(sellPost);
    }
    return {sellPosts: res};
};

export const updateSellPost = (sellpost) => {
    console.log('this sellpost ' + JSON.stringify(sellpost));
    getSellPost(sellpost.sellPostId, (oldSellPost) => {
        if (sellpost.category) oldSellPost.category = sellpost.category;
        if (sellpost.title) oldSellPost.title = sellpost.title;
        if (sellpost.avatarUrl) oldSellPost.avatarUrl = sellpost.avatarUrl;
        indexSellPost(oldSellPost);
    })
};

export const addNewProduct = (product) => {
    getSellPost(product.sellPostId, (oldSellPost) => {
        oldSellPost.productContent += product.sellPostId + ':&' + product.content + ';&';
        indexSellPost(oldSellPost);
    })
};

export const updateProduct = (product) => {
    getSellPost(product.sellPostId, (oldSellPost) => {
        // oldSellPost.productContent
        let content = oldSellPost.productContent;
        let f = content.indexOf(product.sellPostId + ':&');
        if (f === -1) return;
        console.log('product id not valid ' + JSON.stringify(product));
        let s = content.indexOf(';&', f);
        oldSellPost.content = content.substring(0, f) + product.sellPostId + ':&' + product.content + content.substring(s, content.length);
        indexSellPost(oldSellPost);
    })
};

export const searchSellPost = (offset, length, categoryId, location, keyword, next) => {
    if (location && location.length > 0) {
        searchWithLocation(offset, length, categoryId, location, keyword, (res) => {
            next(getDisplayResult(res));
        })
    } else {
        searchWithoutLocation(offset, length, categoryId, keyword, (res) => {
            next(getDisplayResult(res));
        })
    }
};

export const updateSellPostThroughStore = (storeId, avatarUrl) => {
    searchClient.search({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        body: {
            query: {
                match: {
                    storeId: storeId
                }
            }
        }
    }, (error, response) => {
        if (response.hits && response.hits.hits) {
            console.log(JSON.stringify(response.hits.hits));
            for (let i = 0; i < response.hits.hits.length; ++i) {
                updateSellPost({sellPostId: response.hits.hits[i]._source.sellPostId, avatarUrl: avatarUrl})
            }
        }
    })
};

export const searchWithoutLocation = (offset, length, categoryId, keyword, next) => {
    if (categoryId !== -1) {
        if (!keyword || keyword.length === 0) {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        match_all: {}
                    }
                }
            }, (error, response) => {
                console.log('search without location: ' + 'category: ' + categoryId + ' ' + 'keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        dis_max: {
                            tie_breaker: 0.1,
                            queries: [{
                                multi_match: {
                                    query: keyword,
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['title', 'category', 'productContent', 'firstCategoryName', 'secondCategoryName']
                                }
                            }, {
                                match_phrase_prefix: {
                                    category: keyword
                                }
                            }]
                        }
                    }
                }
            }, (error, response) => {
                console.log('search without location: ' + 'category: ' + categoryId + ' ' + 'keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        }
    } else {
        if (!keyword || keyword.length === 0) {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        multi_match: {
                            query: categoryId,
                            fields: ['firstCategoryId', 'secondCategoryId']
                        }
                    }
                }
            }, (error, response) => {
                console.log('search without location: ' + 'category: ' + categoryId + ' ' + 'keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        dis_max: {
                            tie_breaker: 0.1,
                            queries: [{
                                multi_match: {
                                    query: keyword,
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['title', 'category', 'productContent'],
                                    boost: 10
                                }
                            }, {
                                multi_match: {
                                    query: categoryId,
                                    fields: ['firstCategoryId', 'secondCategoryId'],
                                    boost: 5,
                                }
                            }, {
                                match_phrase_prefix: {
                                    category: keyword,
                                    boost: 10
                                }
                            }]
                        }
                    },
                    min_score: 0.5
                }
            }, (error, response) => {
                console.log('search without location: ' + 'category: ' + categoryId + ' ' + 'keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        }
    }
};

export const searchWithLocation = (offset, length, categoryId, location, keyword, next) => {
    if (categoryId !== -1) {
        if (!keyword || keyword.length === 0) {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        match: {
                            address: {
                                query: location,
                                fuzziness: 1,
                                prefix_length: 0,
                                max_expansions: 20
                            }
                        }
                    }
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        dis_max: {
                            tie_breaker: 0.1,
                            queries: [{
                                multi_match: {
                                    boost: 5,
                                    query: keyword,
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['title', 'category', 'productContent']
                                }
                            }, {
                                match: {
                                    address: {
                                        query: location,
                                        fuzziness: 1,
                                        prefix_length: 0,
                                        max_expansions: 5,
                                        boost: 2
                                    }
                                }
                            }, {
                                match_phrase_prefix: {
                                    category: keyword,
                                    boost: 10
                                }
                            }]
                        }
                    },
                    min_score: 0.5
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        }
    } else {
        if (!keyword || keyword.length === 0) {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        dis_max: {
                            tie_breaker: 0.1,
                            queries: [{
                                multi_match: {
                                    query: categoryId,
                                    fields: ['firstCategoryId', 'secondCategoryId'],
                                    boost: 5,
                                }
                            }, {
                                match: {
                                    address: {
                                        query: location,
                                        fuzziness: 1,
                                        prefix_length: 0,
                                        max_expansions: 5,
                                        boost: 2
                                    }
                                }
                            }]
                        }
                    },
                    min_score: 0.5
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        dis_max: {
                            tie_breaker: 0.1,
                            queries: [{
                                multi_match: {
                                    query: keyword,
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['title', 'category', 'productContent'],
                                    boost: 10
                                }
                            }, {
                                multi_match: {
                                    query: categoryId,
                                    fields: ['firstCategoryId', 'secondCategoryId'],
                                    boost: 5,
                                }
                            }, {
                                match: {
                                    address: {
                                        query: location,
                                        fuzziness: 1,
                                        prefix_length: 0,
                                        max_expansions: 5,
                                        boost: 2
                                    }
                                }
                            }, {
                                match_phrase_prefix: {
                                    category: keyword,
                                    boost: 10
                                }
                            }]
                        }
                    },
                    min_score: 1
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response));
            })
        }
    }
};