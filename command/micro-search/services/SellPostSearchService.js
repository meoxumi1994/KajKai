import config from '../config/elasticConfig'
import searchClient from '../datasource'
import { toRoot } from '../utils/utils'

export const indexSellPost = (sellpost) => {
    const elasticSellPost = {...sellpost,
        nonTokenTitle: sellpost.title ? toRoot(sellpost.title) : null,
        nonTokenCategory: sellpost.category ? toRoot(sellpost.category) : null,
        nonTokenFCategory: sellpost.firstCategoryName ? toRoot(sellpost.firstCategoryName) : null,
        nonTokenSCategory: sellpost.secondCategoryName ? toRoot(sellpost.secondCategoryName) : null
    };
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        id: sellpost.sellPostId,
        body: elasticSellPost
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
        if (response.found) {
            next(response._source);
        } else {
            next(null);
        }
    })
};

export const getHitResult = (result, offset, length) => {
    let res = [];
    if (!result || !result.hits || !result.hits.hits) {
        return {sellPosts: []};
    }
    let hits = result.hits.hits;
    for (let i = 0; i < hits.length; ++i) {
        res.push(hits[i]._source);
    }
    return {sellPosts: res, offset: (length === res.length) ? offset + length : -2};
};

export const getDisplayResult = (hitsResult, offset, length) => {
    let res = [];
    if (!hitsResult || !hitsResult.sellPosts || hitsResult.sellPosts.length === 0) {
        return {sellPosts: res, offset: (length === res.length) ? offset + length : -2};
    }
    for (let i = 0; i < hitsResult.sellPosts.length; ++i) {
        let sellPost = {
            sellPostId: hitsResult.sellPosts[i].sellPostId,
            avatarUrl: hitsResult.sellPosts[i].avatarUrl,
            title: hitsResult.sellPosts[i].category,
            storeId: hitsResult.sellPosts[i].storeId
        };
        res.push(sellPost);
    }
    return {sellPosts: res, offset: (length == res.length) ? Number(offset) + Number(length) : -2};
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

export const deleteSellPost = (id) => {
    searchClient.delete({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        id: id
    }, (err, resp) => {
        console.log('delete ' + err, resp);
    })
};

export const addNewProduct = (product) => {
    getSellPost(product.sellPostId, (oldSellPost) => {
        oldSellPost.productContent += product.sellPostId + ':& ' + toRoot(product.content) + ' ;&';
        indexSellPost(oldSellPost);
    })
};

export const searchSellPost = (offset, length, categoryId, location, keyword, next) => {
    if (location && location.lat && location.lon &&
        location.lat !== "null" && location.lon !== 'null') {
        searchWithLocation(offset, length, categoryId, location, keyword, (res) => {
            next(getDisplayResult(res, offset, length));
        })
    } else {
        searchWithoutLocation(offset, length, categoryId, keyword, (res) => {
            next(getDisplayResult(res, offset, length));
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
    if (categoryId == -1) {
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
                next(getHitResult(response, offset, length));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
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
                                    fields: ['title', 'category', 'productContent', 'firstCategoryName', 'secondCategoryName'],
                                    boost: 10
                                }
                            }, {
                                multi_match: {
                                    query: toRoot(keyword),
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['nonTokenTitle', 'nonTokenCategory', 'productContent', 'nonTokenFCategory', 'nonTokenSCategory'],
                                    boost: 5
                                }
                            }, {
                                match_phrase_prefix: {
                                    nonTokenCategory: toRoot(keyword)
                                }
                            },
                            //     {
                            //     match_all: {}
                            // }
                            ]
                        }
                    }
                }

            }, (error, response) => {
                console.log('search without location: ' + 'category: ' + categoryId + ' ' + 'keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response, offset, length));
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
                next(getHitResult(response, offset, length));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
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
                                    fields: ['title', 'category', 'productContent'],
                                    boost: 10
                                }
                            }, {
                                multi_match: {
                                    query: toRoot(keyword),
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['nonTokenTitle', 'nonTokenCategory', 'productContent', 'nonTokenFCategory', 'nonTokenSCategory'],
                                    boost: 5
                                }
                            }, {
                                match_phrase_prefix: {
                                    nonTokenCategory: toRoot(keyword)
                                }
                            }],
                            filter: {
                                bool: {
                                    should: [
                                        {term: {firstCategoryId: categoryId}},
                                        {term: {secondCategoryId: categoryId}}
                                    ],
                                    minimum_should_match: 1
                                }
                            }
                        }
                    }
                }
            }, (error, response) => {
                console.log('search without location: ' + 'category: ' + categoryId + ' ' + 'keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response, offset, length));
            })
        }
    }
};

export const searchWithLocation = (offset, length, categoryId, location, keyword, next) => {
    if (categoryId == -1) {
        if (!keyword || keyword.length === 0) {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
                body: {
                    from: offset,
                    size: length,
                    query: {
                        bool: {
                            must: {
                                match_all: {}
                            },
                            filter: {
                                geo_distance: {
                                    distance: config.MAX_DISTANT_FILTER,
                                    location: location
                                }
                            }
                        }
                    }
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response, offset, length));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
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
                                    fields: ['title', 'category', 'productContent', 'firstCategoryName', 'secondCategoryName'],
                                    boost: 10
                                }
                            }, {
                                multi_match: {
                                    query: toRoot(keyword),
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['nonTokenTitle', 'nonTokenCategory', 'productContent', 'nonTokenFCategory', 'nonTokenSCategory'],
                                    boost: 5
                                }
                            }, {
                                match_phrase_prefix: {
                                    nonTokenCategory: toRoot(keyword)
                                }
                            }],
                            filter: {
                                geo_distance: {
                                    distance: config.MAX_DISTANT_FILTER,
                                    location: location
                                }
                            }
                        }
                    }
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response, offset, length));
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
                        bool: {
                            should: [{
                                multi_match: {
                                    query: categoryId,
                                    fields: ['firstCategoryId', 'secondCategoryId']
                                }
                            }],
                            filter: {
                                geo_distance: {
                                    distance: config.MAX_DISTANT_FILTER,
                                    location: location
                                }
                            }
                        }
                    }
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response, offset, length));
            })
        } else {
            searchClient.search({
                index: config.INDEX,
                type: config.TYPE_SELL_POST,
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
                                    fields: ['title', 'category', 'productContent'],
                                    boost: 10
                                }
                            }, {
                                multi_match: {
                                    query: toRoot(keyword),
                                    fuzziness: 1,
                                    prefix_length: 0,
                                    max_expansions: 20,
                                    fields: ['nonTokenTitle', 'nonTokenCategory', 'productContent', 'nonTokenFCategory', 'nonTokenSCategory'],
                                    boost: 5
                                }
                            }, {
                                match_phrase_prefix: {
                                    nonTokenCategory: toRoot(keyword)
                                }
                            }],
                            filter: {
                                bool: {
                                    should: [
                                        {term: {firstCategoryId: categoryId}},
                                        {term: {secondCategoryId: categoryId}},
                                        {
                                            geo_distance: {
                                                distance: config.MAX_DISTANT_FILTER,
                                                location: location
                                            }
                                        }
                                    ],
                                    minimum_should_match: 2
                                }
                            }
                        }
                    }
                }
            }, (error, response) => {
                console.log('search location: ' + location + ';category: ' + categoryId + ' ' + ';keyword: ' + keyword, error, JSON.stringify(response));
                next(getHitResult(response, offset, length));
            })
        }
    }
};