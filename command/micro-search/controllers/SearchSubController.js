import { indexUser } from '../services/UserSearchService'
import { indexStore } from '../services/StoreSearchService'
import { getStore } from '../controllers/SearchPubController'
import { indexSellPost, updateSellPost, updateSellPostThroughStore, deleteSellPost, updateProduct } from '../services/SellPostSearchService'

export const createUserSub = (message) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    indexUser({userId, username, avatarUrl});
};

export const createStoreSub = (message) => {
    console.log(message, JSON.stringify(message));
    const store = message.store;
    const storeId = store.id;
    const storeName = store.storeName;
    const avatarUrl = store.avatarUrl;
    const address = store.address;
    const category = store.category;
    const firstCategoryName = store.firstCategoryName;
    const secondCategoryName = store.secondCategoryName;
    indexStore({storeId, storeName, avatarUrl, address, category, firstCategoryName, secondCategoryName});
    if (avatarUrl) {
        updateSellPostThroughStore(storeId, avatarUrl)
    }
};

export const updateStoreSub = (message) => {
    console.log(message, JSON.stringify(message));
    const store = message.store;
    const storeId = store.id;
    const storeName = store.storeName;
    const avatarUrl = store.avatarUrl;
    const address = store.address;
    const category = store.category;
    const firstCategoryName = store.firstCategoryName;
    const secondCategoryName = store.secondCategoryName;
    indexStore({storeId, storeName, avatarUrl, address, category, firstCategoryName, secondCategoryName});
    if (avatarUrl) {
        updateSellPostThroughStore(storeId, avatarUrl)
    }
};

export const createSellPostSub = (message) => {
    console.log(message, JSON.stringify(message));
    const sellpost = message.sellpost;
    const sellPostId = sellpost.sellPostId;
    const storeId = sellpost.storeId;
    const title = sellpost.title;
    const category = sellpost.category;
    getStore(storeId, (store) => {
        const address = store.address;
        const firstCategoryId = store.firstCategoryId;
        const secondCategoryId = store.secondCategoryId;
        const firstCategoryName = store.firstCategoryName;
        const secondCategoryName = store.secondCategoryName;
        const avatarUrl = store.avatarUrl;
        const productContent = '';
        const location = {
            lat: store.latitude,
            lon: store.longitude
        };
        indexSellPost({sellPostId, storeId, title, category, address, firstCategoryId,
            secondCategoryId, firstCategoryName, secondCategoryName, avatarUrl, productContent, location});
    })
};

export const updateSellPostSub = (message) => {
    console.log(message, JSON.stringify(message));
    const sellpost = message.sellpost;
    const title = sellpost.title;
    const category = sellpost.category;
    const sellPostId = sellpost.sellPostId;
    updateSellPost({sellPostId, category, title});
};

export const deleteSellpostSub = (message) => {
    console.log(message, JSON.stringify(message));
    const sellpostId = message.sellpost.sellPostId;
    deleteSellPost(sellpostId);
};

export const createSellPostProductSub = (message) => {
    console.log(message, JSON.stringify(message));
    const product = message.list;
    if (product && product.content) {
        const sellPostId = product.sellPostId;
        const content = product.content;
        console.log('this ' + sellPostId + ' ' + content);
        setTimeout(function () {
            updateProduct(sellPostId, content);
        }, 1000);
    }
    // if (product.product.list && product.product.list.length > 0) {
    //     const content = product.product.list[0];
    //     const sellPostId = product.sellPostId;
    //     const productId = product.productId;
    //     // setTimeout(function () {
    //     //     addNewProduct({sellPostId, content, productId});
    //     // }, 3000);
    // }
};


