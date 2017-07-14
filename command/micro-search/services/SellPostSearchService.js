import config from '../config/elasticConfig'
import searchClient from '../datasource'

export const addNewSellPost = (sellpost) => {
    searchClient.index({
        index: config.INDEX,
        type: config.TYPE_SELL_POST,
        id: sellpost.sellPostId,
        body: user
    }, (error, response) => {
        console.log('insert sellpost error ' + error, 'response ' + JSON.stringify(response));
    });
};

