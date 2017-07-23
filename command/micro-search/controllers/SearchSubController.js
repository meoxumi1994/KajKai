import { createUser, updateUser } from '../services/UserSearchService'
import { createStore, updateStore } from '../services/StoreSearchService'
import { getStore } from '../controllers/SearchPubController'
import { indexSellPost, updateSellPost, updateProduct, addNewProduct, updateSellPostThroughStore } from '../services/SellPostSearchService'

export const createUserSub = (message) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    createUser({userId, username, avatarUrl});
};

export const updateUserSub = (message) => {
    console.log(message, JSON.stringify(message));
    const user = message.user;
    const userId = user.id;
    const username = user.username;
    const avatarUrl = user.avatarUrl;
    updateUser({userId, username, avatarUrl});
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
    createStore({storeId, storeName, avatarUrl, address, category, firstCategoryName, secondCategoryName});
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
    updateStore({storeId, storeName, avatarUrl, address, category, firstCategoryName, secondCategoryName});
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
        indexSellPost({sellPostId, storeId, title, category, address, firstCategoryId, secondCategoryId, firstCategoryName, secondCategoryName, avatarUrl, productContent});
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

export const createSellPostProductSub = (message) => {
    console.log(message, JSON.stringify(message));
    const product = message.product;
    const content = product.product.content;
    const sellPostId = product.sellPostId;
    const productId = product.productId;
    addNewProduct({sellPostId, content, productId});
};

export const updateSellPostProductSub = (message) => {
    console.log(message, JSON.stringify(message));
    const product = message.product;
    const content = product.product.content;
    const sellPostId = product.sellPostId;
    const productId = product.productId;
    updateProduct({sellPostId, content, productId});
};
